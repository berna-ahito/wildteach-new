import React from "react";
import "../../../Pages/Styles/LandingPage/WhatIsWildTeach.css";

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
  layout = "vertical",
}) {
  return (
    <div className={`section-header ${align} ${layout}`}>
      {badge && <div className="section-badge">{badge}</div>}
      <h1 className="section-title">
        {title} <span className="title-highlight">{highlight}</span>
      </h1>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}
