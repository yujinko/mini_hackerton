import React, { useState } from "react";
import Search from "./Search";
import MovieContents from "./MovieContents";
import Nav from "./Nav";
import Footer from "./Footer";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div style={{ height: "800px" }}>
      <Nav />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieContents searchValue={searchValue} />
      <Footer />
    </div>
  );
};
export default Main;
