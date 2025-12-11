import React, { useState } from 'react';
import './college.css';

// --- Mock Data: In a real app, this would come from your backend/API ---
const collegesData = [
  {
    id: 1,
    name: "Rajagiri School of Engineering & Technology",
    location: "Kochi",
    rating: "4.8",
    fees: "₹95,000/yr",
    imgUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000",
    tags: ["Autonomous", "NAAC A++"]
  },
  {
    id: 2,
    name: "Model Engineering College",
    location: "Kochi",
    rating: "4.6",
    fees: "₹45,000/yr",
    imgUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000",
    tags: ["Govt Aided", "Top Placement"]
  },
  {
    id: 3,
    name: "PSG College of Technology",
    location: "Coimbatore",
    rating: "4.9",
    fees: "₹85,000/yr",
    imgUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
    tags: ["Top Ranked", "Research Hub"]
  },
  {
    id: 4,
    name: "Coimbatore Institute of Technology (CIT)",
    location: "Coimbatore",
    rating: "4.5",
    fees: "₹60,000/yr",
    imgUrl: "https://images.unsplash.com/photo-1592280771800-bcf9fe730623?auto=format&fit=crop&q=80&w=1000",
    tags: ["Historic", "Green Campus"]
  },
  {
    id: 5,
    name: "R.V. College of Engineering",
    location: "Bangalore",
    rating: "4.9",
    fees: "₹2,50,000/yr",
    imgUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=1000",
    tags: ["Premium", "Bangalore Top"]
  },
  {
    id: 6,
    name: "BMS College of Engineering",
    location: "Bangalore",
    rating: "4.7",
    fees: "₹2,20,000/yr",
    imgUrl: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1000",
    tags: ["Oldest Private", "City Center"]
  },
  {
    id: 7,
    name: "Christ University (Kengeri Campus)",
    location: "Bangalore",
    rating: "4.5",
    fees: "₹1,80,000/yr",
    imgUrl: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&q=80&w=1000",
    tags: ["Liberal Arts", "Modern"]
  },
  {
    id: 8,
    name: "SCMS School of Engineering",
    location: "Kochi",
    rating: "4.3",
    fees: "₹80,000/yr",
    imgUrl: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&q=80&w=1000",
    tags: ["Strict Academic", "Hostel"]
  }
];

const Colleges = () => {
  const [filter, setFilter] = useState('All');

  // Logic to filter colleges based on selection
  const filteredColleges = filter === 'All' 
    ? collegesData 
    : collegesData.filter(college => college.location === filter);

  return (
    <div className="college-page-container">
      
      {/* 1. Hero / Header Section */}
      <header className="college-hero">
        <div className="hero-content">
          <span className="breadcrumb">Home &gt; Non-Medical &gt; Engineering &gt; CSE</span>
          <h1>Computer Science Engineering</h1>
          <p>Explore the best campuses offering world-class CSE programs.</p>
        </div>
      </header>

      {/* 2. Filter Bar */}
      <div className="filter-bar">
        <div className="filter-container">
          <span className="filter-label">Filter by City:</span>
          {['All', 'Kochi', 'Coimbatore', 'Bangalore'].map((city) => (
            <button 
              key={city}
              className={`filter-btn ${filter === city ? 'active' : ''}`}
              onClick={() => setFilter(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* 3. The Grid of Colleges */}
      <div className="college-grid-wrapper">
        <div className="college-grid">
          {filteredColleges.length > 0 ? (
            filteredColleges.map((college) => (
              <div key={college.id} className="college-card">
                
                {/* Image Area */}
                <div className="card-image">
                  <img src={college.imgUrl} alt={college.name} />
                  <span className="location-badge">📍 {college.location}</span>
                </div>

                {/* Content Area */}
                <div className="card-content">
                  <div className="card-tags">
                    {college.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <h3>{college.name}</h3>
                  
                  <div className="card-meta">
                    <span className="rating">⭐ {college.rating}/5</span>
                    <span className="fees">{college.fees}</span>
                  </div>
                  
                  <button className="view-btn">View Details</button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No colleges found in this location.</h3>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Colleges;