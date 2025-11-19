import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <h2>Your Brand</h2>
                <p>Empowering students to choose the right path for their future.</p>
            </div>

            <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li>Home</li>
                    <li>Explore Programs</li>
                    <li>How it Works</li>
                    <li>Resources</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="footer-contact">
                <h4>Contact</h4>
                <p>Email: support@yourbrand.com</p>
                <p>Phone: +91 98765 43210</p>
            </div>
        </footer>
    );
}

export default Footer;
