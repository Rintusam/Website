import React, { useState } from 'react';
import './college.css';
import { Link, useLocation } from 'react-router-dom';

const collegesData = [
  { id: 1, name: "XYZ College", location: "Bangalore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Computer Science Engineering"] },
  { id: 2, name: "XBC College", location: "Coimbatore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Computer Science Engineering"] },
  { id: 3, name: "Tech Hub College", location: "Bangalore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Computer Science Engineering"] },
  { id: 4, name: "BRS College", location: "Bangalore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Mechanical Engineering"] },
  { id: 5, name: "XRA College", location: "Bangalore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Electronics & Communication"] },
  { id: 6, name: "BHA College", location: "Bangalore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Civil Engineering"] },
  { id: 7, name: "ABC College", location: "Bangalore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Marketing Management"] },
  { id: 8, name: "XYZ Institute", location: "Bangalore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Financial Management"] },
  { id: 9, name: "Premier College", location: "Bangalore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Bachelor of Pharmacy"] },
  { id: 10, name: "Health Institute", location: "Bangalore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["MBBS (Medicine)"] },
  { id: 11, name: "Coimbatore Institute", location: "Coimbatore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Human Resource Management"] },
  { id: 12, name: "Kochi Tech", location: "Kochi", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Mechanical Engineering"] },
  { id: 13, name: "Kochi Business School", location: "Kochi", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Operations Management"] },
  { id: 14, name: "Hospitality Grand", location: "Bangalore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Bachelor of Hotel Management(BHM)"] },
  { id: 15, name: "Hotel Management Academy", location: "Bangalore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Bachelor of Hotel Management(BHM)"] },
  { id: 16, name: "Culinary Institute", location: "Bangalore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["B.sc Hospitality and Hotel"] },
  { id: 17, name: "Professional Hotel School", location: "Coimbatore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Bachelor in Hotel Management and Catering Technology(BHMCT)"] },
  { id: 18, name: "Hospitality Plus", location: "Coimbatore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Bachelor of Hotel Management(BHM)"] },
  { id: 19, name: "Kochi Hotel Institute", location: "Kochi", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["B.sc Hospitality and Hotel"] },
  { id: 20, name: "BSC Nursing Academy", location: "Bangalore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["BSC Nursing"] },
  { id: 21, name: "Nursing Care Institute", location: "Bangalore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["General Nursing"] },
  { id: 22, name: "Physiotherapy Center", location: "Bangalore", rating: "4.5/5", fees: "₹1,00,000/yr", imgUrl: "bba.jpg", tags: ["Best Value", "Top Rated"], courses: ["Bachelors of Physiotherapy"] }
];

const Colleges = ({ selectedCourse: propCourse }) => {
  const [filter, setFilter] = useState('All');
  const location = useLocation();
  const selectedCourse = propCourse || location.state?.course || null;

  const filteredColleges = collegesData.filter(college => {
    const matchesCity = filter === 'All' || college.location === filter;
    const matchesCourse = selectedCourse ? college.courses?.includes(selectedCourse) : true;
    return matchesCity && matchesCourse;
  });

  return (
    <div className="college-page">
      <div className="college-header">
        <div className="header-content">
          <div className="breadcrumb">Home &gt; Colleges &gt; {selectedCourse || "All Courses"}</div>
          <h1>{selectedCourse || "Top Colleges"}</h1>
          <p>Explore the best campuses offering world-class {selectedCourse || "education"} programs.</p>
        </div>
      </div>

      <div className="filter-wrapper">
        <div className="filter-container">
          <span className="filter-label">Filter by City:</span>
          {['All', 'Kochi', 'Coimbatore', 'Bangalore'].map(city => (
            <button key={city} className={`filter-btn ${filter === city ? 'active' : ''}`} onClick={() => setFilter(city)}>
              {city}
            </button>
          ))}
        </div>
      </div>

      <div className="colleges-grid-container">
        {filteredColleges.length > 0 ? (
          <div className="colleges-grid">
            {filteredColleges.map((college) => (
              <div key={college.id} className="college-card">
                <div className="card-image-container">
                  <img src={college.imgUrl} alt={college.name} />
                  <span className="location-badge">{college.location}</span>
                </div>
                <div className="card-details">
                  <div className="tags">
                    {college.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
                  </div>
                  <h3>{college.name}</h3>
                  <div className="rating-row">
                    <span className="stars">★★★★★</span>
                    <span className="rating-score">{college.rating}</span>
                  </div>
                  <div className="fees-row">{college.fees}</div>
                  <Link to="/collect_form" className="view-details-btn">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No colleges found in this location. 😢</h3>
          </div>
        )}
      </div>
    </div>
  );
};


export default Colleges;
