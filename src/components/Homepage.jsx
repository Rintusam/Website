import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './Homepage.css'

export default function Homepage() {
  return (
    <div className="homepage-root">
      <Navbar />

      <header className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Unlock Your Potential<br/>Your Future Awaits</h1>
          <p className="hero-sub">Explore top career paths, compare programs, and get expert guidance to start your journey.</p>

          <div className="cta-row">
            <Link to="/medical" className="cta cta-dark" aria-label="Explore Medical Studies">Medical Studies</Link>
            <Link to="/non-medical" className="cta cta-gold" aria-label="Explore Non Medical Fields">Non-Medical Fields</Link>
          </div>
        </div>
      </header>

      <section className="why">
        <div className="why-grid">
          <div className="why-card">
            <h3>Explore Careers</h3>
            <p>Discover the top career paths and programs for every interest and skill level.</p>
          </div>
          <div className="why-card">
            <h3>Compare Colleges</h3>
            <p>Find the best programs and compare locations, costs, and outcomes.</p>
          </div>
          <div className="why-card">
            <h3>Expert Guidance</h3>
            <p>Get one-on-one tips and resources to pick the right path and apply with confidence.</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} YourBrand — All rights reserved</div>
      </footer>
    </div>
  )
}
