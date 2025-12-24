import React, { useState, useEffect } from 'react';
import './collection_form.css';
import axios from "axios";
import { useLocation } from 'react-router-dom';

const CollectionForm = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    mobile: '',
    email: '',
    qualification: '',
    yearOfPassing: '',
    aggregatePercentage: '',
  });

  // State to hold error messages
  const [errors, setErrors] = useState({});

  const location = useLocation();
  const { selectedColleges = [], noPreference = false, selectedCourse = '' } = location.state || {};

  // State to handle submission success message
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }

    setFormData({ ...formData, [name]: value });
  };

  // Generate Year Options (e.g., last 30 years)
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(30), (val, index) => currentYear - index);

  // Get current date for max date validation
  const today = new Date().toISOString().split('T')[0];

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

    // DOB Validation
    if (!formData.dob) {
      newErrors.dob = 'Date of Birth is required.';
      isValid = false;
    }

    // Gender Validation
    if (!formData.gender) {
      newErrors.gender = 'Gender is required.';
      isValid = false;
    }

    // Mobile Validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required.';
      isValid = false;
    } else if (!phoneRegex.test(formData.mobile.replace(/[\s-]/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number.';
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

    // Qualification Validation
    if (!formData.qualification) {
      newErrors.qualification = 'Highest qualification is required.';
      isValid = false;
    }

    // Year of Passing Validation
    if (!formData.yearOfPassing) {
      newErrors.yearOfPassing = 'Year of passing is required.';
      isValid = false;
    }

    // Aggregate Percentage Validation
    if (!formData.aggregatePercentage.trim()) {
      newErrors.aggregatePercentage = 'Aggregate Percentage/CGPA is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle Form Submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    setSubmitError('');

    if (!validateForm()) return;

    try {
      const collegesChoice = (noPreference || selectedColleges.length === 0)
        ? "No College Preference"
        : selectedColleges.map(c => c.name).join(", ");

      const payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        dob: formData.dob,
        gender: formData.gender,
        email: formData.email,
        phone_number: formData.mobile,
        highest_qualification: formData.qualification,
        year_of_passing: formData.yearOfPassing,
        aggregate_percentage: formData.aggregatePercentage,
        course_selected: selectedCourse,
        colleges_selected: collegesChoice,
      };

      await axios.post("/api/submit/", payload);

      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        mobile: '',
        email: '',
        qualification: '',
        yearOfPassing: '',
        aggregatePercentage: '',
      });

      window.scrollTo(0, 0);

    } catch (error) {
      console.error("Submission failed:", error.response?.data || error.message);
      let errMsg = "Something went wrong. Please try again.";
      if (error.response?.data) {
        if (typeof error.response.data === 'object') {
          const firstError = Object.values(error.response.data).flat()[0];
          if (firstError) errMsg = firstError;
        } else {
          errMsg = error.response.data;
        }
      }
      setSubmitError(errMsg);
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

        {submitError && (
          <div className="error-message" style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>

          <div className="form-row">
            {/* First Name */}
            <div className="form-group">
              <label htmlFor="firstName">First Name <span className="required-mark">*</span></label>
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
              <label htmlFor="lastName">Last Name <span className="required-mark">*</span></label>
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

          <div className="form-row">
            {/* Date of Birth */}
            <div className="form-group">
              <label>Date of Birth <span className="required-mark">*</span></label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                max={today}
                className={errors.dob ? 'input-error' : ''}
              />
              {errors.dob && <div className="error-message">{errors.dob}</div>}
            </div>

            {/* Gender */}
            <div className="form-group">
              <label htmlFor="gender">Gender <span className="required-mark">*</span></label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={errors.gender ? 'input-error' : ''}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              {errors.gender && <div className="error-message">{errors.gender}</div>}
            </div>
          </div>

          <div className="form-row">
            {/* Mobile Number */}
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number <span className="required-mark">*</span></label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="10 digit mobile number"
                value={formData.mobile}
                onChange={handleChange}
                className={errors.mobile ? 'input-error' : ''}
              />
              {errors.mobile && <div className="error-message">{errors.mobile}</div>}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email Address <span className="required-mark">*</span></label>
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
          </div>



          <div className="form-row">
            {/* Highest Qualification */}
            <div className="form-group">
              <label htmlFor="qualification">Highest Qualification <span className="required-mark">*</span></label>
              <select
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className={errors.qualification ? 'input-error' : ''}
              >
                <option value="">Select Qualification</option>
                <option value="10th Standard">10th Standard</option>
                <option value="12th Standard">12th Standard</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="Others
                ">Others</option>
              </select>
              {errors.qualification && <div className="error-message">{errors.qualification}</div>}
            </div>

            {/* Year of Passing */}
            <div className="form-group">
              <label htmlFor="yearOfPassing">Year of Passing <span className="required-mark">*</span></label>
              <select
                id="yearOfPassing"
                name="yearOfPassing"
                value={formData.yearOfPassing}
                onChange={handleChange}
                className={errors.yearOfPassing ? 'input-error' : ''}
              >
                <option value="">Select Year</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              {errors.yearOfPassing && <div className="error-message">{errors.yearOfPassing}</div>}
            </div>
          </div>

          {/* Aggregate Percentage/CGPA */}
          <div className="form-group">
            <label htmlFor="aggregatePercentage">Aggregate Percentage% / CGPA <span className="required-mark">*</span></label>
            <input
              type="text"
              id="aggregatePercentage"
              name="aggregatePercentage"
              placeholder="e.g. 85% or 8.5 CGPA"
              value={formData.aggregatePercentage}
              onChange={handleChange}
              className={errors.aggregatePercentage ? 'input-error' : ''}
            />
            {errors.aggregatePercentage && <div className="error-message">{errors.aggregatePercentage}</div>}
          </div>

          {/* Selected Course (Read-only if passed) */}
          {selectedCourse && (
            <div className="form-group">
              <label>Selected Course</label>
              <input
                type="text"
                value={selectedCourse}
                readOnly
                className="read-only-input"
              />
            </div>
          )}


          {/* Selected Colleges Field */}
          <div className="form-group">
            <label>Selected Colleges</label>
            {noPreference || selectedColleges.length === 0 ? (
              <input
                type="text"
                value="No College Preference"
                readOnly
                className="read-only-input"
              />
            ) : selectedColleges.length === 1 ? (
              <input
                type="text"
                value={selectedColleges[0].name}
                readOnly
                className="read-only-input"
              />
            ) : (
              <select className="college-select-dropdown">
                {selectedColleges.map((college) => (
                  <option key={college.id} value={college.name}>
                    {college.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <button type="submit" className="submit-btn" style={{ marginTop: '20px' }}>
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default CollectionForm;