import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Home from "../assets/HOME.png";
const Results = () => {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const { data } = await axios.get(
      "https://www.omdbapi.com/?i=tt3896198&apikey=c5a8f649&s"
    );
    setMovies(data);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="search-wrapper">
          <h1 className="search-text">
            Results For: <span className="white"></span>
          </h1>
          {movies?.Search.map((movie) => {
            <div className="movie-about" key={movie.id}>
              <figure className="movie-img-wrapper hover-border">
                <img src="" className="movie-img" alt="Image Not Found" />
                <div className="movie-blackground"></div>
                <h1 className="movie-info white">MORE INFO</h1>
              </figure>
              <h1 className="movie-title white">{movie.title}</h1>
              <h3 className="movie-release-date white">{movie.year}</h3>
            </div>;
          })}

          <figure className="img-wrapper">
            <img src={Home} className="img-img" alt="" />
            <h2 className="img-text white">You Havent Searched Anything!</h2>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Results;
