// src/components/About.jsx

import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>Welcome to [Yoga Business Name]</h1>
      <p>
        At [Yoga Business Name], we believe in the transformative power of yoga
        to nurture the mind, body, and spirit. Founded by [Instructor's Name], a
        dedicated and passionate yoga instructor, our mission is to provide a
        welcoming space where individuals of all levels can explore and deepen
        their practice.
      </p>
      <h2>Meet [Instructor's Name]</h2>
      <p>
        <strong>[Instructor's Name]</strong> is a certified yoga instructor with
        over [X] years of experience in various styles of yoga, including Hatha,
        Vinyasa, and Yin Yoga. [He/She/They] began [his/her/their] journey with
        yoga in [Year] and quickly fell in love with its holistic benefits.
      </p>
      <h3>Qualifications:</h3>
      <ul>
        <li>Certified Yoga Instructor (RYT-200/RYT-500)</li>
        <li>Specialized training in [specific style or therapy]</li>
        <li>[Any other relevant certifications or training]</li>
      </ul>
      <h3>Philosophy:</h3>
      <p>
        [Instructor's Name] believes that yoga is for everyone, regardless of
        age, ability, or experience. [He/She/They] emphasize a compassionate and
        inclusive approach, ensuring that each class is accessible and tailored
        to the needs of the students. [Instructor's Name] is dedicated to
        helping students find balance, strength, and inner peace through mindful
        practice.
      </p>
      <h3>Personal Journey:</h3>
      <p>[Instructor's personal journey story...]</p>
    </div>
  );
};

export default About;
