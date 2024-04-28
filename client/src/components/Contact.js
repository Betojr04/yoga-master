import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import "../styles/ContactSection.css";

export const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact</h2>
          <p>
            Have questions or want to book a session? Feel free to get in touch!
          </p>
          <div className="info">
            <div className="icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="text">
              <h3>Location</h3>
              <p>123 Yoga Street, City, Country</p>
            </div>
          </div>
          <div className="info">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="info">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+123 456 7890</p>
            </div>
          </div>
        </div>
        <form className="contact-form">
          <h2>Send me a Message</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
