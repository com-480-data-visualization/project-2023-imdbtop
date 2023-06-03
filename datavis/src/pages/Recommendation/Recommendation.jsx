/*
Page: Recommendation Page
This page is where users see the results of the movies they searched for.

*/

import React, { useEffect } from 'react';
import Aside from "./Aside";
import Main from "./Main";
import {
  StyledInfo,
  StyledInfoSection,
  StyledInfoHeader,
  StyledInfoMain,
  StyledInfoImage,
} from "../../components/styles/Info.styled";
import { StyledPage } from "../../components/styles/Page.styled";



const Recommendation = () => {
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
    <StyledPage>
      <Aside />
      <div
            className="flourish-embed flourish-hierarchy"
            data-src="visualisation/14006347"
          />
    </StyledPage>
  );
};

export default Recommendation;
