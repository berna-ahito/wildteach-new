import React from "react";
import "../../Pages/Styles/LandingHeader.css";

export default function LandingHeader({ activePage, setActivePage }) {
  const pages = ["Home", "What is WildTeach?", "About Us", "Contact Us"];

  return (
    <header className="landing-header">
      <div className="landing-logo">WILDTEACH</div>
      <nav className="landing-nav">
        {pages.map((page) => (
          <a
            key={page}
            href="#"
            onClick={() => setActivePage && setActivePage(page)}
            className={activePage === page ? "active" : ""}
          >
            {page}
          </a>
        ))}
      </nav>
    </header>
  );
}
