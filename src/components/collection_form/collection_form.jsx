import React, { useState } from 'react';
import './collection_form.css';

const CollectionForm = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    percentage: '',
    city: ''
  });

  // State to hold error messages
  const [errors, setErrors] = useState({});

  // State to handle submission success message
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear the error for this specific field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validation Logic
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // First Name Validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
      isValid = false;
    }

    // Last Name Validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
      isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format.';
      isValid = false;
    }

    // Phone Validation (Simple 10 digit check)
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
      isValid = false;
    }

    // Percentage Validation
    const pctValue = parseFloat(formData.percentage);
    if (!formData.percentage.toString().trim()) {
      newErrors.percentage = 'Percentage is required.';
      isValid = false;
    } else if (isNaN(pctValue) || pctValue < 0 || pctValue > 100) {
      newErrors.percentage = 'Percentage must be between 0 and 100.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(false);

    if (validateForm()) {
      // Form is valid
      // console.log('Form Submission Data:', formData);
      setIsSubmitted(true);

      // Optional: Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        percentage: '',
        city: ''
      });

      // Scroll to top to show success message
      window.scrollTo(0, 0);
    } else {
      // console.log('Validation Failed');
    }
  };

  return (
    <div className="admission-form-wrapper">
      <div className="form-container">
        <h2>Admission Enquiry Form</h2>

        {isSubmitted && (
          <div className="success-message">
            Thanks! Your details have been submitted.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>

          <div className="form-row">
            {/* First Name */}
            <div className="form-group">
              <label htmlFor="firstName">
                First Name<span className="required-mark">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'input-error' : ''}
              />
              {errors.firstName && <div className="error-message">{errors.firstName}</div>}
            </div>

            {/* Last Name */}
            <div className="form-group">
              <label htmlFor="lastName">
                Last Name<span className="required-mark">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? 'input-error' : ''}
              />
              {errors.lastName && <div className="error-message">{errors.lastName}</div>}
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">
              Email Address<span className="required-mark">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phone">
              Phone Number<span className="required-mark">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="10 digit mobile number"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>

          {/* Percentage */}
          <div className="form-group">
            <label htmlFor="percentage">
              +2 Percentage<span className="required-mark">*</span>
            </label>
            <input
              type="number"
              id="percentage"
              name="percentage"
              placeholder="e.g., 85.5"
              step="0.01"
              value={formData.percentage}
              onChange={handleChange}
              className={errors.percentage ? 'input-error' : ''}
            />
            {errors.percentage && <div className="error-message">{errors.percentage}</div>}
          </div>

          {/* City (Optional) */}
          <div className="form-group">
            <label htmlFor="city">City (Optional)</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Your city name"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default CollectionForm;