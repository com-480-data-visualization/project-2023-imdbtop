import React from "react";
import * as d3 from 'd3';
import { useEffect, useState } from 'react';
import {
  StyledInfo,
  StyledInfoSection,
  StyledInfoHeader,
  StyledInfoMain,
  StyledInfoImage,
} from "../../components/styles/Info.styled";

import logo from "../../assets/main_logo.png";

import RelationGraph from "../../components/RelationGraph";
import { request } from "../../data/data";
import { StyledPage } from "../../components/styles/Page.styled";
import Aside from "./Aside";

const generateRandomMovieList = length => {
  const movies = [];

  for (let i = 1; i <= length; i++) {
    const movie = {
      id: i,
      title: `Movie ${i}`,
      category:  Math.floor(Math.random() * 10) + 1,
      neighbors: generateRandomNeighbors(length, i),
      image_url: "https://m.media-amazon.com/images/M/MV5BZTg5ZTVmM2EtZjdhZC00MzBjLWEwZTYtNWIwZDczYzZkMzA4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    };

    movies.push(movie);
  }

  return movies;
};

const generateRandomNeighbors = (length, currentId) => {
  const neighbors = [];

  while (neighbors.length < 5) {
    const randomId = Math.floor(Math.random() * length) + 1;

    if (randomId !== currentId && !neighbors.includes(randomId)) {
      neighbors.push(randomId);
    }
  }

  return neighbors;
};

const test_category = "Romance"

// Generate a random movie list with a length of 50
// const movies = generateRandomMovieList(250);
const MovieGraphVis = () => {
  
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

  // Save the value in setGenreID to fetch/filter the type of movie.
  const [genreID, setGenreID] = useState(5);
  console.log(request[genreID].genre)
  return (
    <StyledPage>
      <Aside
        genreID={genreID}
        setGenreID={(int) => {
          setGenreID(int);
        }}
      />
       <RelationGraph movies={movies} genre = {request[genreID].genre} />
    </StyledPage>
  );
};

export default MovieGraphVis;
