import React from "react";
import "../styles/InstrcutorSection.css";

import yogaPose from "../assets/yogapose.jpeg";
import posing from "../assets/posing.jpeg";

export const InstructorSection = () => {
  return (
    <section className="instructor-section">
      <div className="image-container">
        {" "}
        <img
          src={yogaPose}
          alt="Instructor Portrait"
          className="portrait-image"
        />{" "}
      </div>
      <div className="text-container">
        {" "}
        <h2>Meet the Instructor</h2>
        <p className="text-subheading">
          Gabrielle Nielson is a certified yoga instructor with over 500 hours
          of training and experience. She specializes in fucking it up lol.
        </p>
      </div>
      <div className="image-container">
        {" "}
        <img
          src={posing}
          alt="Instructor Giving Class"
          className="class-image"
        />{" "}
      </div>
    </section>
  );
};
