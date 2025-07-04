import React from "react";
import "../../Pages/Styles/shared/CommonComponents.css";

export default function StatCards({ stats = [] }) {
  return (
    <div className="statcards-grid">
      {stats.map(({ label, value, icon, color }, index) => (
        <div key={index} className={`statcard statcard-${color}`}>
          <div className="statcard-icon">{icon}</div>
          <div className="statcard-details">
            <h4>{label}</h4>
            <p>{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
