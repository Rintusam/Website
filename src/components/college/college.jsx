import React, { useState } from "react";
import "./college.css";

function College({ selectedCourse }) {
  // default to 'All' so all colleges are shown on initial load
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [search, setSearch] = useState("");

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
    const nameMatch = item.name.toLowerCase().includes(search.toLowerCase());
    const courseMatch = !selectedCourse || item.course === selectedCourse;
    return locationMatch && nameMatch && courseMatch;
  });

  return (
    <div className="college-wrapper">
      <div className="location-box">
        <h3>
          Choose your location...
          {selectedCourse && <span style={{ marginLeft: "15px", color: "#0066cc", fontSize: "0.9em" }}>• Course: <strong>{selectedCourse}</strong></span>}
        </h3>

        <div className="location-grid">
          {/* 'ALL' tile - selected by default */}
          <button
            type="button"
            className={`location-tile ${selectedLocation === "All" ? "active" : ""}`}
            onClick={() => setSelectedLocation("All")}
          >
            <div className="tile-image">
              <img src="/all_location.jpg" alt="All locations" />
            </div>
            <div className="tile-label"></div>
          </button>

          {/* Location tiles: display square image with label below */}
          <button
            type="button"
            className={`location-tile ${selectedLocation === "Kochi" ? "active" : ""}`}
            onClick={() => setSelectedLocation("Kochi")}
          >
            <div className="tile-image">
              <img src="/kerala.jpeg" alt="Kerala" />
            </div>
            <div className="tile-label">Kerala</div>
          </button>

          <button
            type="button"
            className={`location-tile ${selectedLocation === "Coimbatore" ? "active" : ""}`}
            onClick={() => setSelectedLocation("Coimbatore")}
          >
            <div className="tile-image">
              <img src="/coimbatore.jpeg" alt="Coimbatore" />
            </div>
            <div className="tile-label">Coimbatore</div>
          </button>

          <button
            type="button"
            className={`location-tile ${selectedLocation === "Bangalore" ? "active" : ""}`}
            onClick={() => setSelectedLocation("Bangalore")}
          >
            <div className="tile-image">
              <img src="/bangalore.jpeg" alt="Bangalore" />
            </div>
            <div className="tile-label">Bangalore</div>
          </button>
        </div>

        <input
          type="text"
          placeholder="Search your college name here…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="college-search"
        />
      </div>

      <div className="table-container">
        <h2>College List</h2>
        <table>
          <thead>
            <tr>
              <th>College Name</th>
              <th>Course</th>
              <th>Duration</th>
              <th>Location</th>
            </tr>
          </thead>

          <tbody>
            {filteredColleges.length > 0 ? (
              filteredColleges.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.course}</td>
                  <td>{item.duration}</td>
                  <td>{item.location}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-data">
                  No Colleges Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default College;
