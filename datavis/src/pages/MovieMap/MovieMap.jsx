import React from "react";

import {
  StyledInfo,
  StyledInfoSection,
  StyledInfoHeader,
  StyledInfoMain,
  StyledInfoImage,
} from "../../components/styles/Info.styled";
import { StyledPage } from "../../components/styles/Page.styled";
import WorldMap from "../../components/WorldMap";
import logo from "../../assets/main_logo.png";

const MovieMap = () => {
  return (
    <StyledPage>
      <WorldMap
        world_type={null}
        selected_countries={[]}
        height={window.innerHeight}
        width={window.innerWidth}
        css_style={null}
        orginal_country_color={"#cccccc"}
        clicked_country_color={"#FFFF99"}
        selected_country_color={"#ff726f"}
        location={null}
        verbose={true}
      />
    </StyledPage>
  );
};

export default MovieMap;
