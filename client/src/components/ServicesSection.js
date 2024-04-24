import React from "react";
import "../styles/ServicesSection.css";

import service1 from "../assets/service1.jpeg";
import service2 from "../assets/service2.jpeg";
import service3 from "../assets/service3.jpeg";

export const ServicesSection = () => {
  return (
    <section className="services-section">
      {" "}
      <h2>How I Can Help You</h2>
      <div className="services-grid">
        {" "}
        <div className="service-card">
          {" "}
          <img src={service1} alt="Service 1" className="service-image" />{" "}
          <h3>Yoga Classes</h3>
          <p>
            We offer a variety of yoga classes, from beginner to advanced,
            focusing on mindfulness and breathwork.
          </p>
        </div>
        <div className="service-card">
          {" "}
          <img src={service2} alt="Service 2" className="service-image" />
          <h3>Private Sessions</h3>
          <p>
            Book a private session for personalized instruction and tailored
            yoga practices.
          </p>
        </div>
        <div className="service-card">
          {" "}
          <img src={service3} alt="Service 3" className="service-image" />
          <h3>Workshops</h3>
          <p>
            Join workshops to deepen your practice and learn new techniques.
          </p>
        </div>
      </div>
    </section>
  );
};
