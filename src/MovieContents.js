import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Detail from "./Detail";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const MovieContents = () => {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(0);
  const [pageArray, setPageArray] = useState([0, 1, 2, 3, 4]);
  const [number, setNumber] = useState(1);
  const [isClick, setIsClick] = useState(false);

  function handlePageChange(event) {
    setPage(event.target.value);
    // console.log(event.target.value)
  }

  function handleRightArrow() {
    //오른쪽 화살표 넘어가기
    setNumber(number + 1);
    const num = Number(Math.floor(number) * 5);
    console.log(number);
    setPageArray([num, num + 1, num + 2, num + 3, num + 4]);
  }

  function handleLeftArrow() {
    //왼쪽 화살표 넘어가기
    if (number > 0) {
      setNumber(number - 1);
    }
    console.log(number);

    const num = Number(Math.floor(number) * 5);
    setPageArray([num, num + 1, num + 2, num + 3, num + 4]);
  }

  async function getMovieData() {
    const response = await axios.get(
      "https://port-0-minihackathon-12-lyec0qpi97716ac6.sel5.cloudtype.app/movie/list"
    );
    console.log(response.data.slice(page * 20, page * 20 + 20));
    console.log(page);
    setMovieData(response.data);
  }

  useEffect(() => {
    getMovieData();
  }, [page]);

  function MovieDetail() {
    const params = useParams();
    const movieID = params.id;
  }

  return (
    <>
      <MovieContent>
        {/* <Pagination
           activePage={5}
           itemsCountPerPage={499}> */}
        <MoviesBody>
          {movieData
            .slice(Number(page * 20), Number(page * 20 + 20))
            .map((data) => {
              return (
                <MovieBody>
                  <Link key={data.id} to={`/movie/${data.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MovieImg src={data.poster_url}></MovieImg>
                    <MovieTitle>{data.title_kor}</MovieTitle>
                  </Link>
                </MovieBody>
              );
            })}
        </MoviesBody>
        {/* </Pagination> */}
      </MovieContent>
      <PageBody>
        {number > 1 ? (
          <ArrowButton onClick={handleLeftArrow}>{"<"}</ArrowButton>
        ) : (
          <></>
        )}
        {number <= 5 ? (
          pageArray.map((page) => {
            return (
              <PageButton value={page} onClick={handlePageChange}>
                {page + 1}
              </PageButton>
            );
          })
        ) : (
          <></>
        )}
        {number < 5 ? (
          <ArrowButton onClick={handleRightArrow}>{">"}</ArrowButton>
        ) : (
          <></>
        )}
      </PageBody>
    </>
  );
};

export default MovieContents;

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
