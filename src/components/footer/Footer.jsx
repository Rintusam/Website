import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer-section py-5" style={{ backgroundColor: '#0f1115', color: '#ffffff' }}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-md-4">
                        <h2 className="mb-3">Your Brand</h2>
                        <p className="opacity-75">
                            Empowering students to choose the right path for their future.
                        </p>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4 className="mb-3">Quick Links</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/" className="text-white text-decoration-none opacity-75 hover-link">Home</a></li>
                            <li className="mb-2"><a href="/programs" className="text-white text-decoration-none opacity-75 hover-link">Explore Programs</a></li>
                            <li className="mb-2"><a href="/how" className="text-white text-decoration-none opacity-75 hover-link">How it Works</a></li>
                            <li className="mb-2"><a href="/resources" className="text-white text-decoration-none opacity-75 hover-link">Resources</a></li>
                            <li className="mb-2"><a href="/contact" className="text-white text-decoration-none opacity-75 hover-link">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-4">
                        <h4 className="mb-3">Contact</h4>
                        <p className="mb-2 opacity-75">Email: support@yourbrand.com</p>
                        <p className="mb-2 opacity-75">Phone: +91 98765 43210</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;