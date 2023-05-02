/*
Page: Aside for Search Page
This page is where users can see and pick a searched history.

*/

import React, { useState, useEffect } from "react";


import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  StyledAside,
  StyledAsideLogo,
  StyledAsideHistory,
  StyledAsideHistoryText,
} from "../../components/styles/Aside.styled";
import Input from "../../components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import category from "../../assets/wordcloud-category.png";
import director from "../../assets/wordcloud-director.png";
import star from "../../assets/wordcloud-star.png";



const Aside = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [historyArray, setHistoryArray] = useState([]);

  useEffect(() => {
    if (id !== undefined) {
      setHistoryArray((oldArray) => {
        // Removes the history if the id already exist in the array
        oldArray.map((item, idx) => {
          if (oldArray[idx] === id) {
            // splice
            historyRemoveByIndex(idx + 1);
          }
        });

        // Store the searched movie title along with the existing array.
        if (oldArray.length >= 5) {
          // pop
          historyRemoveByIndex(oldArray.length);
        }

        // push
        return [id, ...oldArray];
      });
    }
  }, [id]);

  // Removes the selected index history from the array.
  const historyRemoveByIndex = (index) => {
    setHistoryArray((oldArray) => {
      return oldArray.filter((item, idx) => idx !== index);
    });
  };

  return (
    <StyledAside>
      <h1 className="filterpage">Search</h1>
      <Input filterpage={true} />
      <span></span>
      <StyledAsideHistory>
        {historyArray.map((item, idx) => {
          return (
            <StyledAsideHistoryText key={idx + item}>
              {/* If clicking on the history, send the movie title value in params. */}
              <p onClick={() => navigate(item)}>{item}</p>
              <div onClick={() => historyRemoveByIndex(idx)}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </div>
            </StyledAsideHistoryText>
          );
        })}
      </StyledAsideHistory>

      <h1 className="filterpage">Movie Stars Filter</h1>
      <img
              src={star}
              className="Movie-Star"
              alt="Movie-Star"
            />
      <span></span>
      <h1 className="filterpage">Movie Directors Filter</h1>
      <img
              src={director}
              className="Movie-Director"
              alt="Movie-Director"
            />
      <span></span>
      <h1 className="filterpage">Movie Category Filter</h1>
      <img
              src={category}
              className="Movie-Category"
              alt="Movie-Category"
            />

    </StyledAside>
  );
};

export default Aside;
