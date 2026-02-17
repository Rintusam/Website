import React, { useState } from "react";
import "./Banner.css";
import ProgramSelectionModal from "../program_selection_modal/ProgramSelectionModal";
// Ensure you have react-icons installed: npm install react-icons
import { FaStethoscope, FaCogs, FaArrowRight } from "react-icons/fa";

function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedField, setSelectedField] = useState(null);

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

            {/* The Choice Cards */}
            <div className="row g-4 justify-content-center">

              {/* Medical Option */}
              <div className="col-md-6">
                <div
                  className="choice-card medical-card"
                  onClick={() => handleCardClick('medical')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-content">
                    <div className="icon-circle">
                      <FaStethoscope />
                    </div>
                    <h3>Medical Fields</h3>
                    <p>MBBS, BDS, Nursing & more</p>
                    <span className="cta-link">Explore <FaArrowRight className="ms-1" /></span>
                  </div>
                </div>
              </div>

              {/* Non-Medical Option */}
              <div className="col-md-6">
                <div
                  className="choice-card non-medical-card"
                  onClick={() => handleCardClick('non-medical')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-content">
                    <div className="icon-circle">
                      <FaCogs />
                    </div>
                    <h3>Non-Medical Fields</h3>
                    <p>Engineering, Management, Arts</p>
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