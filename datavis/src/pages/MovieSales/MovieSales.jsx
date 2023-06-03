import React, { useEffect } from 'react';
import MovieTimes from "./MovieTimes";

import {
  StyledInfo,
  StyledInfoSection,
  StyledInfoHeader,
  StyledInfoMain,
  StyledInfoImage,
} from "../../components/styles/Info.styled";

import logo from "../../assets/main_logo.png";

const MovieSales = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://public.flourish.studio/resources/embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <StyledInfo>
      <StyledInfoSection>
        <StyledInfoMain>
        <p>
        <h1 style={{textAlign: "center"}}>
            High rating, or high box office, that is the question. 
          </h1>
        </p>  
        <p style={{lineHeight: "2"}}>
          The movie industry is a multi-billion dollar industry, with the average movie costing $100 million to make, and the average movie making $250 million in box office sales. However, filmmaking is a fickle industry — if you make enough movies, one of them is bound to go wrong. 
          No filmmaker has ascended to the apex of Hollywood — and stayed there — without surviving the occasional flop.
          There are numerous additional reasons why a movie might lose money at the box office. Numerous excellent films have failed to find an audience due to poor timing, unsuccessful marketing initiatives, or simply being too "out there" for the general public.
          Fortunately, many flops go on to be reevaluated as classic films in their own right. From the bubble chart below, you can discover the relationship between the rating and the box office of the IMDB top 250 movies, and to see which movie is the one both "money and glory", or to see which movie had "touchdown" at that time.
        </p>  
        </StyledInfoMain>
      </StyledInfoSection>
      <div
        className="flourish-embed flourish-scatter"
        data-src="visualisation/13980087"
      />
      <StyledInfoSection>
        <StyledInfoMain>
        <p>
        <h1 style={{textAlign: "center"}}>
          TODO
          </h1>
        </p>  
        <p style={{lineHeight: "2"}}>
          TODO
        </p>  
        </StyledInfoMain>
      </StyledInfoSection>
      <MovieTimes />
    </StyledInfo>
  );
};

export default MovieSales;