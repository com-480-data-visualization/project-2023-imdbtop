import React from "react";

import {
  StyledInfo,
  StyledInfoSection,
  StyledInfoHeader,
  StyledInfoMain,
  StyledInfoImage,
} from "../../components/styles/Info.styled";

import logo from "../../assets/main_logo.png";

const Info = () => {
  return (
    <StyledInfo>
      <StyledInfoSection>
        <StyledInfoHeader>
          <h2>Function</h2>
        </StyledInfoHeader>
        <StyledInfoMain>
          <p>
          Interactive Graph: Relationship graph of movies and interactive filtering for movie recommendation.
          </p>
          <p>
          Interactive Map: Word Map to  Link geography and movies information.
          </p>
          <p>
          Further Exploration: Some analysis tools like bubble chart is useful for analysis on rating  or  box office.
          </p>
        </StyledInfoMain>
      </StyledInfoSection>
    </StyledInfo>
  );
};

export default Info;
