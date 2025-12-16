import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import EnquiryModal from '../enquiry_modal/EnquiryModal';

function NavBar() {
    const [showModal, setShowModal] = useState(false);

    const handleEnquiryClick = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
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
                                <Link className="nav-link fw-bold" to="/about">About us</Link>

                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link fw-bold" to="/contact">Contact us</Link>
                            </li>
                            <li className="enquiry-btn ">
                                <a className="text-white fw-bold nav-link" href="#" onClick={handleEnquiryClick} style={{ cursor: 'pointer' }}>ENQUIRY</a>
                            </li>
                        </ul>


                    </div>
                </div>
            </nav>
            <EnquiryModal show={showModal} onClose={handleCloseModal} />
        </>
    );
}

export default NavBar;