import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogoIcon, SunIcon } from './Icons';

function Navbar() {
  const targetAppUrl = "https://ai-interview-coach-project.streamlit.app/";
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <LogoIcon />
        <div>
          <span>AI</span> Interview Coach
        </div>
      </div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/features" className={location.pathname === '/features' ? 'active' : ''}>
          Features
        </Link>
        <Link to="/how-it-works" className={location.pathname === '/how-it-works' ? 'active' : ''}>
          How It Works
        </Link>
      </div>
      <div className="nav-actions">
        <a
          href={targetAppUrl}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
