import React, { useState } from 'react';
import './college.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { collegesData } from '../../data/collegesData';


const Colleges = ({ selectedCourse: propCourse }) => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [noPreference, setNoPreference] = useState(false);
  const [showPreferenceModal, setShowPreferenceModal] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCourse = propCourse || location.state?.course || null;

  const filteredColleges = collegesData.filter(college => {
    const matchesCity = filter === 'All' || college.location === filter;
    const matchesCourse = selectedCourse ? college.courses?.includes(selectedCourse) : true;
    const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesCourse && matchesSearch;
  });

  const toggleSelection = (college) => {
    setSelectedColleges((prev) => {
      setNoPreference(false); // Uncheck "No Preference" if a college is selected
      const isSelected = prev.some((c) => c.id === college.id);
      if (isSelected) {
        return prev.filter((c) => c.id !== college.id);
      } else {
        return [...prev, college];
      }
    });
  };

  const handleNoPreference = () => {
    setNoPreference(!noPreference);
    if (!noPreference) {
      setSelectedColleges([]); // Clear specific selections if No Preference is chosen
    }
  };

  const handleModalProceed = () => {
    setNoPreference(true);
    setSelectedColleges([]);
    navigate('/collect_form', { state: { selectedColleges: [], noPreference: true } });
  };

  const handleCloseModal = () => {
    setShowPreferenceModal(false);
  };

  const handleProceed = () => {
    navigate('/collect_form', { state: { selectedColleges, noPreference } });
  };

  return (
    <div className="college-page">
      <div className="college-header">
        <div className="header-content">
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

        <div className="search-container">
          <input
            type="text"
            placeholder="Search colleges..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
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

                  <h3>{college.name}</h3>

                  <div className="card-actions">
                    <Link to={`/college-details/${college.id}`} className="view-details-btn">View Details</Link>
                    <button
                      className={`select-btn ${selectedColleges.some(c => c.id === college.id) ? 'selected' : ''}`}
                      onClick={() => toggleSelection(college)}
                    >
                      {selectedColleges.some(c => c.id === college.id) ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No colleges found in this location. 😢</h3>
          </div>
        )}

        <div className="no-preference-container">
          <label className={`no-preference-label ${noPreference ? 'active' : ''}`}>
            <input
              type="checkbox"
              checked={noPreference}
              onChange={handleNoPreference}
            />
            No College Preference
          </label>
        </div>
      </div>

      {(selectedColleges.length > 0 || noPreference) && (
        <div className="proceed-container">
          <div className="proceed-info">
            <span>
              {noPreference
                ? "No Preference Selected"
                : `${selectedColleges.length} College${selectedColleges.length !== 1 ? 's' : ''} Selected`}
            </span>
          </div>
          <button className="proceed-btn" onClick={handleProceed}>
            Proceed
          </button>
        </div>
      )}

      {showPreferenceModal && (
        <div className="preference-modal-overlay">
          <div className="preference-modal-content">
            <h2>Looking for Colleges?</h2>
            <p>If you don't have a specific preference, we can help you find the best options.</p>
            <div className="modal-actions">
              <button className="modal-no-pref-btn" onClick={handleModalProceed}>
                I have No Preference
              </button>
              <button className="modal-close-btn" onClick={handleCloseModal}>
                I'll Choose a College
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Colleges;
