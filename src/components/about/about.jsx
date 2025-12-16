import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Header / Hero */}
        <div className="about-header">
          <h1>About Study Path</h1>
          <p className="about-tagline">Your Future, Your Choice, Our Guidance.</p>
        </div>

        {/* Who We Are & Mission */}
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            At <strong>Study Path</strong>, we believe that finding the right college shouldn't be a struggle.
            We are a dedicated educational platform designed to bridge the gap between ambitious students
            and their dream institutions. We serve as a comprehensive guide for students and parents,
            simplifying the complex journey from course selection to final admission.
          </p>

          <h2>Our Mission</h2>
          <p>
            To empower students to make informed educational choices and to make the college admission
            process accessible, transparent, and stress-free for families.
          </p>
        </div>

        {/* What We Do (Cards) */}
        <div className="about-content">
          <h2>What We Do</h2>
          <p>The admission process can be overwhelming. Study Path streamlines it into three simple steps:</p>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Explore</h3>
              <p>Browse through a wide range of fields and courses tailored to your specific interests and career goals.</p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Select</h3>
              <p>View our curated list of top colleges and shortlist your preferred destinations based on your needs.</p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Secure</h3>
              <p>Once you select a college, our team personally guides you through the entire admission process until your seat is secured.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="about-content">
          <h2>Why Choose Us?</h2>
          <p>
            Founded by two college classmates who understand the challenges of higher education first-hand,
            Study Path is built on the principle of genuine support. We aren't just a database; we are your
            partners in education. We handle the complexities of admission procedures so you can focus on
            preparing for your future.
          </p>
        </div>

        {/* Privacy Note */}
        <div className="privacy-note">
          <strong>Privacy Assurance:</strong> We value your privacy. Your data is used strictly to assist
          with your admission process and is shared only with the institutions necessary to secure your placement.
        </div>

      </div>
    </section>
  );
};

export default About;