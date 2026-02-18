import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Medical.css";

// Simplified course data - only department names are needed for the new design
const COURSES_DATA = {

    //--- Medical Undergraduate Courses --- 

    "Nursing": [
        { name: "B.Sc Nursing" },
        { name: "General Nursing (GNM)" },
    ],

    "Pharmacy": [
        { name: "B.Pharm (Bachelor of Pharmacy)" },
        { name: "D.Pharm (Diploma in Pharmacy)" },
        { name: "Pharm.D (Doctor of Pharmacy)" },
    ],

    "Paramedical": [
        { name: "B.Sc in Cardiac Technology" },
        { name: "B.Sc in Dialysis Technology" },
        { name: "B.Sc in Operation Theatre & Anesthesia Technology" },
        { name: "B.Sc in Physsician Assistant" },
        { name: "B.Sc in Radiology & Imaging Technology" },
    ],

    "B.Sc(Bachelor of Science)": [
        { name: "B.Sc in Biotechnology with Drug Designing" },
        { name: "B.Sc in Computational Molecular Biology Honours" },
        { name: "B.Sc in Food Science and Nutrition with Sports Nutrition" },
        { name: "B.Sc in Forensic Science with Forensic Psychology" },
        { name: "B.Sc in Microbiology with Microbial Quality Control and Testing" },
        { name: "B.Sc in Psychology with Art Therapy" },
    ],

    //--- Non-Medical Undergraduate Courses ---
    "B.Tech/B.E (Engineering)": [
        { name: "Aeronautical Engineering" },
        { name: "Agriculture Engineering" },
        { name: "Artificial Intelligence and Data Science" },
        { name: "Civil Engineering" },
        { name: "Civil Engineering with Computer Applications" },
        { name: "Computer Science and Business Systems" },
        { name: "Computer Science and Engineering" },
        { name: "Computer Science and Engineering(Artificial Intelligence and Machine Learning)" },
        { name: "Computer Science and Engineering(Cyber Security)" },
        { name: "Computer Science and Engineering(Data Science)" },
        { name: "Computer and Communication Engineering" },
        { name: "Electrical and Computer Engineering" },
        { name: "Electrical and Electronics Engineering" },
        { name: "Electronics and Communication Engineering" },
        { name: "Food Technology" },
        { name: "Information Technology" },
        { name: "Mechanical Engineering" },
        { name: "Mechatronics Engineering" },

    ],

    "Architecture": [
        { name: "B.Arch (Bachelor of Architecture)" },
        { name: "D.Arch (Diploma in Architecture)" },
        { name: "B.Des (Interior Design)" },
    ],

    "Bachelor Degree(B.Sc)": [
        { name: "B.Sc Artificial Intelligence and Machine Learning" },
        { name: "B.Sc Airline and Airport Management Honours" },
        { name: "B.Sc Artificial Intelligence Honours" },
        { name: "B.Sc Computer Science Honours" },
        { name: "B.Sc Computer Science with Cloud Computing" },
        { name: "B.Sc Computer Science with Data Science" },
        { name: "B.Sc Information Technology with Robotic Process Automation" },
        { name: "B.Sc Internet of Things with AI" },
    ],

    "B.Com": [
        { name: "Accounting and Finance" },
        { name: "Banking GST practitioner" },
        { name: "Business Analytics" },
        { name: "Computer Applications" },
        { name: "Computer Applications Honours" },
        { name: "Cooperation Honours" },
        { name: "Finance Honours" },
        { name: "Information Technology" },
        { name: "P.A Income Tax Practitioner" },
    ],

    "B.C.A": [
        { name: "BCA (Bachelor of Computer Applications)" },
        { name: "BCA Honours" },
        { name: "BCA with Business Analytics" },

    ],

    "Management & Services": [
        { name: "B.Sc Catering Science & Hotel Management with Carving" },
        { name: "B.Sc Airline and Airport Management" },

    ],
    "B.B.A": [
        { name: "Aviation with IATA" },
        { name: "BBA Honours" },
        { name: "CA with Digital Marketing & Data Analytics" },
        { name: "IB with Commodity Trading & Data Analytics" },
        { name: "Logistics & Supply Chain Management" }
    ],

    "BA": [
        { name: "Criminology with Forensic Psychology" },
        { name: "English Language and Literature Honours" },
        { name: "English Literature with Cognitive Science" },
        { name: "Human Resource Management Honours" },

    ],

    "B.Voc": [
        { name: "Fashion Technology" },
        { name: "Logistics Management" },
        { name: "Optometry and Ophthalmological Techniques" },

    ],

    "Law": [
        { name: "LL.B" },
        { name: "BBA.LL.B (Hons.)" },
        { name: "B.Com LL.B (Hons.)" },
    ],

    //--- Non Medical Postgraduate Courses ---

    "M.Tech/M.E": [
        { name: "M.Tech in Aeronautical Engineering" },
        { name: "M.Tech in Artificial Intelligence and Data Science" },
        { name: "M.Tech in CAD/CAM" },
        { name: "M.Tech in Communication Engineering & Signal Processing" },
        { name: "M.Tech in Communication Systems" },
        { name: "M.Tech in Computer Science and Engineering" },
        { name: "M.Tech in Cyber Security" },
        { name: "M.Tech in Energy Systems" },
        { name: "M.Tech in Structural Engineering" },
        { name: "M.Tech in VLSI Design" },

    ],

    "Ph.D in Engineering": [
        { name: "Ph.D in Aeronautical Engineering" },
        { name: "Ph.D in Mechanical Engineering" },
    ],

    "M.B.A": [
        { name: "M.B.A in Finance" },
        { name: "M.B.A in Health Care Management" },
        { name: "M.B.A in Human Resources Management" },
        { name: "M.B.A in Logistics & Supply Chain Management" },
        { name: "M.B.A in Marketing Operations" },
        { name: "M.B.A in Systems Management" },
    ],

    "M.Com": [
        { name: "M.Com in Finance & Control with Digital Finance" },

    ],

    "M.Sc": [
        { name: "M.Sc in Data Science" },
    ],

    "M.A": [
        { name: "M.A in Criminology with Corporate Security Management" },
    ],




    //--- Medical Postgraduate Courses ---

    "M.Sc Nursing": [
        { name: "M.Sc in Community Health Nursing" },
        { name: "M.Sc in Critical Care Nursing" },
    ],

    "M.Pharm": [
        { name: "M.Pharm in Pharmaceutics" },
        { name: "M.Pharm in Pharmacognosy" },
        { name: "M.Pharm in Pharmacy Practice" },
        { name: "M.Pharm in Pharmaceutical Regulatory Affairs" },
    ],

    "Ph.D in Pharmacy": [
        { name: "Ph.D in Pharmaceutics" },
        { name: "Ph.D in Pharmacognosy" },
        { name: "Ph.D in Pharmacy Practice" },
        { name: "Ph.D in Pharmaceutical Regulatory Affairs" },
    ],

    "M.Sc (Master of Science)": [
        { name: "M.Sc in Biotechnology with Stem Cell & Gene Therapy" },
        { name: "M.Sc in Computational Molecular Biology Honours" },
        { name: "M.Sc in Food Science and Nutrition with Food Safety Audit" },
        { name: "M.Sc in Forensic Science with DNA Fingerprinting" },
        { name: "M.Sc in Microbiology with Gene Editing" },
    ],

};

function Medical({ items, title, description }) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const navigate = useNavigate();

    // Refs to avoid stale closures in event listeners
    const isPopupOpenRef = React.useRef(false);
    const hasDummyHistoryRef = React.useRef(false);

    // Retrieve courses based on the item title
    const getCourses = (itemTitle) => {
        return COURSES_DATA[itemTitle] || [];
    };

    const handleCardClick = (item) => {
        const courses = getCourses(item.title);
        if (courses.length === 0) {
            navigate('/college', { state: { course: item.title, fromCategoryPage: true } });
            return;
        }

        // Only push ONE dummy history entry (never stack them)
        if (!hasDummyHistoryRef.current) {
            window.history.pushState({ offcanvasOpen: true }, '');
            hasDummyHistoryRef.current = true;
        }

        setSelectedItem(item);
        setShowOffcanvas(true);
        isPopupOpenRef.current = true;
    };

    const handleClose = useCallback(() => {
        setShowOffcanvas(false);
        isPopupOpenRef.current = false;
        hasDummyHistoryRef.current = false;
        setTimeout(() => setSelectedItem(null), 300);
    }, []);

    // Close popup via X button or backdrop — also consumes the dummy history entry
    const handleManualClose = useCallback(() => {
        if (isPopupOpenRef.current) {
            window.history.back(); // Triggers popstate → handleClose
        }
    }, []);

    // Listen for device back button
    // When user selects a department, clean up dummy entry before navigating
    const handleDepartmentSelect = useCallback((courseName) => {
        setShowOffcanvas(false);
        isPopupOpenRef.current = false;

        // Use replace: true to consume the dummy history entry
        // instead of pushing on top of it
        if (hasDummyHistoryRef.current) {
            hasDummyHistoryRef.current = false;
            navigate('/college', { state: { course: courseName, fromCategoryPage: true }, replace: true });
        } else {
            navigate('/college', { state: { course: courseName, fromCategoryPage: true } });
        }
    }, [navigate]);

    useEffect(() => {
        const onPopState = () => {
            if (isPopupOpenRef.current) {
                handleClose();
            }
        };
        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, [handleClose]);

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
                        onClick={handleManualClose}
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
                                    onClick={() => handleDepartmentSelect(course.name)}
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
                    onClick={handleManualClose}
                    style={{ zIndex: 1040 }}
                ></div>
            )}
        </div>
    );
}

export default Medical;