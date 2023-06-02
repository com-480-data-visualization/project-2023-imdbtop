/*
Page: Aside for the homepage
This page is where users can choose a genre.

*/

import React from "react";
import {
  StyledAside,
  StyledAsideLogo,
} from "../../components/styles/Aside.styled";
import logo from "../../assets/main_logo.png";
import { request } from "../../data/data";

const Aside = ({ genreID, setGenreID }) => {
  return (
    <StyledAside>

      <h1>Category</h1>
      <span />
      <ul>
        {request.map((item, idx) => {
          return (
            <li
              key={item.genre}
              onClick={() => {
                setGenreID(idx);
              }}
              value={idx}
              className={idx === genreID ? "genre-actived" : ""}
            >
              <p>{item.genre}</p>
              <span />
              <span />
            </li>
          );
        })}
      </ul>
    </StyledAside>
  );
};

export default Aside;
