import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner-section position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner-content text-white py-5">
              <h1 className="display-3 fw-bold mb-3">
                Unlock Your Potential <br className="d-none d-md-block" />
                Your Future Awaits
              </h1>

              <h3 className="fs-5 mb-4 opacity-75">
                Choose the right path and build a career that truly matches your goals.
              </h3>

              <div className="row g-3 mt-5 justify-content-center justify-content-md-start">
                <div className="col-12 col-sm-6 col-md-5 col-lg-4">
                  <Link to="/medical" className="box-btn medical-box text-decoration-none d-flex flex-column align-items-center justify-content-center p-4 rounded-3">
                    <span className="icon fs-1 mb-2">🩺</span>
                    <span className="fs-5 fw-semibold">Medical Studies</span>
                  </Link>
                </div>

                <div className="col-12 col-sm-6 col-md-5 col-lg-4">
                  <Link to="/non-medical" className="box-btn nonmedical-box text-decoration-none d-flex flex-column align-items-center justify-content-center p-4 rounded-3">
                    <span className="icon fs-1 mb-2">⚙️</span>
                    <span className="fs-5 fw-semibold">Non-Medical Fields</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fade-bottom position-absolute bottom-0 w-100"></div>
    </div>
  );
}

export default Banner;