import React from "react";
import "../styles/HeroSection.css";

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="overlay">
        <div className="text-container">
          <h1 className="hero-heading">Welcome to Gabrielle Nielson Yoga</h1>
          <p className="hero-subheading">
            Discover the path to inner peace and wellness
          </p>
          <button className="cta-button">Get Started</button>{" "}
        </div>
      </div>
    </section>
  );
};
