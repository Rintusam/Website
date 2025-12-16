import React, { useState } from 'react';
import './EnquiryModal.css';

const EnquiryModal = ({ show, onClose }) => {
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');

    // Only render if show is true
    if (!show) {
        return null;
    }

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        // Allow only numbers
        if (/^\d*$/.test(value)) {
            setPhone(value);
            // Clear error if user is typing and length is <= 10
            if (value.length <= 10) {
                setPhoneError('');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (phone.length !== 10) {
            setPhoneError("Phone number must be exactly 10 digits");
            return;
        }

        // Handle form submission logic here
        console.log("Enquiry submitted", { phone }); // Log value to verify
        alert("Thank you for your enquiry!");
        onClose();
    };

    return (
        <div className="enquiry-modal-overlay" onClick={onClose}>
            <div className="enquiry-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>

                <h2 className="enquiry-modal-title">Quick Enquiry</h2>

                <form className="enquiry-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" className="form-input" placeholder="Name*" required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-input" placeholder="Email*" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="tel"
                                className={`form-input ${phoneError ? 'input-error' : ''}`}
                                placeholder="Phone Number*"
                                required
                                value={phone}
                                onChange={handlePhoneChange}
                                maxLength="10"
                            />
                            {phoneError && <span className="error-message">{phoneError}</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-input" placeholder="Qualification" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" className="form-input" placeholder="Place*" required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-input" placeholder="District" />
                        </div>
                    </div>

                    <div className="form-group">
                        <select className="form-select">
                            <option value="">Select Interest</option>
                            <option value="study_abroad">Medical Fields</option>
                            <option value="language_training">Non-Medical Fields</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <textarea
                            className="form-textarea"
                            placeholder="Feedback / Suggestion / Query"
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryModal;
