import React, { useState } from 'react';
import './Contact.css';
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub
} from "react-icons/fa";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your backend submission logic here
    alert("Message sent! (Check console for data)");
  };

  return (
    <div className="contact-wrapper">

      {/* Left Side: Image & Text */}
      <div className="contact-image-section">
        <div className="image-overlay">
          <div className="icon-wrapper">
            <FaEnvelope className="envelope-icon" />
          </div>
          <h2>Let's<br />Connect!</h2>
        </div>
      </div>

      {/* Right Side: Form & Info */}
      <div className="contact-form-section">
        <h3>Contact Us</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Message"
            ></textarea>
          </div>

          {/* Contact Info Footer within Form Section */}
          <div className="contact-footer-info">
            <div className="footer-item">
              <FaPhone className="footer-icon" /> <span>555-1234</span>
            </div>
            <div className="footer-item">
              <FaEnvelope className="footer-icon" /> <span>hello@company.com</span>
            </div>
            <div className="footer-socials">
              <FaLinkedin className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaInstagram className="social-icon" />
            </div>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Contact;