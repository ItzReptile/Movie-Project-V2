import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Nav = () => {
  return (
    <section className="nav-section" id="#NAV">
      <div className="container">
        <div className="row">
          <nav>
            <div className="nav-title-wrapper">
              <FontAwesomeIcon icon={"clapperboard"} />
              <h1 className="nav-title">Infinite Movies</h1>
            </div>
            <div className="nav-links-wrapper">
              <ul className="nav-links">
                <li className="nav-link white">About</li>
                <li className="nav-link white">Favorites</li>
                <li className="nav-link nav-contact">Contact</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Nav;
