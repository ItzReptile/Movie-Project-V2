import React from "react";

const Footer = () => {
  return (
    <section className="footer-section" id="#footer">
      <footer>
        <div className="container">
          <div className="row">
            <div className="footer-links-wrapper">
              <ul className="footer-links">
                <li className="footer-link white">Favorites</li>
                <li className="footer-link white">Contact</li>
                <li className="footer-link white">About</li>
                <li className="footer-link white">Terms Of Service</li>
                <li className="footer-link white">FAQ</li>
                <li className="footer-link white">Private Policy</li>
              </ul>
            </div>
            <div className="disclaimer-wrapper">
              <h1 className="disclaimer">Copyright © Reptile. All rights reserved.</h1>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
