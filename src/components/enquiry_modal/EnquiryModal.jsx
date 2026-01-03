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
        axios.post('http://127.0.0.1:8000/api/enquiries/', formData)
            .then(response => {
                console.log("Enquiry submitted", response.data);
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

                        <form className="enquiry-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                                        placeholder="Full Name *"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <span className="error-message">{errors.name}</span>}
                                </div>
                                <div className="form-group">
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

                            <div className="form-row">
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        className={`form-input ${errors.phone ? 'input-error' : ''}`}
                                        placeholder="Mobile Number *"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                                </div>
                                <div className="form-group">
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

                            <div className="form-group">
                                <textarea
                                    className="form-textarea"
                                    placeholder="Query / Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
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
