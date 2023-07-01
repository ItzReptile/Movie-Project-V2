import Home from "../assets/HOME.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  let { id } = useParams("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchId, setSearchId] = useState(id);

  function onSearch() {
    fetchMovies(searchId);
  }

  async function fetchMovies(filter, movieId) {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=c5a8f649&s=${movieId}`
    );
    setMovies(data);
    setLoading(false);
    console.log(data);
  }

  function onSearchKey(key) {
    if (key === "Enter") {
      onSearch();
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className="landing-section">
      <div className="container">
        <div className="row">
          <div className="header-wrapper white">
            <h1 className="header-text">Welcome to Infinite Movies</h1>
            <h3 className="header-subtext">Go Ahead And Begin Viewing</h3>
            <div className="search-button-wrapper">
              <input
                type="
              search"
                placeholder="Search"
                className="search-input"
                value={searchId}
                onChange={(e) => onSearch(e.target.value)}
                onKeyPress={(event) => onSearchKey(event.key)}
              />

              <button onChange={() => onSearch()} className="search-button">
                Search Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
