/*
Component: Input
This component configures the styling and functionality of the input to search for movies.

*/

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledInput,
  StyledInputCover,
  StyledInputList,
} from "./styles/Input.styled";
import APIUtils from "../api/APIUtils";
import * as d3 from 'd3';
import useDebounce from "../hooks/useDebounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Input = ({ filterpage }) => {
  const navigate = useNavigate();
  const [hasFocus, setFocus] = useState(false);
  const [ datas, setDatas ] = useState([]);
  //const { datas, isLoading, requestMovie } = APIUtils();
  const [textValue, setTextValue] = useState("");
  const searchTerm = useDebounce(textValue, 500);
  // const [movies, setMovies] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await d3.json('/data/movies_relation.json'); // Replace with the actual path to your JSON file
        setDatas(response.map(d => d.id).filter(str => str.includes(searchTerm)));
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);
  

  console.log("datas", datas)

  // Fetch item.
  /*
  useEffect(() => {
    searchTerm !== "" &&
      requestMovie(
        `query=${encodeURIComponent(searchTerm)}&`,
        "/search/movie?"
      );
  }, [searchTerm]);
  */

  const listClickHandler = (title) => {
    setTextValue(title);
    submitTitle(title);
  };

  const searchClickHandler = () => {
    if (textValue !== "") {
      submitTitle(textValue);
    }
  };

  const valueChangeHandler = (e) => {
    setTextValue(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  const onKeyHandler = (e) => {
    if (textValue.trim().length !== 0) {
      if (e.keyCode === 13) {
        // When fetched, removes the focusing of the input.
        e.target.blur();

        submitTitle(textValue);
      }
    }
  };

  // The searched title is sent as id.
  // The page that received the id performs a new fetch through the id.
  const submitTitle = (id) => {
    navigate(`/recommendation/${encodeURIComponent(id)}`);
  };

  return (
    <StyledInput className={filterpage ? "filterpage" : ""}>
      <StyledInputCover>
        <input
          type="text"
          onFocus={() => setFocus(true)}
          onBlur={() => {
            setTimeout(() => {
              setFocus(false);
            }, 200);
          }}
          onChange={valueChangeHandler}
          onKeyDown={onKeyHandler}
          value={textValue}
          autoComplete="off"
        />
        <div
          className={hasFocus ? "has-focus" : ""}
          onClick={searchClickHandler}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </StyledInputCover>
      <StyledInputList className={hasFocus ? "has-focus" : ""}>
        {hasFocus &&
          searchTerm !== "" &&
          datas !== undefined &&
          datas.map((item, idx) => {
            return (
              <p
                key={idx + item.id}
                onClick={() => listClickHandler(item.id)}
              >
                {item.id}
              </p>
            );
          })}
      </StyledInputList>
    </StyledInput>
  );
};

export default Input;
