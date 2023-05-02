/*
Page: Recommendation Page
This page is where users see the results of the movies they searched for.

*/

import React from "react";
import Aside from "./Aside";
import Main from "./Main";
import { StyledPage } from "../../components/styles/Page.styled";

const Recommendation = () => {
  return (
    <StyledPage>
      <Aside />
      <Main />
    </StyledPage>
  );
};

export default Recommendation;
