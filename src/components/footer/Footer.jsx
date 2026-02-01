import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
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
            <li><Link to="/counseling">Career Counseling</Link></li>
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
              <a href="mailto:support@neuca.com">support@neuca.com</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} NeuCa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;