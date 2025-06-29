import React from "react";
import "../../Pages/Styles/LandingHeader.css";

export default function LandingHeader({ activePage, setActivePage }) {
  const pages = ["Home", "What is WildTeach?", "About Us", "Contact Us"];

  return (
    <header className="landing-header">
      <div className="brand-zone">
        <div className="logo-badge">
          <div className="logo-inner">W</div>
        </div>
        <div className="brand-title">
          <span className="wild-text">WILD</span>
          <span className="teach-text">TEACH</span>
          <div className="brand-underline"></div>
        </div>
      </div>
      
      <nav className="navigation-bar">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActivePage && setActivePage(page)}
            className={`nav-btn ${activePage === page ? "nav-active" : ""}`}
          >
            <span>{page}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}