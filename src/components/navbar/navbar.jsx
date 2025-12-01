import React from 'react';
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#293021' }}>
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
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item px-2">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="/programs">Explore Programs</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="/how">How it Works</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="/resources">Resources</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="/contact">Contacts</a>
                        </li>
                    </ul>

                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-info">Sign in</button>
                        <button className="btn btn-info text-dark fw-semibold">Sign up</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;