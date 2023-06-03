/*
Movie Statistics  Page
*/

import React, { useEffect } from 'react';
import {
  StyledInfo,
  StyledInfoSection,
  StyledInfoHeader,
  StyledInfoMain,
  StyledInfoImage,
} from "../../components/styles/Info.styled";
import { StyledPage } from "../../components/styles/Page.styled";

const MovieTimes = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://public.flourish.studio/resources/embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
      <div
            className="flourish-embed flourish-hierarchy"
            data-src="visualisation/14006347"
      />
  );
};

export default MovieTimes;
