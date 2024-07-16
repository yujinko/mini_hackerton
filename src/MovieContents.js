import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router";

const MovieContents = ({ searchValue }) => {
  const [movieData, setMovieData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const [pageArray, setPageArray] = useState([0, 1, 2, 3, 4]);
  const [number, setNumber] = useState(1);

  function handlePageChange(event) {
    setPage(event.target.value);
  }

  function handleRightArrow() {
    setNumber(number + 1);
    const num = Number(Math.floor(number) * 5);
    setPageArray([num, num + 1, num + 2, num + 3, num + 4]);
  }

  function handleLeftArrow() {
    if (number > 0) {
      setNumber(number - 1);
    }
    const num = Number(Math.floor(number) * 5);
    setPageArray([num, num + 1, num + 2, num + 3, num + 4]);
  }

  async function getMovieData() {
    const response = await axios.get(
      "https://port-0-minihackathon-12-lyec0qpi97716ac6.sel5.cloudtype.app/movie/list"
    );
    setMovieData(response.data);
    setFilteredData(response.data);
  }

  useEffect(() => {
    getMovieData();
  }, []);

  useEffect(() => {
    if (searchValue) {
      const filtered = movieData.filter((movie) =>
        movie.title_kor.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(movieData);
    }
  }, [searchValue, movieData]);

  return (
    <Container>
      <MovieContent>
        <MoviesBody>
          {filteredData
            .slice(Number(page * 20), Number(page * 20 + 20))
            .map((data) => {
              return (
                <MovieBody key={data.id}>
                  <a
                    href="/detail"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MovieImg src={data.poster_url}></MovieImg>
                    <MovieTitle>{data.title_kor}</MovieTitle>
                  </a>
                </MovieBody>
              );
            })}
        </MoviesBody>
      </MovieContent>
      <PageBody>
        {number > 1 ? (
          <ArrowButton onClick={handleLeftArrow}>{"<"}</ArrowButton>
        ) : null}
        {number <= 5
          ? pageArray.map((page) => {
              return (
                <PageButton key={page} value={page} onClick={handlePageChange}>
                  {page + 1}
                </PageButton>
              );
            })
          : null}
        {number < 5 ? (
          <ArrowButton onClick={handleRightArrow}>{">"}</ArrowButton>
        ) : null}
      </PageBody>
    </Container>
  );
};

export default MovieContents;

const Container = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 100px;
`

const MoviesBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 900px;
`;

const MovieBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const MovieImg = styled.img`
  width: 120px;
  height: 200px;
`;

const MovieTitle = styled.p`
  font-weight: 700;
  display: block;
  width: 100px;
`;

const MovieContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  gap: 10px;
`;

const PageButton = styled.button`
  border: none;
  padding: 10px;
`;

const ArrowButton = styled.button`
  border: none;
  background: none;
  font-weight: 700;
  color: grey;
`;
