import React from "react";
import "../../../Pages/Styles/Shared/CommonComponents.css";

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
  layout = "vertical",
  className = "",
}) {
  return (
    <div className={`section-header ${align} ${layout} ${className}`}>
      {badge && <div className="section-badge">{badge}</div>}
      <h1 className="section-title">
        {title} <span className="title-highlight">{highlight}</span>
      </h1>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}
