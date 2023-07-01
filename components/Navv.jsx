import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
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
                <Link to={"/"}>
                  <li className="nav-link hover-underline">Home</li>
                </Link>
                <Link to={"/About"}>
                  <li className="nav-link hover-underline">About</li>
                </Link>
                <Link to={"/Favorite"}>
                  <li className="nav-link  hover-underline">Favorites</li>
                </Link>
                <Link>
                  <li className="nav-link hover-underline">Login</li>
                </Link>
                <Link to={"/register"}>
                  <li className="nav-link nav-contact">Sign Up</li>
                </Link>
                <Link to={"/Contact"}>
                  <li className="nav-link nav-contact">Contact</li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Nav;
