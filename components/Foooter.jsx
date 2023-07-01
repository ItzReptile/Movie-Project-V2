import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-section" id="#footer">
     
      <footer>
        <div className="container">
          <div className="row">
            <div className="footer-links-wrapper">
              <ul className="footer-links">
                <Link to={"/Favorite"}>
                  <li className="footer-link white">Favorites</li>
                </Link>
                <Link to={"/Contact"}>
                  <li className="footer-link white">Contact</li>
                </Link>
                <Link to={"/About"}>
                  <li className="footer-link white">About</li>
                </Link>
                <Link to={"/TOS"}>
                  <li className="footer-link white">Terms Of Service</li>
                </Link>
                <Link to={"/FAQ"}>
                  <li className="footer-link white">FAQ</li>
                </Link>
                <Link to={"/PP"}>
                  <li className="footer-link white">Private Policy</li>
                </Link>
              </ul>
            </div>
            <div className="disclaimer-wrapper">
              <h1 className="disclaimer">
                Copyright © Reptile. All rights reserved.
              </h1>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
