import React, { useState } from "react";
import "./college.css";

function College() {
  const [selectedLocation, setSelectedLocation] = useState("Bangalore");
  const [search, setSearch] = useState("");

  const colleges = [
    { name: "XYZ College", course: "B.Tech", duration: "4 Years", location: "Bangalore" },
    { name: "XBC College", course: "B.Tech", duration: "4 Years", location: "Bangalore" },
    { name: "BRS College", course: "B.Tech", duration: "4 Years", location: "Bangalore" },
    { name: "XRA College", course: "B.Tech", duration: "4 Years", location: "Bangalore" },
    { name: "BHA College", course: "B.Tech", duration: "4 Years", location: "Bangalore" }
  ];

  const filteredColleges = colleges.filter(
    (item) =>
      item.location === selectedLocation &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="college-wrapper">
      <div className="location-box">
        <h3>Choose your location...</h3>

        <div className="location-buttons">
          <button
            className={selectedLocation === "Bangalore" ? "active" : ""}
            onClick={() => setSelectedLocation("Bangalore")}
          >
            Bangalore
          </button>

          <button
            className={selectedLocation === "Coimbatore" ? "active" : ""}
            onClick={() => setSelectedLocation("Coimbatore")}
          >
            Coimbatore
          </button>

          <button
            className={selectedLocation === "Kochi" ? "active" : ""}
            onClick={() => setSelectedLocation("Kochi")}
          >
            Kochi
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
