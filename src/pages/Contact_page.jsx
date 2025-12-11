import React from 'react';
import Contact from '../components/contact/contact.jsx'; // Import the component
import '../components/contact/contact.css'; // Import the styles

const Contact_page = () => {
  return (
    <div className="contact-page-wrapper">

      {/* Hero / Header Section - Removed for new design */}


      {/* Main Container */}
      <div className="contact-container">
        <Contact />
      </div>

    </div>
  );
};

export default Contact_page;