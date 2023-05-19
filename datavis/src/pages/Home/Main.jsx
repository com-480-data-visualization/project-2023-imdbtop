/*
Page: Main for the homepage
This page collects all the materials to fetch a movie.

*/

import React, { useEffect, useState } from "react";
import { StyledArticle } from "../../components/styles/Page.styled";
import Content from "../../components/Content";
import PopupBackground from "../../components/PopupBackground";
import Features from "./Features";

import Lists from "../../components/Lists";
import * as d3 from 'd3';
import RelationGraph from "../../components/RelationGraph";
import { request, sortBy } from "../../data/data";

const Main = ({ genreID }) => {
  // Data is stored to display the content of the movie.
  const [setlectedMovieID, setSelectedMovieID] = useState(null);

  // Filter movies.
  const [sortByURL, setSortByURL] = useState("popular");

  // Set how to display the movie posters.
  const [viewBy, setViewBy] = useState(true);

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await d3.json('/data/movies_relation.json'); // Replace with the actual path to your JSON file
        setMovies(response);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  console.log("request[genreID].genre", request[genreID].genre);
  if (viewBy == false) {
    return (
      <StyledArticle>
        <Features
          sortByURL={sortByURL}
          setSortByURL={(str) => setSortByURL(str)}
          viewBy={viewBy}
          setViewBy={(bool) => setViewBy(bool)}
        />

        <Lists
          pageParent="HOME"
          parameter={request[genreID].URL}
          query={genreID + sortByURL}
          path={sortBy[sortByURL]}
          viewBy={viewBy}
          setSelectedMovieID={(id) => setSelectedMovieID(id)}
        />

        {/* 
        If the movie ID value is obtained, the movie 
        information is displayed in the content. 
        */}
        {setlectedMovieID !== null && (
          <>
            <Content
              data={setlectedMovieID}
              setSelectedMovieID={(off) => setSelectedMovieID(off)}
            />
            <PopupBackground
              setSelectedMovieID={(off) => setSelectedMovieID(off)}
            />
          </>
        )}
        <span></span>
      </StyledArticle>
    );
  } else {
  
    // Save the value in setGenreID to fetch/filter the type of movie.
    return (
      <StyledArticle>
      <Features
        sortByURL={sortByURL}
        setSortByURL={(str) => setSortByURL(str)}
        viewBy={viewBy}
        setViewBy={(bool) => setViewBy(bool)}
      />
      <RelationGraph movies={movies} genre = {request[genreID].genre} />
      </StyledArticle>
    );
  }
};

export default Main;
