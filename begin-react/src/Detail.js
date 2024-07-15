import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Detail.css';

function Detail() {
  const [movieData, setMovieData] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get('https://port-0-minihackathon-12-lyec0qpi97716ac6.sel5.cloudtype.app/movie/1');
        setMovieData(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    fetchMovieData();
  }, []);

   const handleMovieClick = (movie) => {
     setSelectedMovie(movie);
   };

  return (
    <div className="movie-info">
      <h1>영화 정보</h1>
      {movieData && (
        <div className="All-content">
            <h3>{movieData.title_kor}</h3>
            <p>{movieData.title_eng}</p>
            <div className='movie-content'>
                <img
                    src={movieData.poster_url}
                    alt={movieData.title_kor}
                    onClick={() => handleMovieClick(movieData)}
                    style={{ cursor: 'pointer' }}
                />
                <div className='movie-text'>
                    {selectedMovie && (
                        <div className="movie-details">
                        <p>[평점] {movieData.rating}</p>
                        <p>[감독] {movieData.director_name}</p>
                        <p>[장르] {movieData.genre}</p>
                        <p>[상영시간] {movieData.showtime}분</p>
                        <p>[개봉일] {movieData.release_date}</p>
                        <p>[줄거리]</p>
                        <p>{movieData.plot}</p>
                        </div>)
                    }
                </div>
            </div>
              <h4>[인물정보]</h4>
              <div className="actor-list">
                {movieData.actors.map((actor, index) => (
                  <div key={index} className="actor-item">
                    <img src={actor.image_url} alt={actor.name} style={{ maxWidth: '100px' }} />
                    <p>{actor.name}</p>
                    <p>{actor.character}</p>
                  </div>
                ))} 
              </div>
              <h4>댓글:</h4>
              <div id="comment-box">
                <textarea id="comment-input" placeholder="댓글을 입력하세요."></textarea>
                <button id="comment-submit">댓글 작성</button>
                <div id="comment-list"></div>
              </div>
              <ul>
                {movieData.comments.map((comment, index) => (
                  <li key={index}>
                    <p>{comment.user.id},{comment.user.nickname} : {comment.comment}</p>
                    <p>작성일: {comment.created_at}</p>
                  </li>
                ))}
              </ul>
             </div>)}

    </div>
        
    
  )};



export default Detail;