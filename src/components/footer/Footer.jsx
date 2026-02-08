import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">

        {/* Column 1: About Study Path */}
        <div className="footer-section about">
          <h2 className="footer-logo">NeuCa</h2>
          <p>
            NeuCa is your trusted partner in navigating educational opportunities abroad. We specialize in medical and engineering admissions, providing expert career counseling to help you achieve your academic dreams.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div className="footer-section services">
          <h3>Opportunities</h3>
          <ul>
            <li><Link to="/medical">Medical Admissions</Link></li>
            <li><Link to="/non-medical">Engineering / Non-Medical</Link></li>
            <li><span>Career Counseling</span></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-section contact">
          <h3>Get in Touch</h3>
          <ul className="contact-list">
            <li>
              <MdPhone className="icon" />
              <a href="tel:+919876543210">+91 9876543210</a>
            </li>
            <li>
              <MdEmail className="icon" />
              <a href="mailto:contact@neuca.com">contact@neuca.com</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} NeuCa. All rights reserved.
        </p>
        <div className="legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span className="separator">|</span>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <span className="separator">|</span>
          <Link to="/disclaimer">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;