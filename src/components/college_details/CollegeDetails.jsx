import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { collegesData } from '../../data/collegesData';
import './CollegeDetails.css';

const CollegeDetails = () => {
    const { id } = useParams();
    const college = collegesData.find(c => c.id === parseInt(id));

    if (!college) {
        return <div className="college-not-found">College not found!</div>;
    }

    return (
        <div className="college-details-container">
            <div className="details-header">
                <Link to="/college" className="back-btn">← Back to Colleges</Link>
            </div>

            <div className="details-content">
                <div className="details-image-section">
                    <img src={`/${college.imgUrl}`} alt={college.name} className="college-hero-img" onError={(e) => e.target.src = '/bba.jpg'} />
                    <div className="college-overlay">
                        <h1>{college.name}</h1>
                        <p className="college-location">{college.location}</p>
                        <div className="college-badges">
                            {college.tags?.map((tag, i) => <span key={i} className="badge">{tag}</span>)}
                            <span className="rating-badge">★ {college.rating}</span>
                        </div>
                    </div>
                </div>

                <div className="details-main-info">
                    <div className="info-card">
                        <h2>About College</h2>
                        <p className="description">
                            {college.name} is a premier institution located in {college.location}.
                            Renowned for its academic excellence and state-of-the-art infrastructure,
                            it offers a vibrant campus life and distinct opportunities for student growth.
                            With top-tier faculty and industry connections, students are prepared for global challenges.
                        </p>
                    </div>

                    <div className="info-card">
                        <h2>Courses Offered</h2>
                        <ul className="courses-list">
                            {college.courses?.map((course, index) => (
                                <li key={index} className="course-item">
                                    <span className="course-icon">🎓</span> {course}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="info-card">
                        <h2>Key Highlights</h2>
                        <div className="highlights-grid">
                            <div className="highlight-item">
                                <span className="label">Annual Fees</span>
                                <span className="value">{college.fees}</span>
                            </div>
                            <div className="highlight-item">
                                <span className="label">Placement</span>
                                <span className="value">95% Success Rate</span>
                            </div>
                            <div className="highlight-item">
                                <span className="label">Campus Size</span>
                                <span className="value">50 Acres</span>
                            </div>
                            <div className="highlight-item">
                                <span className="label">Established</span>
                                <span className="value">1995</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Demo Writings Section */}
                <div className="info-card demo-writings">
                    <h2>Student Reviews & Demo Writings</h2>
                    <div className="review">
                        <p>"An amazing place to learn and grow. The campus is beautiful and the labs are well-equipped."</p>
                        <span className="author">- Student Name</span>
                    </div>
                    <div className="review">
                        <p>"Great faculty and supportive environment. Really enjoyed my time here."</p>
                        <span className="author">- Alumni</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;
