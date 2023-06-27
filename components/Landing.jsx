import React from "react";
import imageslider from "../assets/imageslider.jpg";
import HOME from "../assets/HOME.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let istrailershown = false;
function ShowTrailer() {
  if (istrailershown) {
    istrailershown = false;
    return document.body.classList.remove("trailer-wrapperv2");
  }
  istrailershown = true;
  document.body.classList += " trailer-wrapperv2";
  console.log(istrailershown);
}
const Landing = () => {
  return (
    <section className="landing-section" id="#landing-section">
      <div className="container">
        <div className="row">
          <div className="img-slider-display">
            <figure className="img-slider-wrapper">
              <img src={imageslider} className="img-slider" alt="" />
              <div className="button-wrapper">
                <button
                  onClick={ShowTrailer()}
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
          <div className="header-wrapper white">
            <h1 className="header-text">Welcome to Infinite Movies</h1>
            <h3 className="header-subtext">Go Ahead And Begin Viewing</h3>
            <input
              type="
              search"
              placeholder="Search"
              className="search-input"
            />
          </div>
          <div className="search-wrapper">
            <h1 className="search-text">
              Results For: <span className="white"> DYNAMIC</span>
            </h1>
          </div>
          <figure className="img-wrapper">
            <img src={HOME} className="img-img" alt="" />
            <h2 className="img-text white">You Havent Searched Anything!</h2>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Landing;
