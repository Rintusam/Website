import React, { useState, useEffect } from 'react';
import './college.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { collegesData } from '../../data/collegesData';


const Colleges = ({ selectedCourse: propCourse }) => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCourse = propCourse || location.state?.course || null;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [noPreference, setNoPreference] = useState(false);

  // Initialize modal ONLY if navigating from a category page
  const [showPreferenceModal, setShowPreferenceModal] = useState(() => {
    return !!location.state?.fromCategoryPage;
  });

  // Consume the flag immediately so it doesn't persist on back navigation
  useEffect(() => {
    if (location.state?.fromCategoryPage) {
      navigate('.', {
        replace: true,
        state: { ...location.state, fromCategoryPage: false }
      });
    }
  }, [location.state, navigate]);

  const filteredColleges = collegesData.filter(college => {
    const matchesCity = filter === 'All' ||
      (filter === 'Kerala' ? (college.location !== 'Coimbatore' && college.location !== 'Bangalore') : college.location === filter);
    const matchesCourse = selectedCourse ? college.courses?.includes(selectedCourse) : true;
    const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesCourse && matchesSearch;
  });

  const toggleSelection = (college) => {
    setSelectedColleges((prev) => {
      setNoPreference(false);
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
      setSelectedColleges([]);
    }
  };

  const handleModalProceed = () => {
    setNoPreference(true);
    setSelectedColleges([]);
    navigate('/collect_form', { state: { selectedColleges: [], noPreference: true, selectedCourse } });
  };

  const handleCloseModal = () => {
    setShowPreferenceModal(false);
  };

  const handleProceed = () => {
    navigate('/collect_form', { state: { selectedColleges, noPreference, selectedCourse } });
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
        <div className="filter-bar">
          {/* Left: pin icon + label + city buttons */}
          <div className="filter-bar-left">
            <span className="filter-pin-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <span className="filter-label">Filter by</span>
            {['All', 'Kerala', 'Coimbatore', 'Bangalore'].map((city, idx) => (
              <React.Fragment key={city}>
                {idx > 0 && <span className="filter-divider" />}
                <button
                  className={`filter-btn ${filter === city ? 'active' : ''}`}
                  onClick={() => setFilter(city)}
                >
                  {city}
                </button>
              </React.Fragment>
            ))}
          </div>

          {/* Right: search box */}
          <div className="filter-search-box">
            <svg className="search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search colleges..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="filter-search-input"
            />
          </div>
        </div>
      </div>

      {/* College List */}
      <div className="colleges-list-container">
        {filteredColleges.length > 0 ? (
          <ul className="colleges-list">
            {filteredColleges.map((college) => {
              const isSelected = selectedColleges.some(c => c.id === college.id);
              return (
                <li
                  key={college.id}
                  className={`college-card ${isSelected ? 'college-card--selected' : ''}`}
                  onClick={() => toggleSelection(college)}
                >
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    className="college-checkbox"
                    checked={isSelected}
                    onChange={() => toggleSelection(college)}
                    onClick={(e) => e.stopPropagation()}
                  />

                  {/* Building illustration */}
                  <div className="college-card-image">
                    <img src="/college_building.png" alt="college building" />
                  </div>

                  {/* Info */}
                  <div className="college-card-info">
                    <span className="college-card-name">{college.name.toUpperCase()}</span>
                    <span className="college-card-badge">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {college.location}
                    </span>
                  </div>

                  {/* Shield icon */}
                  <div className={`college-card-shield ${isSelected ? 'shield--selected' : ''}`}>
                    <svg width="32" height="36" viewBox="0 0 32 36" fill="none">
                      <path d="M16 2L3 7v10c0 8.6 5.5 16.6 13 19 7.5-2.4 13-10.4 13-19V7L16 2z"
                        fill={isSelected ? '#e8a000' : '#f0c040'}
                        stroke={isSelected ? '#c47800' : '#d4a000'}
                        strokeWidth="1.5"
                      />
                      {isSelected && (
                        <path d="M10 18l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      )}
                      {!isSelected && (
                        <path d="M10 18l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                      )}
                    </svg>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="no-results">
            <h3>No colleges found. 😢</h3>
          </div>
        )}

        {/* No Preference */}
        <div className="no-preference-container">
          <label className={`no-preference-card ${noPreference ? 'active' : ''}`}>
            <input
              type="checkbox"
              checked={noPreference}
              onChange={handleNoPreference}
            />
            <span>No College Preference</span>
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
              <button className="modal-close-btn" onClick={handleCloseModal}>
                I'll Choose a College
              </button>
              <button className="modal-no-pref-btn" onClick={handleModalProceed}>
                I have No Preference
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Colleges;
