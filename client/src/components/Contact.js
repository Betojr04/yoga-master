import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import "../styles/ContactSection.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Debugging logs
  console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
  console.log("Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
  console.log("User ID:", process.env.REACT_APP_EMAILJS_USER_ID);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessMessage(true);
        },
        (error) => {
          console.log(error.text);
          alert("Message Sending Failed");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const handleCloseMessage = () => {
    setShowSuccessMessage(false);
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send me a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      {showSuccessMessage && (
        <div className="success-message-overlay" onClick={handleCloseMessage}>
          <div
            className="success-message-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={handleCloseMessage}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <p>Message Sent Successfully</p>
            <button
              className="submit-another-button"
              onClick={handleCloseMessage}
            >
              Submit Another Response
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
