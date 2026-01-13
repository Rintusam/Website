import React, { useState, useEffect } from 'react';
import './collection_form.css';
import axios from "axios";
import { useLocation } from 'react-router-dom';

const PHONE_REGEX = /^\d{10}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from(new Array(30), (val, index) => CURRENT_YEAR - index);
const TODAY = new Date().toISOString().split('T')[0];

const CollectionForm = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', dob: '', gender: '', mobile: '', email: '',
    qualification: '', yearOfPassing: '', aggregatePercentage: '',
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
    const { firstName, lastName, dob, gender, mobile, email, qualification, yearOfPassing, aggregatePercentage } = formData;

    if (!firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!dob) newErrors.dob = 'Date of Birth is required.';
    if (!gender) newErrors.gender = 'Gender is required.';

    if (!mobile.trim()) newErrors.mobile = 'Mobile number is required.';
    else if (!PHONE_REGEX.test(mobile.replace(/[\s-]/g, ''))) newErrors.mobile = 'Please enter a valid 10-digit mobile number.';

    if (!email.trim()) newErrors.email = 'Email is required.';
    else if (!EMAIL_REGEX.test(email)) newErrors.email = 'Please enter a valid email format.';

    if (!qualification) newErrors.qualification = 'Highest qualification is required.';
    if (!yearOfPassing) newErrors.yearOfPassing = 'Year of passing is required.';
    if (!aggregatePercentage.trim()) newErrors.aggregatePercentage = 'Aggregate Percentage/CGPA is required.';

    if (Object.keys(newErrors).length > 0) isValid = false;
    setErrors(newErrors);
    return isValid;
  };

  const renderInput = (name, label, type = 'text', placeholder = '', options = null) => (
    <div className="form-group">
      <label htmlFor={name}>{label} <span className="required-mark">*</span></label>
      {type === 'select' ? (
        <select id={name} name={name} value={formData[name]} onChange={handleChange} className={errors[name] ? 'input-error' : ''}>
          <option value="">Select {label}</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input
          type={type} id={name} name={name} placeholder={placeholder} value={formData[name]}
          onChange={handleChange} className={errors[name] ? 'input-error' : ''}
          max={type === 'date' ? TODAY : undefined}
        />
      )}
      {errors[name] && <div className="error-message">{errors[name]}</div>}
    </div>
  );

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
            {renderInput('firstName', 'First Name', 'text', 'John')}
            {renderInput('lastName', 'Last Name', 'text', 'Doe')}
          </div>

          <div className="form-row">
            {renderInput('dob', 'Date of Birth', 'date')}
            {renderInput('gender', 'Gender', 'select', '', ['Male', 'Female', 'Others'])}
          </div>

          <div className="form-row">
            {renderInput('mobile', 'Mobile Number', 'tel', '10 digit mobile number')}
            {renderInput('email', 'Email Address', 'email', 'john.doe@example.com')}
          </div>

          <div className="form-row">
            {renderInput('qualification', 'Highest Qualification', 'select', '', ['10th Standard', '12th Standard', 'Diploma', "Bachelor's Degree", "Master's Degree", "Others"])}
            {renderInput('yearOfPassing', 'Year of Passing', 'select', '', YEARS)}
          </div>

          {renderInput('aggregatePercentage', 'Aggregate Percentage% / CGPA', 'text', 'e.g. 85% or 8.5 CGPA')}

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