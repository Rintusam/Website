import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or null

  const handleChange = (e) => {
    const { id, value } = e.target;

    // For phone, only allow numbers
    if (id === 'phone') {
      const numericValue = value.replace(/\D/g, ''); // Remove non-digits
      setFormData(prev => ({ ...prev, [id]: numericValue }));
    }
    // For Name, only allow letters and spaces
    else if (id === 'fullname') {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setFormData(prev => ({ ...prev, [id]: value }));
      }
    }
    else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }

    // Clear error for this specific field when user types
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full Name is mandatory.";
    } else if (formData.fullname.trim().length < 3) {
      newErrors.fullname = "Name must be at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is mandatory.";
    } else if (!/\S+@\S+\.\S/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is mandatory.";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone Number must be exactly 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus(null);

    if (validate()) {
      // Success Simulation
      console.log("Form submitted!", formData);
      setSubmissionStatus('success');

      // Reset form after delay
      setTimeout(() => {
        setSubmissionStatus(null);
        setFormData({ fullname: '', email: '', phone: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="admission-contact-wrapper">
      <div className="overlay-tint">
        <div className="contact-card">

          {/* Left Side: Form */}
          <div className="form-side">
            <div className="form-header">
              <h2>Get in Touch</h2>
              <p>We'd love to hear from you. Please fill out the form below.</p>
            </div>

            {submissionStatus === 'success' && (
              <div className="status-message success">
                Thank you for reaching out! We will get back to you shortly.
              </div>
            )}

            {!submissionStatus && (
              <form onSubmit={handleSubmit} noValidate>

                {errors.fullname && <div className="field-error-msg">{errors.fullname}</div>}
                <div className={`floating-label-group ${errors.fullname ? 'has-error' : ''}`}>
                  <input
                    type="text"
                    id="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <label htmlFor="fullname">Full Name *</label>
                </div>

                {errors.email && <div className="field-error-msg">{errors.email}</div>}
                <div className={`floating-label-group ${errors.email ? 'has-error' : ''}`}>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <label htmlFor="email">Email Address *</label>
                </div>

                {errors.phone && <div className="field-error-msg">{errors.phone}</div>}
                <div className={`floating-label-group ${errors.phone ? 'has-error' : ''}`}>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" "
                    maxLength="10"
                  />
                  <label htmlFor="phone">Phone Number *</label>
                </div>

                <div className="floating-label-group">
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="message">Enter your message here.... (Optional)</label>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            )}
          </div>

          {/* Right Side: Info & Quote */}
          <div className="info-side">
            <div className="info-content">
              <h3>Contact Information</h3>
              <p className="info-intro">Reach out to our admissions team for any inquiries.</p>

              <div className="info-item">
                <span className="icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 019-2837</p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>admissions@university.edu</p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>123 University Ave, Academic City</p>
                </div>
              </div>
            </div>

            <div className="quote-section">
              <blockquote>
                "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
              </blockquote>
              <cite>- Malcolm X</cite>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;