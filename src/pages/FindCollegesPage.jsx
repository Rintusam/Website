import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collegesData } from '../data/collegesData';
import './FindCollegesPage.css';

const amenityIcons = {
    'Library': '📚', 'Hostel': '🏠', 'Cafeteria': '🍽️',
    'Sports Ground': '⚽', 'Sports Facilities': '🏅', 'Sports Complex': '🏟️',
    'Sports Area': '⚽', 'Wi-Fi Campus': '📶', 'Medical Centre': '🏥',
    'Medical Facility': '🏥', 'Labs & Workshops': '🔬', 'Research Labs': '🔬',
    'Research Centre': '🔬', 'Pharmacy Labs': '⚗️', 'Clinical Lab': '🧪',
    'Skill Lab': '🩺', 'Computer Lab': '💻', 'Commerce Lab': '📊',
    'Design Studios': '🎨', 'Model Making Lab': '🏗️', 'Auditorium': '🎭',
    'Seminar Hall': '🎤', 'Exhibition Hall': '🖼️', 'Legal Aid Centre': '⚖️',
    'Moot Court': '⚖️',
};

const FindCollegesPage = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const filtered = search.length >= 1
        ? collegesData.filter(c =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.location.toLowerCase().includes(search.toLowerCase())
        )
        : collegesData;

    // helper: total course count from object or array
    const getCourseCount = (courses) => {
        if (!courses) return 0;
        if (Array.isArray(courses)) return courses.length;
        return Object.values(courses).flat().length;
    };

    return (
        <div className="fc-page">
            {/* ── Hero ── */}
            <div className="fc-hero">
                <div className="fc-hero-bg" />
                <div className="fc-hero-content">
                    <h1 className="fc-hero-title">🏛️ Find Colleges</h1>
                    <p className="fc-hero-sub">Browse all our partner colleges and explore their details</p>
                    <div className="fc-search-bar">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search by college name or location…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="fc-search-input"
                        />
                        {search && (
                            <button className="fc-search-clear" onClick={() => setSearch('')}>✕</button>
                        )}
                    </div>
                    <p className="fc-count">{filtered.length} college{filtered.length !== 1 ? 's' : ''} found</p>
                </div>
            </div>

            {/* ── College Cards Grid ── */}
            <div className="fc-body">
                {filtered.length === 0 ? (
                    <div className="fc-empty">
                        <span>🔍</span>
                        <p>No colleges match your search.</p>
                    </div>
                ) : (
                    <div className="fc-grid">
                        {filtered.map(college => {
                            const totalCourses = getCourseCount(college.courses);
                            const isCategories = college.courses && !Array.isArray(college.courses);
                            const categoryNames = isCategories ? Object.keys(college.courses) : [];

                            return (
                                <div key={college.id} className="fc-card">
                                    <div className="fc-card-header">
                                        <div className="fc-card-icon">🏛️</div>
                                        <div className="fc-card-title-wrap">
                                            <h2 className="fc-card-name">{college.name}</h2>
                                            <div className="fc-card-pills">
                                                <span className="fc-pill fc-pill-loc">
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                                    </svg>
                                                    {college.location}
                                                </span>
                                                <span className="fc-pill fc-pill-type">{college.type || 'Private'}</span>
                                                {college.established && (
                                                    <span className="fc-pill fc-pill-year">Est. {college.established}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fc-card-meta">
                                        <span className="fc-meta-item">🎓 {totalCourses} Programs</span>
                                        <span className="fc-meta-item">🏟️ {college.amenities?.length || 0} Amenities</span>
                                    </div>

                                    <button
                                        className="fc-view-btn"
                                        onClick={() => navigate(`/college-details/${college.id}`)}
                                    >
                                        View Full Details
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FindCollegesPage;
