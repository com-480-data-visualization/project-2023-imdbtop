import React, { useState } from 'react';
import { ScrollableBox } from '../components/styles/SearchBoxStyles.styled';
import {
  StyledAside,
  StyledAsideLogo,
} from "../components/styles/Aside.styled"

import {
  StyledButton,
} from "../components/styles/StyledButton.styled"

const SearchBox = ({ movies, onSelectSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    // Filter movies based on the search text
    const filteredMovies = movies.filter((movie) =>
      movie.id.toLowerCase().includes(value.toLowerCase())
    );
    onSelectSearch(searchResults);
    setSearchResults(filteredMovies);

    console.log("debbbuugg", searchResults);
  };

  const handleSelectTitle = (title) => {
    setSelectedTitle(title);
  };
  /*
  const handleConfirm = () => {
    if (searchResults) {
      console.log("debbbuugg", searchResults);
      // onTitleSelect(selectedTitle);
    }
  };
  */

  return (
    <StyledAside>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={handleChange}
          placeholder="Search movie titles"
        />
        <button onClick={handleSearch}>Confirm</button>
      </div>
      {searchResults.length > 0 && (
        <div>
          <h1>Current Search Results:</h1>
          <ScrollableBox>
            {searchResults.map((result) => (
              <h4 key={result.id}>{result.id}</h4>
            ))}
          </ScrollableBox>
        </div>
      )}
    </StyledAside>
  );
};

export default SearchBox;
