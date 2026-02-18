import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Medical.css";

// Simplified course data - only department names are needed for the new design
const COURSES_DATA = {

    //--- Medical Undergraduate Courses --- 

    "BSC Nursing": [
        { name: "BSC Nursing" }
        ],
    "General Nursing": [
        { name: "General Nursing (GNM)" }
    ],
    "Bachelor of Pharmacy (B.Pharm)": [
        { name: "Bachelor of Pharmacy" }
    ],



    //--- Non-Medical Undergraduate Courses ---
    "Engineering (B.Tech/B.E)": [
        { name: "Aeronautical Engineering" },
        { name: "Agricultural Engineering" },
        { name: "Artificial Intelligence and Data Science" },
        { name: "Civil Engineering" },
        { name: "Civil Engineering with Computer Applications" },
        { name: "Computer Science and Business Systems" },
        { name: "Computer Science and Engineering" },
        { name: "Computer Science and Engineering(Artificial Intelligence & Machine Learning)" },
        { name: "Computer Science and Engineering(Cyber Security)" },
        { name: "Computer Science and Engineering(Data Science)" },
        { name: "Computer and Communication Engineering" },
        { name: "Electrical and Computer Engineering" },
        { name: "Electrical and Electronics Engineering" },
        { name: "Electronics & Communication Engineering" },
        { name: "Food Technology" },
        { name: "Information Technology" },
        { name: "Mechanical Engineering" },
        { name: "Mechatronics Engineering" },

    ],

    "Bachelor Degree(B.Sc)": [
        { name: "B.Sc Computer Science" },
        { name: "B.Sc Biotechnology" },
        { name: "B.Sc Forensic Science" },
        { name: "B.Sc Costume Design and Fashion" },
        { name: "B.Sc Digital and Cyber Forensic Science" },
        { name: "B.Sc Artificial Intelligence & Machine Learning" }
    ],
    "B-Arch": [
        { name: "Architectural Design" },
        { name: "Urban Planning" },
        { name: "Interior Architecture" },
        { name: "Landscape Architecture" }
    ],
    "Hotel Management": [
        { name: "Bachelor of Hotel Management(BHM)" },
        { name: "B.sc Hospitality and Hotel" },
        { name: "Bachelor in Hotel Management and Catering Technology(BHMCT)" }
    ],
    "BBA": [
        { name: "Marketing Management" },
        { name: "Financial Management" },
        { name: "Human Resource Management" },
        { name: "Operations Management" },
        { name: "International Business" }
    ],


    //--- Non Medical Postgraduate Courses ---

    "M.Tech/M.E": [
        { name: "Aeronautical Engineering" },
        { name: "Artificial Intelligence and Data Science" },
        { name: "CAD/CAM" },
        { name: "Communication Engineering & Signal Processing" },
        { name: "Communication Systems" },
        { name: "Computer Science and Engineering" },
        { name: "Cyber Security" },
        { name: "Energy Systems" },
        { name: "Structural Engineering" },
        { name: "VLSi Design" },

    ],

    "Ph.D in Engineering": [
        { name: "Aeronautical Engineering" },
        { name: "Mechanical Engineering" },
    ],

    "MBA": [
        { name: "MBA in Marketing Management" },
        { name: "MBA in Finance" },
        { name: "MBA in Human Resource Management" },
        { name: "MBA in Operations Management" },
        { name: "MBA in International Business" },
        { name: "MBA in Business Analytics" },
        { name: "MBA in Logistics & Supply Chain Management" },
        { name: "MBA in Information Technology" }
    ],


    //--- Medical Postgraduate Courses ---

    "M.Sc Nursing": [
        { name: "Community Health Nursing" },
        { name: "Critical Care Nursing" },
    ],

    "M.Pharm": [
        { name: "Pharmaceutics" },
        { name: "Pharmacognosy" },
        { name: "Pharmacy Practice" },
        { name: "Pharmaceutical Regulatory Affairs" },
    ],


};

function Medical({ items, title, description }) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const navigate = useNavigate();

    // Retrieve courses based on the item title
    const getCourses = (itemTitle) => {
        return COURSES_DATA[itemTitle] || [];
    };

    const handleCardClick = (item) => {
        const courses = getCourses(item.title);
        // If only one course, skip popup and navigate directly
        if (courses.length <= 1) {
            const courseName = courses.length === 1 ? courses[0].name : item.title;
            navigate('/college', { state: { course: courseName, fromCategoryPage: true } });
            return;
        }
        setSelectedItem(item);
        setShowOffcanvas(true);
    };

    const handleClose = () => {
        setShowOffcanvas(false);
        // Small delay to clear data after animation finishes
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
                            className="medical-page-card"
                            key={index}
                            onClick={() => handleCardClick(item)}
                        >
                            <img src={item.image} alt={item.title} />
                            <div className="card-title">{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bootstrap Off-canvas with Custom Styling */}
            <div
                className={`offcanvas offcanvas-bottom custom-offcanvas ${showOffcanvas ? 'show' : ''}`}
                tabIndex="-1"
                style={{
                    visibility: showOffcanvas ? 'visible' : 'hidden',
                }}
            >
                <div className="offcanvas-header custom-offcanvas-header">
                    <div>
                        <h5 className="offcanvas-title">
                            {selectedItem?.title}
                        </h5>
                        <small className="text-light opacity-75">
                            Select a course to view details
                        </small>
                    </div>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        onClick={handleClose}
                        aria-label="Close"
                    ></button>
                </div>

                <div className="offcanvas-body custom-offcanvas-body">
                    <div className="container-fluid">
                        <div className="departments-grid">
                            {selectedItem && getCourses(selectedItem.title).map((course, idx) => (
                                <div
                                    className="department-chip"
                                    key={idx}
                                    onClick={() => navigate('/college', { state: { course: course.name, fromCategoryPage: true } })}
                                >
                                    <span className="department-name">{course.name}</span>
                                    <i className="fas fa-arrow-right department-arrow"></i>
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