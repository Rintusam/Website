import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import EnquiryModal from '../enquiry_modal/EnquiryModal';
import './FloatingEnquiry.css';

const FloatingEnquiry = () => {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    // Check if the current page is the collection form
    if (location.pathname === '/collect_form') {
        return null;
    }

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="floating-enquiry-wrapper" onClick={handleOpenModal}>
                <div className="icon-container">
                    <i className="fa-solid fa-headset"></i>
                </div>
            </div>
            <EnquiryModal show={showModal} onClose={handleCloseModal} />
        </>
    );
};

export default FloatingEnquiry;
