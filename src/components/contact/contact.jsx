import React, { useState } from 'react';
import './contact.css';

// Optional: Import icons if you are using react-icons (npm install react-icons)
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  // Simple state to handle form submission feedback
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually send data to a backend service
    console.log("Form submitted!");
    setSubmitted(true);
    // Reset after a few seconds for demo purposes
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="admission-contact-wrapper">
       {/* The background image is handled in the CSS class .admission-contact-wrapper */}
      <div className="overlay-tint">
        <div className="contact-card">
          
          {/* Left Side: The Application Inquiry Form */}
          <div className="form-side">
            <div className="form-header">
              <h2>Start Your Journey</h2>
              <p>Have questions about the BBA program? Fill out the form below and an admissions counselor will reach out.</p>
            </div>

            {submitted ? (
              <div className="success-message">
                 Thank you for your interest! We will be in touch shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="floating-label-group">
                  <input type="text" id="fullname" required placeholder=" " />
                  <label htmlFor="fullname">Full Name Student</label>
                </div>

                <div className="floating-label-group">
                  <input type="email" id="email" required placeholder=" " />
                  <label htmlFor="email">Email Address</label>
                </div>

                <div className="floating-label-group">
                  <input type="tel" id="phone" placeholder=" " />
                  <label htmlFor="phone">Phone Number (Optional)</label>
                </div>

                <div className="floating-label-group">
                  <textarea id="message" rows="4" required placeholder=" "></textarea>
                  <label htmlFor="message">Admissions Query</label>
                </div>

                <button type="submit" className="submit-btn">Inquire Now</button>
              </form>
            )}
          </div>

          {/* Right Side: Contact Information */}
          <div className="info-side">
            <h3>Admissions Office</h3>
            <p className="info-intro">We are available Monday - Friday, 9am - 5pm to answer your questions.</p>

            <div className="info-item">
              <span className="icon">📞</span> 
              {/* If using react-icons: <FaPhoneAlt className="icon"/> */}
              <div>
                <h4>Call Us</h4>
                <p>+1 (555) 019-2837</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">✉️</span>
               {/* If using react-icons: <FaEnvelope className="icon"/> */}
              <div>
                <h4>Email Admissions</h4>
                <p>bba.admissions@university.edu</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">📍</span>
               {/* If using react-icons: <FaMapMarkerAlt className="icon"/> */}
              <div>
                <h4>Visit Campus</h4>
                <p>Building B, Room 101<br/>University Campus Drive</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;