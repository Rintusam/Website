import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { collegesData } from '../../data/collegesData';
import './CollegeDetails.css';

const amenityIcons = {
    'Library': '📚',
    'Hostel': '🏠',
    'Cafeteria': '🍽️',
    'Sports Ground': '⚽',
    'Sports Facilities': '🏅',
    'Sports Complex': '🏟️',
    'Sports Area': '⚽',
    'Wi-Fi Campus': '📶',
    'Medical Centre': '🏥',
    'Medical Facility': '🏥',
    'Labs & Workshops': '🔬',
    'Research Labs': '🔬',
    'Research Centre': '🔬',
    'Pharmacy Labs': '⚗️',
    'Clinical Lab': '🧪',
    'Skill Lab': '🩺',
    'Computer Lab': '💻',
    'Commerce Lab': '📊',
    'Design Studios': '🎨',
    'Model Making Lab': '🏗️',
    'Auditorium': '🎭',
    'Seminar Hall': '🎤',
    'Exhibition Hall': '🖼️',
    'Legal Aid Centre': '⚖️',
    'Moot Court': '⚖️',
};

const CollegeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const college = collegesData.find(c => c.id === parseInt(id));

    if (!college) {
        return (
            <div className="cd-not-found">
                <div className="cd-not-found-content">
                    <span>🏫</span>
                    <h2>College Not Found</h2>
                    <Link to="/college" className="cd-back-link">← Back to Colleges</Link>
                </div>
            </div>
        );
    }

    const handleCourseClick = (course) => {
        navigate('/collect_form', {
            state: {
                collegeName: college.name,
                course: course,
                collegeId: college.id,
                collegeLocation: college.location
            }
        });
    };

    // Support both old flat array and new categorised object
    const isCategories = college.courses && !Array.isArray(college.courses);
    const totalCourseCount = isCategories
        ? Object.values(college.courses).reduce((sum, list) => sum + list.length, 0)
        : college.courses?.length || 0;

    return (
        <div className="cd-page">
            {/* ── Hero Banner ── */}
            <div className="cd-hero">
                <div className="cd-hero-bg" />
                <div className="cd-hero-content">
                    <Link to="/college" className="cd-back-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                        Back to Colleges
                    </Link>
                    <div className="cd-hero-icon">🏛️</div>
                    <h1 className="cd-college-name">{college.name}</h1>
                    <div className="cd-hero-pills">
                        <span className="cd-pill cd-pill-location">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                            </svg>
                            {college.location}
                        </span>
                        <span className="cd-pill cd-pill-type">
                            🏫 {college.type || 'Private'} College
                        </span>
                        {college.established && (
                            <span className="cd-pill cd-pill-year">
                                📅 Est. {college.established}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Main Body ── */}
            <div className="cd-body">

                {/* ── Info Cards Row ── */}
                <div className="cd-info-grid">
                    {/* Established */}
                    <div className="cd-info-card">
                        <div className="cd-info-icon">📅</div>
                        <div>
                            <div className="cd-info-label">Established</div>
                            <div className="cd-info-value">{college.established || 'N/A'}</div>
                        </div>
                    </div>

                    {/* Type */}
                    <div className="cd-info-card">
                        <div className="cd-info-icon">🏫</div>
                        <div>
                            <div className="cd-info-label">College Type</div>
                            <div className="cd-info-value">{college.type || 'Private'}</div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="cd-info-card">
                        <div className="cd-info-icon">📍</div>
                        <div>
                            <div className="cd-info-label">Location</div>
                            <div className="cd-info-value">{college.location}</div>
                        </div>
                    </div>

                    {/* Courses Count */}
                    <div className="cd-info-card">
                        <div className="cd-info-icon">🎓</div>
                        <div>
                            <div className="cd-info-label">Courses Offered</div>
                            <div className="cd-info-value">{totalCourseCount} Programs</div>
                        </div>
                    </div>
                </div>

                {/* ── Two-column section ── */}
                <div className="cd-section-grid">
                    {/* Affiliation */}
                    <div className="cd-section-card">
                        <div className="cd-section-header">
                            <span className="cd-section-icon">🎗️</span>
                            <h2>Affiliation</h2>
                        </div>
                        <p className="cd-section-text">{college.affiliation || 'N/A'}</p>
                    </div>

                    {/* Approved By */}
                    <div className="cd-section-card">
                        <div className="cd-section-header">
                            <span className="cd-section-icon">✅</span>
                            <h2>Approved By</h2>
                        </div>
                        <p className="cd-section-text">{college.approvedBy || 'N/A'}</p>
                    </div>
                </div>

                {/* ── Courses Offered ── */}
                <div className="cd-full-card">
                    <div className="cd-section-header">
                        <span className="cd-section-icon">🎓</span>
                        <h2>Courses Offered</h2>
                        <span className="cd-course-count">{totalCourseCount} Programs</span>
                    </div>
                    <p className="cd-courses-hint">Click any course to enquire and apply directly</p>

                    {isCategories ? (
                        /* ── Categorised layout ── */
                        <div className="cd-category-list">
                            {Object.entries(college.courses).map(([category, courseList]) => (
                                <div key={category} className="cd-category-block">
                                    <div className="cd-category-header">
                                        <span className="cd-category-icon">📚</span>
                                        <h3 className="cd-category-title">{category}</h3>
                                        <span className="cd-category-badge">{courseList.length}</span>
                                    </div>
                                    <div className="cd-courses-grid">
                                        {courseList.map((course, idx) => (
                                            <button
                                                key={idx}
                                                className="cd-course-chip"
                                                onClick={() => handleCourseClick(course)}
                                            >
                                                <span className="cd-course-chip-icon">🎓</span>
                                                <span>{course}</span>
                                                <svg className="cd-course-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="9 18 15 12 9 6" />
                                                </svg>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* ── Flat (legacy) layout ── */
                        <div className="cd-courses-grid">
                            {college.courses?.map((course, index) => (
                                <button
                                    key={index}
                                    className="cd-course-chip"
                                    onClick={() => handleCourseClick(course)}
                                >
                                    <span className="cd-course-chip-icon">🎓</span>
                                    <span>{course}</span>
                                    <svg className="cd-course-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* ── Amenities ── */}
                {college.amenities && college.amenities.length > 0 && (
                    <div className="cd-full-card">
                        <div className="cd-section-header">
                            <span className="cd-section-icon">🏟️</span>
                            <h2>Amenities</h2>
                        </div>
                        <div className="cd-amenities-grid">
                            {college.amenities.map((amenity, index) => (
                                <div key={index} className="cd-amenity-card">
                                    <span className="cd-amenity-icon">
                                        {amenityIcons[amenity] || '✨'}
                                    </span>
                                    <span className="cd-amenity-name">{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CollegeDetails;
