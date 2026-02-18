import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Medical.css";

// Simplified course data - only department names are needed for the new design
const COURSES_DATA = {

    //--- Medical Undergraduate Courses --- 

    "BSC Nursing": [
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

    "Architecture": [
        { name: "B.Arch (Bachelor of Architecture)" },
        { name: "D.Arch (Diploma in Architecture)" },
        { name: "B.Des (Interior Design)" },
    ],

    "Bachelor Degree(B.Sc)": [
        { name: "B.Sc Artificial Intelligence and Machine Learning" },
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
    "B.B.A": [
        { name: "Aviation with IATA" },
        { name: "BBA Honours" },
        { name: "CA with Digital Marketing & Data Analytics" },
        { name: "IB with Commodity Trading & Data Analytics" },
        { name: "Logistics & Supply Chain Management" }
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

    "M.B.A": [
        { name: "Finance" },
        { name: "Health Care Management" },
        { name: "Human Resources Management" },
        { name: "Logistics & Supply Chain Management" },
        { name: "Marketing Operations" },
        { name: "Systems Management" },
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
        // Push a dummy history entry so device back button closes popup
        window.history.pushState({ offcanvasOpen: true }, '');
    };

    const handleClose = useCallback(() => {
        setShowOffcanvas(false);
        // Small delay to clear data after animation finishes
        setTimeout(() => setSelectedItem(null), 300);
    }, []);

    // Close popup manually (X button, backdrop) — also pops the dummy history entry
    const handleManualClose = useCallback(() => {
        if (showOffcanvas) {
            window.history.back(); // This triggers popstate which calls handleClose
        }
    }, [showOffcanvas]);

    // Listen for device back button to close popup
    useEffect(() => {
        const onPopState = (e) => {
            if (showOffcanvas) {
                handleClose();
            }
        };
        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, [showOffcanvas, handleClose]);

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
                    onClick={handleManualClose}
                    style={{ zIndex: 1040 }}
                ></div>
            )}
        </div>
    );
}

export default Medical;