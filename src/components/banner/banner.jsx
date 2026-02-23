import React, { useState } from "react";
import "./Banner.css";
import ProgramSelectionModal from "../program_selection_modal/ProgramSelectionModal";
import CourseSearch from "../course_search/CourseSearch";
import { FaFlask, FaChartLine, FaPalette, FaArrowRight, FaUniversity, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedField, setSelectedField] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (fieldType) => {
    setSelectedField(fieldType);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedField(null);
  };

  return (
    <div className="banner-section">
      {/* Dark overlay to make text readable regardless of background image */}
      <div className="banner-overlay"></div>

      {/* Course Search + Find Colleges — top-right corner of banner */}
      <div className="banner-search-corner">
        <CourseSearch />
        <button
          className="banner-find-colleges-btn"
          onClick={() => navigate('/college')}
        >
          <FaUniversity />
          Find Colleges
          <FaChevronDown className="banner-find-colleges-arrow" />
        </button>
      </div>

      <div className="container position-relative z-2">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">

            {/* Main Headlines */}
            <div className="banner-header animate-up">
              <h1 className="main-title mb-3">
                Unlock Your <span className="highlight-text">Potential</span>
                <br />
                Your Future Awaits
              </h1>
              <p className="sub-title mb-5">
                Choose the right path and build a career that truly matches your goals.
                <br className="d-none d-md-block" /> We make the admission process simple and secure.
              </p>
            </div>

            {/* Stream Choice Cards */}
            <div className="row g-4 justify-content-center">

              {/* Science */}
              <div className="col-md-4">
                <div
                  className="choice-card science-card"
                  onClick={() => handleCardClick('science')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-content">
                    <div className="icon-circle">
                      <FaFlask />
                    </div>
                    <h3>Science</h3>
                    <p>Engineering, Nursing, Pharmacy & more</p>
                    <span className="cta-link">Explore <FaArrowRight className="ms-1" /></span>
                  </div>
                </div>
              </div>

              {/* Commerce */}
              <div className="col-md-4">
                <div
                  className="choice-card commerce-card"
                  onClick={() => handleCardClick('commerce')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-content">
                    <div className="icon-circle">
                      <FaChartLine />
                    </div>
                    <h3>Commerce</h3>
                    <p>B.Com, BBA, BCA, MBA & more</p>
                    <span className="cta-link">Explore <FaArrowRight className="ms-1" /></span>
                  </div>
                </div>
              </div>

              {/* Arts */}
              <div className="col-md-4">
                <div
                  className="choice-card arts-card"
                  onClick={() => handleCardClick('arts')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-content">
                    <div className="icon-circle">
                      <FaPalette />
                    </div>
                    <h3>Arts</h3>
                    <p>Law, Humanities, Literature & more</p>
                    <span className="cta-link">Explore <FaArrowRight className="ms-1" /></span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Program Selection Modal */}
      <ProgramSelectionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        fieldType={selectedField}
      />
    </div>
  );
}

export default Banner;