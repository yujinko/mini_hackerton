import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Detail.css";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import StarRating from "./StarRatings";

function Detail() {
  const [movieData, setMovieData] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(true);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const { movieId } = useParams();
  const navigate = useNavigate();
  console.log(movieId);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(
          `https://minihackton.store/movie/${movieId}/`
        );
        setMovieData(response.data);
        setComments(response.data.comments);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchMovieData();
  }, [movieId]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    try {
      const token = localStorage.getItem("access");
      await axios.post(
        `https://minihackton.store/movie/${movieId}/comment/`,
        {
          comment: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComment("");
      const response = await axios.get(
        `https://minihackton.store/movie/${movieId}/`
      );
      console.log(response);
      setComments(response.data.comments);
      alert("댓글 달기 성공!");
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("로그인 필요");
      navigate("/login");
    }
  };
  const handleRatingSubmit = async (rating) => {
    try {
      const token = localStorage.getItem("access");
      await axios.post(
        `https://minihackton.store/movie/${movieId}/rating/`,
        {
          rating: rating,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRating(rating);
      const response = await axios.get(
        `https://minihackton.store/movie/${movieId}/`
      );
      setMovieData(response.data);
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };
  return (
    <>
      <Nav></Nav>
      <div className="movie-info">
        <h1>영화 정보</h1>
        {movieData && (
          <div className="All-content">
            <div className="movie-title">
              <h3>{movieData.title_kor}</h3>
              <p>{movieData.title_eng}</p>
            </div>
            <div className="movie-content">
              <img
                src={movieData.poster_url}
                alt={movieData.title_kor}
                onClick={() => handleMovieClick(movieData)}
                style={{ cursor: "pointer" }}
              />
              <div className="movie-text">
                {selectedMovie && (
                  <div className="movie-details">
                    <p>[평점] {movieData.rating}</p>
                    <p>[감독] {movieData.director_name}</p>
                    <p>[장르] {movieData.genre}</p>
                    <p>[상영시간] {movieData.showtime}분</p>
                    <p>[개봉일] {movieData.release_date}</p>
                    <p>[줄거리]</p>
                    <p>{movieData.plot}</p>
                  </div>
                )}
              </div>
            </div>
            <h4>[인물정보]</h4>
            <div className="actor-list">
              {movieData.actors.map((actor, index) => (
                <div key={index} className="actor-item">
                  <img
                    src={actor.image_url}
                    alt={actor.name}
                    style={{ maxWidth: "100px" }}
                  />
                  <p>{actor.name}</p>
                  <p>{actor.character}</p>
                </div>
              ))}
            </div>
            <div className="Rating-box">
              <h4>별점을 남겨보세요!</h4>
              <StarRating onRatingSubmit={handleRatingSubmit} />
            </div>
            <h4>댓글을 남겨보세요 !</h4>
            <div id="comment-box">
              <div className="text-box">
                <textarea
                  id="comment-input"
                  placeholder="댓글을 입력하세요."
                  value={comment}
                  onChange={handleCommentChange}
                ></textarea>
                <button id="comment-submit" onClick={handleCommentSubmit}>
                  댓글 작성
                </button>
              </div>
              <div id="comment-list">
                {comments.map((comment, index) => (
                  <div key={index} className="comment-item">
                    <p>
                      <div className="nickname">{comment.nickname} :</div>
                      <div className="content">{comment.comment}</div>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Detail;
