/*
Project Name: Cinema Movie
Info: Search for a movie and fetch movie posters and information
Version: This is a rebuild of a project created in 2021
Developer: Sunil Park
*/

import React, { useState } from "react";
import "./font.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "./components/Theme";
import { GlobalStyles } from "./components/styles/Global";

import Info from "./pages/Info/Info";
import MovieMap from "./pages/MovieMap/MovieMap";
import MovieSales from "./pages/MovieSales/MovieSales";
import MovieGraph from "./pages/MovieGraph/MovieGraph";

import ErrorPage from "./pages/Error/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { StyledWrapper } from "./components/styles/Wrapper.styled";

function App() {
  const [colorMode, setColorMode] = useState(true);

  return (
    <ThemeProvider theme={colorMode ? lightMode : darkMode}>
      <GlobalStyles />
      <Router>
        <Navbar
          colorMode={colorMode}
          setColorMode={(obj) => setColorMode(obj)}
        />
        <StyledWrapper>
          <Routes>
            <Route exact path="/" element={<MovieGraph/>} />
            <Route exact path="/project-2023-imdbtop" element={<MovieGraph/>} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/info" element={<Info />} />
            <Route path="vis/MovieMap" element={<MovieMap/>} />
            <Route path="vis/MovieSales" element={<MovieSales/>} />
            <Route path="vis/MovieGraph" element={<MovieGraph/>} />
          </Routes>
        </StyledWrapper>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
