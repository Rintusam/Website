import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Medical.css";

function Medical({ items, title, description }) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const navigate = useNavigate();

    // Course data for each field
    const getCourses = (itemTitle) => {
        const coursesData = {
            "BSC Nursing": [
                { name: "BSC Nursing", duration: "4 Years" }
               
            ],
            "General Nursing": [
                { name: "General Nursing ", duration: "3 Years" }
                
            ],
            "Bachelor of Pharmacy (B.Pharm)": [
                { name: "Bachelor of Pharmacy", duration: "4 Years" },
                 ],

            "MBBS (Medicine)": [
                { name: "MBBS (Medicine)", duration: "5.5 Years" },
                
            ],
            "Bachelor of Physiotherapy(BPT)": [
                { name: "Bachelors of Physiotherapy", duration: "4 Years"}
                
            ],
            "B.Sc Cardiovascular Technology": [
                { name: "B.Sc Cardiovascular Technology", duration: "3 Years" },
                
            ],
            
            "B.Sc Radiology & Imaging Technology": [
                { name: "B.Sc Radiology & Imaging Technology", duration: "3 Years" },
               ],
            "Engineering(B.Tech)": [
                { name: "Computer Science Engineering", duration: "4 Years" },
                { name: "Mechanical Engineering", duration: "4 Years"},
                { name: "Electronics & Communication", duration: "4 Years" },
                { name: "Civil Engineering", duration: "4 Years"},
                { name: "Electrical Engineering", duration: "4 Years"}
            ],
            "Bachelor Degree(B.Sc)": [
                { name: "B.Sc Computer Science", duration: "3 Years"},
                { name: "B.Sc  Biotechnology", duration: "3 Years"},
                { name: "B.Sc Forensic Science", duration: "3 Years"},
                { name: "B.Sc Costume Design and Fashion", duration: "3 Years"},
                { name: "B.Sc Digital and Cyber Forensic Science", duration: "3 Years"},
                { name: "B.Sc Artificial Intelligence & Machine Learning", duration: "3 Years"},
            ],
            "B-Arch": [
                { name: "Architectural Design", duration: "5 Years", fees: "₹5,00,000" },
                { name: "Urban Planning", duration: "2 Years", fees: "₹2,50,000" },
                { name: "Interior Architecture", duration: "3 Years", fees: "₹3,20,000" },
                { name: "Landscape Architecture", duration: "2 Years", fees: "₹2,80,000" }
            ],
            "Hotel Management": [
                { name: "Bachelor of Hotel Management(BHM)", duration: "3 Years" },
                { name: "B.sc Hospitality and Hotel", duration: "3 Years" },
                { name: "Bachelor in Hotel Management and Catering Technology(BHMCT)", duration: "4 Years"},
            ],
            
            "BBA": [
                { name: "Marketing Management", duration: "3 Years", },
                { name: "Financial Management", duration: "3 Years" },
                { name: "Human Resource Management", duration: "3 Years"},
                { name: "Operations Management", duration: "3 Years"},
                { name: "International Business", duration: "3 Years"},
            ],
            
            "MBA": [
                { name: "MBA in Marketing Management", duration: "2 Years", },
                { name: "MBA in Finance", duration: "2 Years" },
                { name: "MBA in Human Resource Management", duration: "2 Years"},
                { name: " MBA in Operations Management", duration: "2 Years"},
                { name: "MBA in International Business", duration: "2 Years"},
                { name: "MBA in Business Analytics", duration: "2 Years"},
                { name: "MBA in Logistics & Supply Chain Management", duration: "2 Years"},
                { name: "MBA in Information Technology", duration: "2 Years"},
            ]
        };

        return coursesData[itemTitle] || [
            { name: "Foundation Course", duration: "6 Months",  },
            { name: "Advanced Studies", duration: "1 Year",  }
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
                <div className="offcanvas-header text-white">
                    <h5 className="offcanvas-title  fw-bold">
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
                                            <h6 className="popup-card fw-bold mb-3">
                                                {course.name}
                                            </h6>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="fw-bold ">Duration:</span>
                                                <span className="badge bg-primary">{course.duration}</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <span className="fw-bold ">Fees:</span>
                                                <span className="badge bg-success">{course.fees}</span>
                                            </div>
                                            <button
                                                className="btn btn-sm btn-outline-primary w-100"
                                                onClick={() => navigate('/college')}
                                            >
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