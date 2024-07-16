import React, { useState } from "react";
import styled from "styled-components";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };

  return (
    <SearchBody>
      <SearchInput
        placeholder="검색어를 입력하세요"
        value={searchValue}
        onChange={handleChange}
      ></SearchInput>
    </SearchBody>
  );
};

export default Search;

const SearchBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

const SearchInput = styled.input`
  width: 250px;
  height: 25px;
  border: 1px solid lightgrey;
`;
