import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { NodeInfo, Image } from './styles/NodeInfo.styled';

const RelationGraph = ({ movies, genre, allmovies}) => {
  console.log("debug movies", movies);
  const svgRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [nodeInfoPosition, setNodeInfoPosition] = useState({ top: 0, left: 0 });
  const [filteredMovies, setFilteredMovies] = useState([]); 

  const InitialfilterMovies = (genre, movies) => {
    let tmpMovies = genre ? movies.filter(item => item.genre.indexOf(genre) !== -1) : movies;

    if (tmpMovies.length > 20) {
      tmpMovies = tmpMovies.sort((a, b) => a.rating - b.rating).slice(0, 20);
    }
    setFilteredMovies(tmpMovies);
  }

  const updateFilterMovies = (movieId) => {
    const movie = allmovies.find(item => item.id === movieId);
    if (movie) {
      const neighborIds = movie.neighbors;
      const newFilteredMovies = [...filteredMovies];
      console.log("debug neighborIds", neighborIds)
      neighborIds.forEach(neighborId => {
        const neighborMovie = allmovies.find(item => item.id === neighborId);
        if (neighborMovie && !newFilteredMovies.some(item => item.id === neighborId)) {
          newFilteredMovies.push(neighborMovie);
        }
      });
      console.log("newFilteredMovies", newFilteredMovies);
      setFilteredMovies(newFilteredMovies);
    }
  };

  useEffect(() => {
    const width = 1200;
    const height = 900;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)


    // Clear previous graph elements
    svg.selectAll('*').remove();

    const simulation = d3.forceSimulation()
      .force('link', d3.forceLink().id(d => d.id).distance(400)) // Adjust the distance parameter
      .force('charge', d3.forceManyBody().strength(-100))
      .force('center', d3.forceCenter(width / 2, height / 2));

    console.log("debug here", genre, movies);

    InitialfilterMovies(genre, movies);

    const links = filteredMovies.reduce((acc, movie) => {
      const movieId = movie.id;
      const neighborIds = movie.neighbors;

      const movieLinks = neighborIds
        .filter(neighborId => filteredMovies.some(movie => movie.id === neighborId))
        .map(neighborId => ({
          source: movieId,
          target: neighborId
        }));

      return [...acc, ...movieLinks];
    }, []);

    const nodes = filteredMovies.map(movie => ({
      id: movie.id,
      imageUrl: movie.image_url,
      rank: movie.rank,
      rating: movie.rating,
      title: movie.title,
      genre: movie.genre,
      neighbors: movie.neighbors
    }));

    const link = svg.selectAll('.link')
      .data(links)
      .enter()
      .append('line')
      .attr('class', 'link')
      .style('stroke', 'black'); 

    const node = svg.selectAll('.node')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .call(drag(simulation))
      .on('mouseover', handleMouseOver)
      .on('mouseout', handleMouseOut)
      .on('click', handleClick); 

    node.append('circle')
      .attr('r', 10)
      .style('fill', 'white')
      .style('stroke', 'black');

    node.append('image')
      .attr('xlink:href', d => d.imageUrl)
      .attr('x', -10)
      .attr('y', -10)
      .attr('width', 20)
      .attr('height', 20)
      .attr('clip-path', 'circle(10px at 10px 10px)') 
      .attr('preserveAspectRatio', 'xMidYMid slice') 
      .on('error', (event) => {
        d3.select(event.target).attr('xlink:href', 'fallback-image.jpg');
      });

    const label = svg.selectAll('.label')
      .data(nodes)
      .enter()
      .append('text')
      .attr('class', 'label')
      .text(d => d.title);

    simulation.nodes(nodes).on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node.attr('transform', d => `translate(${d.x},${d.y})`);

      label
        .attr('x', d => d.x + 15)
        .attr('y', d => d.y + 5);
    });

    simulation.force('link').links(links);

    function drag(simulation) {
      function dragStarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragEnded(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3.drag().on('start', dragStarted).on('drag', dragged).on('end', dragEnded);
    }

    function handleMouseOver(event, d) {
      setHoveredNode(d);
      // Calculate position relative to the node's coordinates
      const svgElement = svgRef.current;
      const svgRect = svgElement.getBoundingClientRect();
      const nodeRect = event.target.getBoundingClientRect();

      const position = {
        top: nodeRect.top - svgRect.top + nodeRect.height + 10,
        left: nodeRect.left - svgRect.left + nodeRect.width + 10,
      };

      setNodeInfoPosition(position);
    }

    function handleMouseOut() {
      setHoveredNode(null);
    }

    function handleClick(event, d) {

      updateFilterMovies(d.id);

      // Update the entire D3 figure
      node.select('circle')
        .transition()
        .duration(200)
        .attr('r', nodeData => (nodeData === d) ? 40 : d.neighbors.includes(nodeData.id) ? 20 : 10);

      node.select('image')
        .transition()
        .duration(200)
        .attr('x', nodeData => (nodeData === d) ? -40 : d.neighbors.includes(nodeData.id) ? -20 : -10)
        .attr('y', nodeData => (nodeData === d) ? -40 : d.neighbors.includes(nodeData.id) ? -20 : -10)
        .attr('width', nodeData => (nodeData === d) ? 80 : d.neighbors.includes(nodeData.id) ? 40 : 20)
        .attr('height', nodeData => (nodeData === d) ? 80 : d.neighbors.includes(nodeData.id) ? 40 : 20)
        .attr('clip-path', nodeData => (nodeData === d) ? 'circle(40px at 40px 40px)': d.neighbors.includes(nodeData.id) ? 'circle(20px at 20px 20px)' : 'circle(10px at 10px 10px)'); // Apply circular clip path at the center of the image;

      link
        .style('stroke', linkData => (linkData.source === d || linkData.target === d) ? 'black' : 'darkgrey');
    }

    // Clean up the simulation when component unmounts
    return () => {
      simulation.stop();
    };
  }, [movies, genre]);

  return (
    <div>
      <svg ref={svgRef}></svg>
      {hoveredNode && (
        <NodeInfo style={nodeInfoPosition}>
           <Image src={hoveredNode.imageUrl} alt={hoveredNode.id} />
           <p># {hoveredNode.rank}</p>
           <p>Movie Name: {hoveredNode.id}</p>
           <p>Genre: {hoveredNode.genre}</p>
           <p>Rating: {hoveredNode.rating}</p>
        </NodeInfo>
      )}
    </div>
  );
};

export default RelationGraph;
