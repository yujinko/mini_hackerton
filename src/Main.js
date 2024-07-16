import React, { useEffect, useState } from "react";
import Search from "./Search";
import axios from "axios";
import styled from "styled-components";
import MovieContents from "./MovieContents";
import Nav from "./Nav";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Nav/>
      <Search></Search>
      <MovieContents></MovieContents>
      <Footer />
    </div>
  );
};

export default Main;
