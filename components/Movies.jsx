import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Movieimg1 from "../assets/Movie-1.jpg";
import Movieimg2 from "../assets/Movie-2.jpg";
import Movieimg3 from "../assets/Movie-3.jpg";
import Movieimg4 from "../assets/Movie-4.jpg";
import Movieimg5 from "../assets/Movie-5.jpg";
import Movieimg6 from "../assets/Movie-6.jpg";
import Movieimg7 from "../assets/Movie-7.jpg";
import Movieimg8 from "../assets/Movie-8.jpg";
import Movieimg9 from "../assets/Movie-9.jpg";
import Movieimg11 from "../assets/movie-11.jpg";
const Movies = () => {
  return (
    <section className="movie-section" id="#movies">
      <div className="container">
        <div className="row">
          <h1 className="search-text white">Heres Our Favorite Movies:</h1>
          <div className="button-pos">
            <div className="movie">
              <button className="btn btn-right btn-black">
              < FontAwesomeIcon icon={"arrow-right"}/>
              </button>
              <button className="btn btn-left btn-black">
              < FontAwesomeIcon icon={"arrow-left"}/>
              </button>
              <div className="movie-about">
                <figure className="movie-img-wrapper hover-border">
                  <img src={Movieimg1} className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">
                  Dr Strange And <br />
                  The Multiverse Of <br />
                  Madness
                </h1>
                <h3 className="movie-release-date white">2023</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper hover-border">
                  <img src={Movieimg2} className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">
                  Spiderman Acorss The <br />
                  Spiderverse
                </h1>
                <h3 className="movie-release-date white">2023</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper hover-border">
                  <img src={Movieimg3} className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">Saving Private Ryan</h1>
                <h3 className="movie-release-date white">1998</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper hover-border">
                  <img src={Movieimg4} className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">Interstellar</h1>
                <h3 className="movie-release-date white">2014</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper hover-border">
                  <img src={Movieimg5} className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">Avengers Infinity war</h1>
                <h3 className="movie-release-date white">2018</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper hover-border">
                  <img src={Movieimg6} className="movie-img" alt="" />
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
                <figure className="movie-img-wrapper hover-border">
                  <img src={Movieimg7} className="movie-img" alt="" />
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
                <figure className="movie-img-wrapper hover-border">
                  <img src={Movieimg8} className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">Ready Player One</h1>
                <h3 className="movie-release-date white">2018</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper hover-border">
                  <img src={Movieimg9} className="movie-img" alt="" />
                  <div className="movie-blackground"></div>
                  <h1 className="movie-info white">MORE INFO</h1>
                </figure>
                <h1 className="movie-title white">Gravity</h1>
                <h3 className="movie-release-date white">2013</h3>
              </div>
              <div className="movie-about">
                <figure className="movie-img-wrapper hover-border">
                  <img src={Movieimg11} className="movie-img" alt="" />
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

export default Movies;
