import React, { useEffect, useState } from "react";
import * as countryCoder from '@rapideditor/country-coder';           // ESM import all
import { iso1N3Code } from '@rapideditor/country-coder';              // ESM import named
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
import { StyledButton } from '../../components/styles/StyledButton.styled.js';

const countriesList = (path) => {
  const list=[]
  fetch(path, {
    method: 'GET',
    headers: {
    "Accept": "application/json",
    'Content-Type': 'application/json'
    }})
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((data) => {
        // Define ranges
        console.log(data);
        const Ranges = [
          { min: 1, max: 10 },
          { min: 11, max: 50 },
          { min: 51, max: 200 },
          { min: 201, max: 500}
        ];
        // Initialize an empty array to store the select countries
        const selectedCountriesList = [];
        // Iterate over each range
        for (const range of Ranges) {
          const countriesInRange = data.filter(
            (item) => item.cnt >= range.min && item.cnt <= range.max
          ).map((item) => {
            console.log(iso1N3Code(item.nationality), item.nationality);
            return iso1N3Code(item.nationality);
          });
          // Add the countries in the range to the selected countries list
          list.push(countriesInRange);
        }
        return list;
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
    return list;
};

const MovieMap = () => {

  const [activeTab, setActiveTab] = useState('A');
  const [countryList, setCountryList] = useState([]);
  const [visibleState, setVisibleState] = useState(false);

  useEffect(() => {
    // Update the country list based on the active tab
    if (activeTab === 'A') {
      setCountryList(countriesList("./data/star_nation.json"));
      setVisibleState(false);
    } else if (activeTab === 'B') {
      setCountryList(countriesList("./data/director_nation.json"));
      setVisibleState(false);
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <StyledPage>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <StyledButton onClick={() => handleTabClick('A')}>Actors Map</StyledButton>
        <StyledButton onClick={() => handleTabClick('B')}>Directors Map</StyledButton>
      </div>
      <WorldMap
        world_type={null}
        selected_countries={countryList}
        height={window.innerHeight}
        width={window.innerWidth}
        css_style={null}
        orginal_country_color={"#c8d6e7"}
        clicked_country_color={"#ecd0b4"}
        selected_country_color={["#9ebcdb","#7091c7","#4e70af","#375093"]}
        location={null}
        verbose={true}
        visibleStateFun = {setVisibleState}
        visibleState={visibleState}
      />
    </StyledPage>
  );
};

export default MovieMap;
