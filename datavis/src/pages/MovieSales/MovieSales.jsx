import React, { useEffect } from 'react';

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
        <StyledInfoHeader>
          <h2>Movie Sales Bubble Chart</h2>
        </StyledInfoHeader>
        <StyledInfoMain>
          <p>
            High rating, or high box office, that is the question. This bubble chart shows the relationship between the two.
          </p>
          <div
            className="flourish-embed flourish-scatter"
            data-src="visualisation/13980087"
          />
        </StyledInfoMain>
      </StyledInfoSection>
    </StyledInfo>
  );
};

export default MovieSales;