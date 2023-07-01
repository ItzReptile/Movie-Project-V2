import React from "react";

import imageslider from "../assets/imageslider.jpg";
import HOME from "../assets/HOME.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShowContent() {
  document.getElementById("display-trailer-btn").style.display = "block";
}

function StopShowing() {
  document.getElementById("display-trailer-btn").style.display = "none";
}

const Landing = () => {
  return (
    <section className="landing-section" id="#landing-section">
      <figure className="blob-wrapper">
        <svg
          className="blob-2"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0F62FE"
            d="M50.5,1C50.5,28.4,25.2,56.8,-3.1,56.8C-31.4,56.8,-62.9,28.4,-62.9,1C-62.9,-26.5,-31.4,-52.9,-3.1,-52.9C25.2,-52.9,50.5,-26.5,50.5,1Z"
            transform="translate(100 100)"
          />
        </svg>
      </figure>

      <div className="container">
        <div className="row">
          <div className="img-slider-display">
            <figure className="img-slider-wrapper">
              <img src={imageslider} className="img-slider" alt="" />
              <div className="button-wrapper">
                <button
                  onClick={ShowContent}
                  className="btn-trailer absolute btn-white"
                >
                  <FontAwesomeIcon icon={"play"} />
                  View Trailer
                </button>
                <p className="img-slider-description absolute">
                  After reuniting with Gwen Stacy, Brooklyn's full-time,
                  <br />
                  friendly neighborhood Spider-Man is catapulted across the
                  Multiverse, <br />
                  where he encounters a team of Spider-People charged with
                  protecting <br />
                  its very existence. However, when the heroes clash on how to
                  handle <br />
                  a new threat, Miles finds himself pitted against the other
                  Spiders. <br />
                  He must soon redefine what it means to be a hero so he can
                  <br />
                  save the people he loves most.
                </p>
              </div>
            </figure>
            <div id="display-trailer-btn" className="btn-trailer-wrapper">
              <button
                onClick={StopShowing}
                className="button-close absolute btn-white"
              >
                Close Trailer
              </button>
              <figure className="trailer-wrapperv1">
                <iframe
                  width="775"
                  height="425"
                  src="https://www.youtube.com/embed/shW9i6k8cB0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="blob-4"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#0F62FE"
          d="M56.4,0.7C56.4,27.5,28.2,55.1,1.6,55.1C-25,55.1,-50.1,27.5,-50.1,0.7C-50.1,-26.2,-25,-52.3,1.6,-52.3C28.2,-52.3,56.4,-26.2,56.4,0.7Z"
          transform="translate(100 100)"
        />
      </svg>
      <figure className="blob-wrapper">
        <svg
          className="blob-3"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0F62FE"
            d="M58.8,1.3C58.8,31.2,29.4,62.4,-0.4,62.4C-30.2,62.4,-60.4,31.2,-60.4,1.3C-60.4,-28.5,-30.2,-57.1,-0.4,-57.1C29.4,-57.1,58.8,-28.5,58.8,1.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </figure>
    </section>
  );
};

export default Landing;
