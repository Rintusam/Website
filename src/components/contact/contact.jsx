import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

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
      
      {/* Left Side: Contact Info */}
      <div className="contact-info">
        <div>
          <h3>Contact Info</h3>
          
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>123 Business Street,<br /> Tech City, TC 90210</p>
          </div>
          
          <div className="info-item">
            <FaPhone className="icon" />
            <p>+1 (555) 123-4567</p>
          </div>
          
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>support@yourwebsite.com</p>
          </div>
        </div>
        
        <div className="social-links">
          <FaLinkedin className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaGithub className="social-icon" />
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="contact-form-section">
        <h3>Send a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="John Doe" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="john@example.com" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              required 
              placeholder="Project Inquiry" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required 
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

    </div>
  );
};

export default Contact;