import React from 'react';
import './contact.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="admission-contact-wrapper">
      <div className="overlay-tint">
        <div className="contact-card">

          {/* Info & Contact Details */}
          <div className="info-side">
            <div className="info-content">
              <h3>Get in Touch</h3>
              <p className="info-intro">Have questions about admissions or our programs? We're here to help! Feel free to reach out through any of our contact channels.</p>

              <div className="info-item">
                <span className="icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919876543210" className="phone-link">+91 9876543210</a>
                  <p className="info-small">Mon - Fri, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>contact@neuca.in</p>
                  <p className="info-small">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">💬</span>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/919447738796" target="_blank" rel="noopener noreferrer" className="whatsapp-link">+91 9447738796</a>
                  <p className="info-small">Click to chat with us</p>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;