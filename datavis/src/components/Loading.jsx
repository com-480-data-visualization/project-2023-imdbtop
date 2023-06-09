/*
Component: Loading
Show a loading animation while waiting for a fetch.

*/

import React from "react";
import logo from "../assets/main_logo.png";

import {
  StyledLoading,
  StyledLoadingContent,
  StyledLoadingCircle,
} from "./styles/Loading.styled";

const Loading = () => {
  return (
    <StyledLoading>
      <StyledLoadingContent>
        <StyledLoadingCircle />
        <StyledLoadingCircle />
        <StyledLoadingCircle />
      </StyledLoadingContent>
    </StyledLoading>
  );
};

export default Loading;
