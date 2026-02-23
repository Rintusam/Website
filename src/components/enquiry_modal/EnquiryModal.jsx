import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EnquiryModal.css';

const EnquiryModal = ({ show, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const [isSubmitted, setIsSubmitted] = useState(false);

    // Reset submission state when modal re-opens
    useEffect(() => {
        if (show) {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                location: '',
                message: ''
            });
            setErrors({});
        }
    }, [show]);

    // Only render if show is true
    if (!show) {
        return null;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Mobile number validation (only numbers)
        if (name === 'phone') {
            if (/^\d*$/.test(value) && value.length <= 10) {
                setFormData(prev => ({ ...prev, [name]: value }));
                // Clear error if valid length
                if (value.length === 10) {
                    setErrors(prev => ({ ...prev, phone: '' }));
                }
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
            // Clear error on change
            if (errors[name]) {
                setErrors(prev => ({ ...prev, [name]: '' }));
            }
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Full Name is required";
        if (!formData.phone) {
            newErrors.phone = "Mobile Number is required";
        } else if (formData.phone.length !== 10) {
            newErrors.phone = "Mobile Number must be exactly 10 digits";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Handle form submission logic here
        axios.post('/api/enquiries/', formData)
            .then(response => {
                setIsSubmitted(true);
            })
            .catch(error => {
                console.error("Error submitting enquiry:", error);
                let errorMessage = "Failed to submit enquiry. Please try again.";

                if (error.response) {
                    // Server responded with a status code outside 2xx range
                    if (error.response.data) {
                        // If data is an object (validation errors), flatten it
                        if (typeof error.response.data === 'object') {
                            const messages = Object.values(error.response.data).flat();
                            if (messages.length > 0) {
                                errorMessage = messages.join('\n');
                            }
                        } else {
                            errorMessage = error.response.data;
                        }
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    errorMessage = "Network error: No response from server. Please check your connection.";
                }

                alert(errorMessage);
            });
    };

    return (
        <div className="enquiry-modal-overlay" onClick={onClose}>
            <div className={`enquiry-modal-content ${isSubmitted ? 'success-mode' : ''}`} onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>

                {isSubmitted ? (
                    <div className="enquiry-success-message">
                        <div className="success-icon">
                            <i className="fa-solid fa-check-circle"></i>
                        </div>
                        <h3>Thank You!</h3>
                        <p>Your enquiry has been submitted successfully.</p>
                        <button className="submit-btn success-close-btn" onClick={onClose}>
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 className="enquiry-modal-title">Quick Enquiry</h2>
                        <p className="enquiry-modal-subtitle">We're here to help! Fill out the form below and we'll get back to you soon.</p>

                        <form className="enquiry-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                {/* Full Name */}
                                <div className="form-group">
                                    <div className="input-icon-wrapper">
                                        <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                                        </svg>
                                        <input
                                            type="text"
                                            className={`form-input ${errors.name ? 'input-error' : ''}`}
                                            placeholder="Full Name *"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.name && <span className="error-message">{errors.name}</span>}
                                </div>
                                {/* Email */}
                                <div className="form-group">
                                    <div className="input-icon-wrapper">
                                        <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                        <input
                                            type="email"
                                            className="form-input"
                                            placeholder="Email Address"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                {/* Phone */}
                                <div className="form-group">
                                    <div className="input-icon-wrapper">
                                        <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                                        </svg>
                                        <input
                                            type="tel"
                                            className={`form-input ${errors.phone ? 'input-error' : ''}`}
                                            placeholder="Mobile Number *"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                                </div>
                                {/* Location */}
                                <div className="form-group">
                                    <div className="input-icon-wrapper">
                                        <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                        </svg>
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="Location"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="form-group">
                                <div className="textarea-icon-wrapper">
                                    <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                    </svg>
                                    <textarea
                                        className="form-textarea"
                                        placeholder="Query / Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>

                            <button type="submit" className="submit-btn">SUBMIT</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default EnquiryModal;
