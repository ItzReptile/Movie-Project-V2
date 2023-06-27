import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tvshowimg1 from "../assets/tvshow-1.jpg";
import tvshowimg2 from "../assets/tvshow-2.jpg";
import tvshowimg3 from "../assets/tvshow-3.jpg";
import tvshowimg4 from "../assets/tvshow-4.jpg";
import tvshowimg5 from "../assets/tvshow-5.jpg";
import tvshowimg6 from "../assets/tvshow-6.jpg";
import tvshowimg7 from "../assets/tvshow-7.jpg";
import tvshowimg8 from "../assets/tvshow-8.jpg";
import tvshowimg9 from "../assets/tvshow-9.jpg";
import tvshowimg10 from "../assets/tvshow-10.jpg";
const TvShows = () => {
  return (
    <section className="tvshow-section" id="#tv-show">
      <div className="container">
        <div className="row">
          <div className="button-pos">
            <h1 className="search-text white">Heres Our Favorite TV-Shows:</h1>
            <div className="movie">
              <button className="btn btn-right btn-black">
              < FontAwesomeIcon icon={"arrow-right"}/>
              </button>
              <button className="btn btn-left btn-black">
              < FontAwesomeIcon icon={"arrow-left"}/>
              </button>
              <div className="movie-about">
                <figure className="movie-img-wrapper">
                  <img src={tvshowimg1} className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">Blade Runner:Black Lotus</h1>
                <h3 className="movie-release-date white">2021-2022</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper">
                  <img src={tvshowimg2} className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">The Witcher</h1>
                <h3 className="movie-release-date white">2021-Present</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper">
                  <img src={tvshowimg3}className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">Breaking Bad</h1>
                <h3 className="movie-release-date white">2008-2013</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper">
                  <img src={tvshowimg4} className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">
                    The Lord Of The Rings <br />
                    The Ring Of Power
                  </h1>
                </figure>
                <h1 className="movie-title white">Interstellar</h1>
                <h3 className="movie-release-date white">2014</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper">
                  <img src={tvshowimg5} className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">Avengers Infinity war</h1>
                <h3 className="movie-release-date white">2018</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper">
                  <img src={tvshowimg6}className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">
                  Guardians Of The Galaxy <br />
                  Volume 3
                </h1>
                <h3 className="movie-release-date white">2023</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper">
                  <img src={tvshowimg7} className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">
                  Spiderman:No Way Home
                  <br />
                </h1>
                <h3 className="movie-release-date white">2022</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper">
                  <img src={tvshowimg8}className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">Ready Player One</h1>
                <h3 className="movie-release-date white">2018</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper">
                  <img src={tvshowimg9} className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">Gravity</h1>
                <h3 className="movie-release-date white">2013</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper">
                  <img src={tvshowimg10} className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">Godzilla Vs Kong</h1>
                <h3 className="movie-release-date white">2021</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TvShows;
