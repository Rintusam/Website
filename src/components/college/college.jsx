import React, { useState } from "react";
import "./college.css";

function College({ selectedCourse }) {
  const [selectedLocation, setSelectedLocation] = useState("All");

  const colleges = [
    { name: "XYZ College", course: "Computer Science Engineering", duration: "4 Years", location: "Bangalore" },
    { name: "XBC College", course: "Computer Science Engineering", duration: "4 Years", location: "Bangalore" },
    { name: "BRS College", course: "Mechanical Engineering", duration: "4 Years", location: "Bangalore" },
    { name: "XRA College", course: "Electronics & Communication", duration: "4 Years", location: "Bangalore" },
    { name: "BHA College", course: "Civil Engineering", duration: "4 Years", location: "Bangalore" },
    { name: "ABC College", course: "Marketing Management", duration: "2 Years", location: "Bangalore" },
    { name: "XYZ Institute", course: "Financial Management", duration: "2 Years", location: "Bangalore" },
    { name: "Premier College", course: "Bachelor of Pharmacy", duration: "4 Years", location: "Bangalore" },
    { name: "Health Institute", course: "MBBS (Medicine)", duration: "5.5 Years", location: "Bangalore" },
    { name: "Tech Hub College", course: "Computer Science Engineering", duration: "4 Years", location: "Coimbatore" },
    { name: "Coimbatore Institute", course: "Human Resource Management", duration: "2 Years", location: "Coimbatore" },
    { name: "Kochi Tech", course: "Mechanical Engineering", duration: "4 Years", location: "Kochi" },
    { name: "Kochi Business School", course: "Operations Management", duration: "2 Years", location: "Kochi" },
    { name: "Hospitality Grand", course: "Bachelor of Hotel Management(BHM)", duration: "3 Years", location: "Bangalore" },
    { name: "Hotel Management Academy", course: "Bachelor of Hotel Management(BHM)", duration: "3 Years", location: "Bangalore" },
    { name: "Culinary Institute", course: "B.sc Hospitality and Hotel", duration: "3 Years", location: "Bangalore" },
    { name: "Professional Hotel School", course: "Bachelor in Hotel Management and Catering Technology(BHMCT)", duration: "4 Years", location: "Coimbatore" },
    { name: "Hospitality Plus", course: "Bachelor of Hotel Management(BHM)", duration: "3 Years", location: "Coimbatore" },
    { name: "Kochi Hotel Institute", course: "B.sc Hospitality and Hotel", duration: "3 Years", location: "Kochi" },
    { name: "BSC Nursing Academy", course: "BSC Nursing", duration: "4 Years", location: "Bangalore" },
    { name: "Nursing Care Institute", course: "General Nursing ", duration: "3 Years", location: "Bangalore" },
    { name: "Physiotherapy Center", course: "Bachelors of Physiotherapy", duration: "4 Years", location: "Bangalore" }
  ];

  const filteredColleges = colleges.filter((item) => {
    const locationMatch = selectedLocation === "All" || item.location === selectedLocation;
    const courseMatch = !selectedCourse || item.course === selectedCourse;
    return locationMatch && courseMatch;
  });

  return (
    <div className="college-wrapper">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5 header-section">
          <h1 className="main-title">
            Non-Medical Studies: Explore Your Future in Diverse Fields
          </h1>
          <p className="main-subtitle">
            Embark on a rewarding journey in non-medical careers. Select to discover programs, colleges, and admission details.
          </p>
        </div>

        {/* Location Selection */}
        <div className="text-center mb-4">
          <h3 className="page-title">
            Choose your location...
            {selectedCourse && (
              <span className="course-info">
                {' '} • Course: <strong>{selectedCourse}</strong>
              </span>
            )}
          </h3>
          <select
            className="form-select form-select-lg location-dropdown"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="All">All Locations</option>
            <option value="Kochi">Kochi</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>

        {/* College Cards Grid */}
        <div className="row g-4 mt-4">
          {filteredColleges.length > 0 ? (
            filteredColleges.map((item, index) => (
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={index}>
                <div className="college-card">
                  {/* Dummy Image */}
                  <div className={`college-image gradient-${index % 5}`}>
                    <div className="college-icon">
                      🎓
                    </div>
                  </div>

                  <div className="card-body p-4">
                    <h5 className="college-name">
                      {item.name}
                    </h5>
                    <div className="mb-2">
                      <span className="badge bg-primary me-2 college-badge">
                        {item.duration}
                      </span>
                      <span className="badge bg-success college-badge">
                        {item.location}
                      </span>
                    </div>
                    <p className="college-detail">
                      <strong>Course:</strong> {item.course}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="no-colleges">
                <div className="no-colleges-icon">🔍</div>
                No colleges match your selection.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default College;