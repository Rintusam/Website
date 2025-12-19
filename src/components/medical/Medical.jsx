import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Medical.css";

// Data moved outside component for better performance
const COURSES_DATA = {
    "BSC Nursing": [
        {
            name: "BSC Nursing",
            duration: "4 Years",
            eligibility: "10+2 with Physics, Chemistry, Biology (minimum 45-50% marks)",
            careers: ["Staff Nurse", "Nursing Tutor", "Public Health Nurse", "Military Nurse", "Healthcare Administrator"]
        }
    ],
    "General Nursing": [
        {
            name: "General Nursing (GNM)",
            duration: "3 Years",
            eligibility: "10+2 in any stream (Science preferred) with English (minimum 40% marks)",
            careers: ["Staff Nurse", "Home Nurse", "Health Visitor", "Community Health Worker"]
        }
    ],
    "Bachelor of Pharmacy (B.Pharm)": [
        {
            name: "Bachelor of Pharmacy",
            duration: "4 Years",
            eligibility: "10+2 with Physics, Chemistry, and Math/Biology",
            careers: ["Pharmacist", "Drug Inspector", "Quality Control Associate", "Medical Representative", "Clinical Research Associate"]
        }
    ],
    "MBBS (Medicine)": [
        {
            name: "MBBS (Medicine)",
            duration: "5.5 Years",
            eligibility: "10+2 with Physics, Chemistry, Biology + NEET Qualification",
            careers: ["Doctor", "General Physician", "Medical Officer", "Surgeon", "Healthcare Researcher"]
        }
    ],
    "Bachelor of Physiotherapy(BPT)": [
        {
            name: "Bachelors of Physiotherapy",
            duration: "4 Years",
            eligibility: "10+2 with Physics, Chemistry, Biology (minimum 50% marks)",
            careers: ["Physiotherapist", "Sports Physio", "Rehabilitation Specialist", "Osteopath", "Therapy Manager"]
        }
    ],
    "B.Sc Cardiovascular Technology": [
        {
            name: "B.Sc Cardiovascular Technology",
            duration: "3 Years",
            eligibility: "10+2 with Physics, Chemistry, Biology",
            careers: ["Cardiovascular Technologist", "Echo Cardiographer", "Cath Lab Technician", "Medical Sonographer"]
        }
    ],
    "B.Sc Radiology & Imaging Technology": [
        {
            name: "B.Sc Radiology & Imaging Technology",
            duration: "3 Years",
            eligibility: "10+2 with Physics, Chemistry, Biology/Math",
            careers: ["Radiology Technician", "MRI Technician", "CT Scan Technologist", "X-Ray Technician"]
        }
    ],
    "Engineering(B.Tech)": [
        {
            name: "Computer Science Engineering",
            duration: "4 Years",
            eligibility: "10+2 with Physics, Chemistry, Mathematics",
            careers: ["Software Developer", "Web Developer", "Data Analyst", "System Engineer", "Network Administrator"]
        },
        {
            name: "Mechanical Engineering",
            duration: "4 Years",
            eligibility: "10+2 with Physics, Chemistry, Mathematics",
            careers: ["Mechanical Engineer", "Automotive Engineer", "Design Engineer", "Maintenance Engineer", "Production Manager"]
        },
        {
            name: "Electronics & Communication",
            duration: "4 Years",
            eligibility: "10+2 with Physics, Chemistry, Mathematics",
            careers: ["Electronics Engineer", "Network Planning Engineer", "Communication Engineer", "Telecom Specialist"]
        },
        {
            name: "Civil Engineering",
            duration: "4 Years",
            eligibility: "10+2 with Physics, Chemistry, Mathematics",
            careers: ["Civil Engineer", "Structural Engineer", "Site Manager", "Construction Project Manager", "Urban Planner"]
        },
        {
            name: "Electrical Engineering",
            duration: "4 Years",
            eligibility: "10+2 with Physics, Chemistry, Mathematics",
            careers: ["Electrical Engineer", "Power System Engineer", "Control Systems Engineer", "Grid Manager"]
        }
    ],
    "Bachelor Degree(B.Sc)": [
        {
            name: "B.Sc Computer Science",
            duration: "3 Years",
            eligibility: "10+2 with Computer Science or Mathematics",
            careers: ["Programmer", "IT Support Specialist", "System Analyst", "Web Designer"]
        },
        {
            name: "B.Sc Biotechnology",
            duration: "3 Years",
            eligibility: "10+2 with Physics, Chemistry, Biology",
            careers: ["Biotechnologist", "Lab Technician", "Research Associate", "Quality Control Analyst"]
        },
        {
            name: "B.Sc Forensic Science",
            duration: "3 Years",
            eligibility: "10+2 with Physics, Chemistry, Biology/Math",
            careers: ["Forensic Scientist", "Crime Scene Investigator", "Forensic Pathologist", "Legal Counselor"]
        },
        {
            name: "B.Sc Costume Design and Fashion",
            duration: "3 Years",
            eligibility: "10+2 in any stream",
            careers: ["Fashion Designer", "Costume Stylist", "Fashion Illustrator", "Textile Designer", "Visual Merchandiser"]
        },
        {
            name: "B.Sc Digital and Cyber Forensic Science",
            duration: "3 Years",
            eligibility: "10+2 with Science stream",
            careers: ["Cyber Forensic Analyst", "Information Security Analyst", "Incident Responder", "Cyber Crime Investigator"]
        },
        {
            name: "B.Sc Artificial Intelligence & Machine Learning",
            duration: "3 Years",
            eligibility: "10+2 with Mathematics/Computer Science",
            careers: ["AI Engineer", "Machine Learning Engineer", "Data Scientist", "Robotics Specialist"]
        }
    ],
    "B-Arch": [
        {
            name: "Architectural Design",
            duration: "5 Years",
            eligibility: "10+2 with PCM + NATA/JEE Main Paper 2 qualification",
            careers: ["Architect", "Interior Designer", "Urban Designer", "Project Architect"]
        },
        {
            name: "Urban Planning",
            duration: "2 Years",
            eligibility: "Bachelor's Degree in Architecture or Planning (B.Arch/B.Plan)",
            careers: ["Urban Planner", "Regional Planner", "Transport Planner", "Housing Officer"]
        },
        {
            name: "Interior Architecture",
            duration: "3 Years",
            eligibility: "10+2 in any stream (Subject to institute)",
            careers: ["Interior Designer", "Space Planner", "Exhibition Designer", "Furniture Designer"]
        },
        {
            name: "Landscape Architecture",
            duration: "2 Years",
            eligibility: "Bachelor's Degree in Architecture or Allied Fields",
            careers: ["Landscape Architect", "Environmental Consultant", "Site Planner"]
        }
    ],
    "Hotel Management": [
        {
            name: "Bachelor of Hotel Management(BHM)",
            duration: "3 Years",
            eligibility: "10+2 in any stream",
            careers: ["Hotel Manager", "Front Office Manager", "Housekeeping Manager", "Guest Relations Executive"]
        },
        {
            name: "B.sc Hospitality and Hotel",
            duration: "3 Years",
            eligibility: "10+2 in any stream",
            careers: ["Hospitality Executive", "Catering Manager", "Event Manager", "Cabin Crew"]
        },
        {
            name: "Bachelor in Hotel Management and Catering Technology(BHMCT)",
            duration: "4 Years",
            eligibility: "10+2 in any stream",
            careers: ["Executive Chef", "F&B Manager", "Hotel Operations Manager", "Restaurant Manager"]
        }
    ],
    "BBA": [
        {
            name: "Marketing Management",
            duration: "3 Years",
            eligibility: "10+2 in any stream",
            careers: ["Marketing Executive", "Sales Manager", "Brand Manager", "Market Research Analyst"]
        },
        {
            name: "Financial Management",
            duration: "3 Years",
            eligibility: "10+2 in any stream (Maths/Commerce preferred)",
            careers: ["Financial Analyst", "Accountant", "Investment Banker", "Tax Consultant"]
        },
        {
            name: "Human Resource Management",
            duration: "3 Years",
            eligibility: "10+2 in any stream",
            careers: ["HR Executive", "Recruiter", "Employee Relations Specialist", "Payroll Specialist"]
        },
        {
            name: "Operations Management",
            duration: "3 Years",
            eligibility: "10+2 in any stream",
            careers: ["Operations Executive", "Logistics Coordinator", "Supply Chain Analyst", "Production Supervisor"]
        },
        {
            name: "International Business",
            duration: "3 Years",
            eligibility: "10+2 in any stream",
            careers: ["Export/Import Manager", "International Trade Specialist", "Business Development Executive"]
        }
    ],
    "MBA": [
        {
            name: "MBA in Marketing Management",
            duration: "2 Years",
            eligibility: "Bachelor's Degree in any discipline + Entrance Exam (CAT/MAT/CMAT)",
            careers: ["Marketing Director", "Brand Manager", "Product Manager", "Digital Marketing Manager"]
        },
        {
            name: "MBA in Finance",
            duration: "2 Years",
            eligibility: "Bachelor's Degree in any discipline + Entrance Exam",
            careers: ["Finance Manager", "Investment Banker", "Portfolio Manager", "Risk Analyst"]
        },
        {
            name: "MBA in Human Resource Management",
            duration: "2 Years",
            eligibility: "Bachelor's Degree in any discipline + Entrance Exam",
            careers: ["HR Manager", "Talent Acquisition Manager", "Training & Development Manager"]
        },
        {
            name: "MBA in Operations Management",
            duration: "2 Years",
            eligibility: "Bachelor's Degree in any discipline + Entrance Exam",
            careers: ["Operations Manager", "Supply Chain Manager", "Logistics Manager", "Plant Manager"]
        },
        {
            name: "MBA in International Business",
            duration: "2 Years",
            eligibility: "Bachelor's Degree in any discipline + Entrance Exam",
            careers: ["International Business Manager", "Global Trade Analyst", "Export Manager"]
        },
        {
            name: "MBA in Business Analytics",
            duration: "2 Years",
            eligibility: "Bachelor's Degree in any discipline (Math/Stats background preferred) + Entrance Exam",
            careers: ["Business Analyst", "Data Analyst", "Data Scientist", "BI Consultant"]
        },
        {
            name: "MBA in Logistics & Supply Chain Management",
            duration: "2 Years",
            eligibility: "Bachelor's Degree in any discipline + Entrance Exam",
            careers: ["Supply Chain Manager", "Logistics Director", "Procurement Manager", "Inventory Manager"]
        },
        {
            name: "MBA in Information Technology",
            duration: "2 Years",
            eligibility: "Bachelor's Degree (IT/CS preferred) + Entrance Exam",
            careers: ["IT Manager", "CIO", "IT Project Manager", "Systems Manager"]
        }
    ]
};

function Medical({ items, title, description }) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const navigate = useNavigate();

    // Retrieve courses based on the item title
    const getCourses = (itemTitle) => {
        return COURSES_DATA[itemTitle] || [
            {
                name: "Standard Course",
                duration: "3 Years",
                eligibility: "10+2 Passed",
                careers: ["Entry Level Analyst", "Support Specialist"]
            }
        ];
    };

    const handleCardClick = (item) => {
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
                        <div className="row g-4">
                            {selectedItem && getCourses(selectedItem.title).map((course, idx) => (
                                <div className="col-12 col-md-6 col-lg-4" key={idx}>
                                    {/* New Modern Card Design */}
                                    <div className="course-modern-card">
                                        <div className="course-card-top">
                                            <h3 className="course-name">{course.name}</h3>
                                            <span className="duration-pill">{course.duration}</span>
                                        </div>

                                        <div className="course-card-content">
                                            <div className="info-block">
                                                <span className="info-label">Eligibility</span>
                                                <p className="info-value">{course.eligibility}</p>
                                            </div>

                                            <div className="info-block">
                                                <span className="info-label">Career Opportunities</span>
                                                <div className="career-tags">
                                                    {course.careers && course.careers.map((career, cIdx) => (
                                                        <span key={cIdx} className="career-tag">
                                                            {career}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <button
                                                className="enroll-btn-modern"
                                                onClick={() => navigate('/college', { state: { course: course.name, fromCategoryPage: true } })}
                                            >
                                                Check Availability <span className="arrow">→</span>
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