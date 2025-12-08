import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#171b1dff' }}>
            <div className="container-fluid px-lg-4">
                <a className="navbar-brand fw-bold fs-4" href="/">Your Brand</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item px-2">
                            <Link className="nav-link fw-bold" to="/">Home</Link>
                        </li>
                        
                        <li className="nav-item px-2">
                            <Link className="nav-link fw-bold" to="/resources">How it works</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link fw-bold" to="/contact">Contact us</Link>
                        </li>
                    </ul>

                   
                </div>
            </div>
        </nav>
    );
}

export default NavBar;