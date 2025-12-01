import React, { useState } from 'react';
import "./Medical.css";

function Medical({ items, title, description }) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    // Course data for each field
    const getCourses = (itemTitle) => {
        const coursesData = {
            "BSC Nursing": [
                { name: "Fundamentals of Nursing", duration: "1 Year", fees: "₹50,000" },
                { name: "Medical-Surgical Nursing", duration: "1 Year", fees: "₹55,000" },
                { name: "Community Health Nursing", duration: "6 Months", fees: "₹30,000" },
                { name: "Pediatric Nursing", duration: "6 Months", fees: "₹35,000" }
            ],
            "General Nursing": [
                { name: "Basic Nursing Care", duration: "6 Months", fees: "₹25,000" },
                { name: "Patient Care Management", duration: "4 Months", fees: "₹20,000" },
                { name: "Nursing Assistantship", duration: "3 Months", fees: "₹15,000" }
            ],
            "B-Pharm": [
                { name: "Pharmaceutical Chemistry", duration: "1 Year", fees: "₹60,000" },
                { name: "Pharmacology", duration: "1 Year", fees: "₹65,000" },
                { name: "Pharmaceutics", duration: "1 Year", fees: "₹62,000" },
                { name: "Clinical Pharmacy", duration: "6 Months", fees: "₹40,000" }
            ],
            "MBBS (Medicine)": [
                { name: "Pre-Medical Foundation", duration: "1 Year", fees: "₹1,50,000" },
                { name: "Anatomy & Physiology", duration: "1 Year", fees: "₹2,00,000" },
                { name: "Clinical Medicine", duration: "2 Years", fees: "₹4,00,000" },
                { name: "Surgery Basics", duration: "1 Year", fees: "₹2,50,000" }
            ],
            "Physiotherapy": [
                { name: "Musculoskeletal Therapy", duration: "6 Months", fees: "₹45,000" },
                { name: "Sports Physiotherapy", duration: "6 Months", fees: "₹50,000" },
                { name: "Neurological Rehabilitation", duration: "4 Months", fees: "₹40,000" }
            ],
            "Lab Technician": [
                { name: "Clinical Laboratory Techniques", duration: "6 Months", fees: "₹35,000" },
                { name: "Pathology Lab Training", duration: "4 Months", fees: "₹28,000" },
                { name: "Microbiology Lab Practices", duration: "3 Months", fees: "₹22,000" }
            ],
            "Microbiology": [
                { name: "Medical Microbiology", duration: "1 Year", fees: "₹55,000" },
                { name: "Industrial Microbiology", duration: "6 Months", fees: "₹40,000" },
                { name: "Virology & Immunology", duration: "6 Months", fees: "₹45,000" }
            ],
            "BDS (Dentistry)": [
                { name: "Oral Medicine & Radiology", duration: "1 Year", fees: "₹1,20,000" },
                { name: "Orthodontics", duration: "1 Year", fees: "₹1,50,000" },
                { name: "Periodontics", duration: "6 Months", fees: "₹80,000" },
                { name: "Prosthodontics", duration: "1 Year", fees: "₹1,30,000" }
            ],
            "B-Tech/M-Tech": [
                { name: "Computer Science Engineering", duration: "4 Years", fees: "₹4,00,000" },
                { name: "Mechanical Engineering", duration: "4 Years", fees: "₹3,50,000" },
                { name: "Electronics & Communication", duration: "4 Years", fees: "₹3,80,000" },
                { name: "Civil Engineering", duration: "4 Years", fees: "₹3,20,000" },
                { name: "Electrical Engineering", duration: "4 Years", fees: "₹3,60,000" }
            ],
            "LAW": [
                { name: "Corporate Law", duration: "1 Year", fees: "₹1,50,000" },
                { name: "Criminal Law", duration: "1 Year", fees: "₹1,40,000" },
                { name: "International Law", duration: "6 Months", fees: "₹80,000" },
                { name: "Intellectual Property Law", duration: "6 Months", fees: "₹90,000" },
                { name: "Constitutional Law", duration: "1 Year", fees: "₹1,30,000" }
            ],
            "B-Arch": [
                { name: "Architectural Design", duration: "5 Years", fees: "₹5,00,000" },
                { name: "Urban Planning", duration: "2 Years", fees: "₹2,50,000" },
                { name: "Interior Architecture", duration: "3 Years", fees: "₹3,20,000" },
                { name: "Landscape Architecture", duration: "2 Years", fees: "₹2,80,000" }
            ],
            "Aviation": [
                { name: "Commercial Pilot License", duration: "1.5 Years", fees: "₹25,00,000" },
                { name: "Aircraft Maintenance Engineering", duration: "3 Years", fees: "₹8,00,000" },
                { name: "Airport Management", duration: "2 Years", fees: "₹3,50,000" },
                { name: "Cabin Crew Training", duration: "6 Months", fees: "₹2,50,000" }
            ],
            "BBA/MBA": [
                { name: "Marketing Management", duration: "2 Years", fees: "₹3,00,000" },
                { name: "Financial Management", duration: "2 Years", fees: "₹3,50,000" },
                { name: "Human Resource Management", duration: "2 Years", fees: "₹2,80,000" },
                { name: "Operations Management", duration: "2 Years", fees: "₹3,20,000" },
                { name: "International Business", duration: "2 Years", fees: "₹3,80,000" }
            ]
        };

        return coursesData[itemTitle] || [
            { name: "Foundation Course", duration: "6 Months", fees: "₹30,000" },
            { name: "Advanced Studies", duration: "1 Year", fees: "₹60,000" }
        ];
    };

    const handleCardClick = (item) => {
        setSelectedItem(item);
        setShowOffcanvas(true);
    };

    const handleClose = () => {
        setShowOffcanvas(false);
        setTimeout(() => setSelectedItem(null), 300);
    };

    return (
        <div className="medical-page">
            <div className="grid-banner-wrapper">
                <div className="grid-overlay"></div>

                {/* Header Section */}
                <div className="medical-header">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>

                {/* Grid Section */}
                <div className="medical-grid">
                    {items.map((item, index) => (
                        <div
                            className="medical-card"
                            key={index}
                            onClick={() => handleCardClick(item)}
                        >
                            <img src={item.image} alt={item.title} />
                            <div className="card-title">{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bootstrap Off-canvas */}
            <div
                className={`offcanvas offcanvas-bottom ${showOffcanvas ? 'show' : ''}`}
                tabIndex="-1"
                style={{
                    visibility: showOffcanvas ? 'visible' : 'hidden',
                    height: '70vh',
                    transition: 'transform 0.3s ease-in-out',
                    zIndex: 1045
                }}
            >
                <div className="offcanvas-header bg-primary text-white">
                    <h5 className="offcanvas-title fw-bold">
                        {selectedItem?.title} - Available Courses
                    </h5>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        onClick={handleClose}
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <div className="container-fluid">
                        <div className="row g-3">
                            {selectedItem && getCourses(selectedItem.title).map((course, idx) => (
                                <div className="col-12 col-sm-6 col-lg-4" key={idx}>
                                    <div className="card h-100 shadow-sm">
                                        <div className="card-body">
                                            <h6 className="card-title text-primary fw-bold mb-3">
                                                {course.name}
                                            </h6>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="text-muted small">Duration:</span>
                                                <span className="badge bg-info">{course.duration}</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <span className="text-muted small">Fees:</span>
                                                <span className="badge bg-success">{course.fees}</span>
                                            </div>
                                            <button className="btn btn-sm btn-outline-primary w-100">
                                                Enroll Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {showOffcanvas && (
                <div
                    className="offcanvas-backdrop fade show"
                    onClick={handleClose}
                    style={{ zIndex: 1040 }}
                ></div>
            )}
        </div>
    );
}

export default Medical;