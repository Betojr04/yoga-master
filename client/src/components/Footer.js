import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-navigation">
          {" "}
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          {" "}
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} size="lg" />{" "}
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} size="lg" />{" "}
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
        <div className="footer-contact">
          {" "}
          <p>123 Yoga St, Tranquil City</p>
          <p>Email: info@yoga.com</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2024 Yoga Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};
