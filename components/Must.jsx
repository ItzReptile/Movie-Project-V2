import React from "react";
import importantimage1 from "../assets/important 1.jpg";
import importantimage2 from "../assets/important 2.jpg";
import importantimage3 from "../assets/important 3.jpg";
import importantimage4 from "../assets/important 4.jpg";

const Must = () => {
  return (
    <section className="important-section" id="#important">
      <div className="container">
        <div className="row">
          <h1 className="search-text white">A MUST WATCH:</h1>
          <div className="movie">
            <div className="must-watch-wrapper">
              <figure className="must-watch">
                <a
                  href="https://www.tiktok.com/@davidabragg/video/7228575532382752002"
                  target="_blank"
                >
                  <img src={importantimage1} className="movie-img" alt="" />
                </a>
              </figure>
            </div>
            <div className="must-watch-wrapper">
              <figure className="must-watch">
                <a
                  href="https://www.tiktok.com/@davidabragg/video/7159530600238484738"
                  target="_blank"
                >
                  <img src={importantimage2} className="movie-img" alt="" />
                </a>
              </figure>
            </div>
            <div className="must-watch-wrapper">
              <figure className="must-watch">
                <a
                  href="https://www.tiktok.com/@davidabragg/video/7218191783073828098"
                  target="_blank"
                >
                  <img src={importantimage3} className="movie-img" alt="" />
                </a>
              </figure>
            </div>
            <div className="must-watch-wrapper">
              <figure className="must-watch">
                <a
                  href="https://www.tiktok.com/discover/David-Bragg"
                  target="_blank"
                >
                  <img src={importantimage4} className="movie-img" alt="" />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Must;
