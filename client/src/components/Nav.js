import React from "react";
import "../styles/Nav.css";

import yogaLogo from "../assets/gabLogo.svg";

export const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav-links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img src={yogaLogo} alt="Yoga Logo" />
      </div>
      <button type="submit" className="cta">
        Work with me
      </button>
    </nav>
  );
};
