import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Pages/Styles/LandingHeader.css";

export default function LandingHeader() {
  const navigate = useNavigate();
  const pages = ["Home", "What is WildTeach?", "About Us", "Contact Us"];
  const [activePage, setActivePage] = useState("Home");

  const handleNavigate = (page) => {
    setActivePage(page);
    navigate("/", { state: { scrollTo: page } });
  };

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
            onClick={() => handleNavigate(page)}
            className={`nav-btn ${activePage === page ? "nav-active" : ""}`}
          >
            <span>{page}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}
