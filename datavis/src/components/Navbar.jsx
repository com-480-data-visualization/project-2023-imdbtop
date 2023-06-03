/*
Page: Navbar
This page allows users to use links to navigate pages, search movies and dark mode triggers

*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faMountainSun } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  StyledNavbar,
  StyledNavbarLink,
  StyledNavbarFeature,
  StyledDarkMode,
} from "./styles/Navbar.styled";
import { StyledWrapper } from "./styles/Wrapper.styled";
import logo from "../assets/main_logo.png";

import Input from "./Input";

const links = [
  {
    path: "/vis/MovieMap",
    label: "Map",
    exect: "true",
  },
  {
    path: "/vis/MovieSales",
    label: "Sales",
    exect: "false",
  },
  {
    path: "/vis/MovieGraph",
    label: "Graph",
    exect: "false",
  },
  {
    path: "/info",
    label: "Info",
    exect: "false",
  },
];

const Navbar = ({ colorMode, setColorMode }) => {
  // darkmode trigger
  // bool: true = light mode, false = dark mode
  const modeClickHandler = () => {
    setColorMode(!colorMode);
  };
  return (
    <header>
      <StyledNavbar>
        <StyledWrapper>
          <Link to={`/`}>
          </Link>
          <StyledNavbarLink>
            {links.map(({ path, label, exact }) => {
              return (
                <li key={label}>
                  <NavLink
                    exact={exact}
                    to={path}
                    className={({ isActive }) => (isActive ? "isActived" : "")}
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </StyledNavbarLink>
          <StyledNavbarFeature>
            <StyledDarkMode
              onClick={modeClickHandler}
              className={colorMode ? "lightMode" : "darkMode"}
            >
              <span></span>
              <p>
                <FontAwesomeIcon icon={faMountainSun} />
              </p>
              <p>
                <FontAwesomeIcon icon={faMoon} />
              </p>
            </StyledDarkMode>
          </StyledNavbarFeature>
        </StyledWrapper>
      </StyledNavbar>
    </header>
  );
};

export default Navbar;
