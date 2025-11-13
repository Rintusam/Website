import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'

export default function Navbar() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link className="brand" to="/">YourBrand</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/programs">Explore Programs</Link></li>
          <li><Link to="/how-it-works">How It Works</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="nav-actions">
          <Link className="btn ghost" to="/sign-in">Sign In</Link>
          <Link className="btn primary" to="/get-started">Get Started</Link>
        </div>
      </div>
    </nav>
  )
}
