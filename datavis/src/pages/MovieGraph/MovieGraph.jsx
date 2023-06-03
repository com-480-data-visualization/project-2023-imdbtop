import React from "react";
import * as d3 from 'd3';
import { useEffect, useState } from 'react';
import {
  StyledAside,
  StyledAsideLogo,
} from "../../components/styles/Aside.styled";

import logo from "../../assets/main_logo.png";

import RelationGraph from "../../components/RelationGraph";
import { request } from "../../data/data";
import { StyledPage } from "../../components/styles/Page.styled";
import Aside from "./Aside";

// Generate a random movie list with a length of 50
// const movies = generateRandomMovieList(250);
const MovieGraphVis = () => {
  
  const [movies, setMovies] = useState([]);
  const [isFeteched, setIsFeteched] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleSearchMovies = (selected) => {
    // console.log("debug handleSearchMovies", selected)
    if (selected.length === 0) {
      setSelectedMovies(movies); 
      setGenreID(16);
    } else {
      setSelectedMovies(selected);
      setGenreID(17);
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      if (! isFeteched) {
        try {
          const response = await d3.json('/data/movies_relation.json'); // Replace with the actual path to your JSON file
          setMovies(response);
          setSelectedMovies(response);
          setIsFeteched(true);
        } catch (error) {
          console.error('Error fetching JSON data:', error);
        }
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
        movies = {movies} 
        genreID={genreID}
        setGenreID={(int) => {
          setGenreID(int);
        }}
        setMovies = {handleSearchMovies}
      />
      <RelationGraph movies={selectedMovies} genre = {request[genreID].label} allmovies = {movies}/>
    </StyledPage>
  );
};

export default MovieGraphVis;
