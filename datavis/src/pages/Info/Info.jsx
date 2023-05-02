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
            TODO
          </p>
          <p>
            TODO
          </p>
        </StyledInfoMain>
      </StyledInfoSection>

      <StyledInfoSection>
        <StyledInfoHeader>
          <h2>Features</h2>
        </StyledInfoHeader>
        <StyledInfoMain>
          <p>
            TODO
          </p>
          <p>
            TODO
          </p>
          <p>
            TODO
          </p>
        </StyledInfoMain>
      </StyledInfoSection>

      <StyledInfoSection>
        <StyledInfoHeader>
          <h2>Interface</h2>
        </StyledInfoHeader>
        <StyledInfoMain>
          <p>
            TODO
          </p>
        </StyledInfoMain>
      </StyledInfoSection>
    </StyledInfo>
  );
};

export default Info;
