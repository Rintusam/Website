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
        <div className="filter-container">
          <span className="filter-label">Filter by City:</span>
          {['All', 'Kerala', 'Coimbatore', 'Bangalore'].map(city => (
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

      {/* College List */}
      <div className="colleges-list-container">
        {filteredColleges.length > 0 ? (
          <ul className="colleges-list">
            {filteredColleges.map((college) => {
              const isSelected = selectedColleges.some(c => c.id === college.id);
              return (
                <li
                  key={college.id}
                  className={`college-list-item ${isSelected ? 'college-list-item--selected' : ''}`}
                  onClick={() => toggleSelection(college)}
                >
                  <input
                    type="checkbox"
                    className="college-checkbox"
                    checked={isSelected}
                    onChange={() => toggleSelection(college)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div className="college-list-info">
                    <span className="college-list-name">{college.name}</span>
                    <span className="college-list-location">{college.location}</span>
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
