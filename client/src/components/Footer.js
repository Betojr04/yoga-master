import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome integration
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons"; // Social media icons
import "../styles/Footer.css"; // CSS for the footer

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-navigation">
          {" "}
          {/* Navigation links */}
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          {" "}
          {/* Social media icons */}
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} size="lg" />{" "}
            {/* Facebook icon */}
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} size="lg" />{" "}
            {/* Instagram icon */}
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} size="lg" /> {/* Twitter icon */}
          </a>
        </div>
        <div className="footer-contact">
          {" "}
          {/* Contact information */}
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
