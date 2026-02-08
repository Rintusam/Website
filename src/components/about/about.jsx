import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Header / Hero */}
        <div className="about-header">
          <h1>About NeuCa</h1>
          <p className="about-tagline">Empowering Students, Simplifying Admissions, Shaping Futures.</p>
        </div>

        {/* Who We Are */}
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            NeuCa is a leading educational consultancy platform dedicated to connecting aspiring students with premier educational institutions across the country. We specialize in simplifying the college admission process through personalized guidance, comprehensive course information, and end-to-end support.
          </p>
          <p>
            Founded by education professionals with first-hand experience in higher education, we understand the challenges students and families face during the admission journey. Our platform serves as a trusted bridge between students' aspirations and their educational destinations.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            To democratize access to quality higher education by providing students with transparent, and personalized guidance throughout the college admission process. We strive to eliminate confusion, reduce stress, and empower every student to make informed decisions about their academic future.
          </p>

          <h2>Our Vision</h2>
          <p>
            To become India's most trusted educational consultancy platform, recognized for our commitment to student success, institutional partnerships, and innovative approach to admission guidance.
          </p>
        </div>

        {/* What We Do */}
        <div className="about-content">
          <h2>What We Do</h2>
          <p>We provide comprehensive admission support through a streamlined three-step process:</p>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Explore Options</h3>
              <p>Access detailed information on diverse courses, programs, and specializations aligned with your interests and career objectives.</p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Select Institutions</h3>
              <p>Browse our database of colleges and universities, and shortlist institutions that match your preferences.</p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Secure Admission</h3>
              <p>Receive dedicated support from our team throughout the entire admission process, from application submission to final seat confirmation.</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="about-content">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h4>🎯 Student-Centric Approach</h4>
              <p>Every decision we make prioritizes student success and satisfaction.</p>
            </div>
            <div className="value-item">
              <h4>🤝 Integrity & Transparency</h4>
              <p>We maintain honest communication and transparent processes at every step.</p>
            </div>
            <div className="value-item">
              <h4>🌟 Excellence in Service</h4>
              <p>We are committed to delivering exceptional guidance and support to every student.</p>
            </div>
            <div className="value-item">
              <h4>🔒 Privacy & Security</h4>
              <p>Your personal information is protected with the highest standards of data security.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="about-content">
          <h2>Why Choose NeuCa?</h2>
          <ul className="why-choose-list">
            <li><strong>Expert Guidance:</strong> Our team comprises experienced education counselors who provide personalized support.</li>
            <li><strong>Simplified Process:</strong> We handle the complexities of documentation, applications, and follow-ups on your behalf.</li>
            <li><strong>No Hidden Costs:</strong> Transparent pricing with no surprise fees or hidden charges.</li>
            <li><strong>Proven Track Record:</strong> Hundreds of successful admissions and satisfied students across various programs.</li>
            <li><strong>Continuous Support:</strong> From initial inquiry to final admission, we're with you every step of the way.</li>
          </ul>
        </div>

        {/* Privacy & Commitment */}
        <div className="privacy-note">
          <strong>Our Commitment to You:</strong> Your trust is our priority. All personal information is handled with strict confidentiality and used solely for facilitating your admission process.
        </div>

      </div>
    </section>
  );
};

export default About;