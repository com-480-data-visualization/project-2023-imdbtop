import React from "react";

import {
  StyledInfo,
  StyledInfoSection,
  StyledInfoHeader,
  StyledInfoMain,
  StyledInfoImage,
} from "../../components/styles/Info.styled";

import logo from "../../assets/main_logo.png";

const MovieMap = () => {
  return (
    <StyledInfo>
      <StyledInfoSection>
        <StyledInfoHeader>
          <h2>Director Map</h2>
        </StyledInfoHeader>
        <StyledInfoMain>
          <p>
            Description
          </p>
        </StyledInfoMain>
      </StyledInfoSection>

      <StyledInfoSection>
        <StyledInfoHeader>
          <h2>Actor Map</h2>
        </StyledInfoHeader>
        <StyledInfoMain>
          <p>
            Description
          </p>
        </StyledInfoMain>
      </StyledInfoSection>

      <StyledInfoSection>
        <StyledInfoHeader>
          <h2>Movie Map</h2>
        </StyledInfoHeader>
        <StyledInfoMain>
          <p>
            Description
          </p>
        </StyledInfoMain>
      </StyledInfoSection>

      
    </StyledInfo>
  );
};

export default MovieMap;
