// src/components/Services.jsx

import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>
        At [Yoga Business Name], we offer a range of yoga classes and services
        to meet your needs:
      </p>

      <div className="service-section">
        <div>
          <h3>Group Yoga Classes</h3>
          <p>
            Join our group classes to experience the energy and support of
            practicing yoga with others. We offer classes in various styles,
            including Hatha Yoga, Vinyasa Yoga, Yin Yoga, Restorative Yoga, and
            more.
          </p>
        </div>

        <div>
          <h3>Private Yoga Sessions</h3>
          <p>
            Personalized sessions designed to meet your specific needs and
            goals. Perfect for beginners or those looking to deepen their
            practice.
          </p>
        </div>

        <div>
          <h3>Workshops and Events</h3>
          <p>
            We regularly host workshops and special events focusing on different
            aspects of yoga, such as meditation, breathwork, and advanced
            asanas.
          </p>
        </div>

        <div>
          <h3>Corporate Wellness Programs</h3>
          <p>
            Bring the benefits of yoga to your workplace with our corporate
            wellness programs. We offer on-site and virtual classes to help
            reduce stress and improve overall well-being.
          </p>
        </div>

        <div>
          <h3>Retreats</h3>
          <p>
            Join us for immersive yoga retreats at beautiful locations. A
            perfect way to rejuvenate and deepen your practice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
