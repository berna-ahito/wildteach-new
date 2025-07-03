import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Pages/Styles/LandingHeader.css";

export default function LandingHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { name: "Home", path: "/home" },
    { name: "What is WildTeach?", path: "/what-is-wildteach" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const currentPath = location.pathname;

  return (
    <header className="landing-header">
      <div
        className="brand-zone"
        onClick={() => navigate("/home")}
        style={{ cursor: "pointer" }}
      >
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
            key={page.name}
            onClick={() => navigate(page.path)}
            className={`nav-btn ${currentPath === page.path ? "nav-active" : ""}`}
          >
            <span>{page.name}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}
