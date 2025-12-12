import { useState } from "react";
import React from 'react';
import './Collection_Form.css';  // Import your CSS file

function Collection_Form() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        address: "",
        email: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation example
        if (!form.name || !form.phone || !form.address || !form.email) {
            alert("Fill all fields");
            return;
        }

        console.log("Form Submitted:", form);
        alert("Form submitted successfully!");
    };

    return (
        <div className="college-wrapper">
            <div className="container">
                {/* Header Section */}
                <div className="text-center header-section">
                    <h1 className="main-title">Contact Information</h1>
                    <p className="main-subtitle">
                        Please fill in your details below to get started
                    </p>
                </div>

                {/* Form Card */}
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="college-card">
                            <div className="college-image gradient-2">
                                <div className="college-icon">📋</div>
                            </div>

                            <div className="card-body p-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label college-name" style={{ fontSize: '0.95rem', marginBottom: '8px' }}>
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control"
                                            placeholder="Enter your full name"
                                            value={form.name}
                                            onChange={handleChange}
                                            style={{
                                                padding: '12px 16px',
                                                borderRadius: '10px',
                                                border: '2px solid #e0e0e0',
                                                fontSize: '1rem'
                                            }}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label college-name" style={{ fontSize: '0.95rem', marginBottom: '8px' }}>
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Enter your phone number"
                                            value={form.phone}
                                            onChange={handleChange}
                                            style={{
                                                padding: '12px 16px',
                                                borderRadius: '10px',
                                                border: '2px solid #e0e0e0',
                                                fontSize: '1rem'
                                            }}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label college-name" style={{ fontSize: '0.95rem', marginBottom: '8px' }}>
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            className="form-control"
                                            placeholder="Enter your address"
                                            value={form.address}
                                            onChange={handleChange}
                                            style={{
                                                padding: '12px 16px',
                                                borderRadius: '10px',
                                                border: '2px solid #e0e0e0',
                                                fontSize: '1rem'
                                            }}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="email" className="form-label college-name" style={{ fontSize: '0.95rem', marginBottom: '8px' }}>
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            value={form.email}
                                            onChange={handleChange}
                                            style={{
                                                padding: '12px 16px',
                                                borderRadius: '10px',
                                                border: '2px solid #e0e0e0',
                                                fontSize: '1rem'
                                            }}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                        style={{
                                            padding: '14px',
                                            borderRadius: '10px',
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            border: 'none',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        Submit Form
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection_Form;