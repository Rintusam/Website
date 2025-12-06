import React from 'react';
import Contact from '../components/contact/contact.jsx'; // Import the component
import '../components/contact/contact.css'; // Import the styles

const Contact_page = () => {
  return (
    <div className="contact-page-wrapper">
      
      {/* Hero / Header Section */}
      <header className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Here is how you can reach us.</p>
      </header>

      {/* Main Container */}
      <div className="contact-container">
        <Contact />
      </div>

    </div>
  );
};

export default Contact_page;