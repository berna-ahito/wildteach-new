import React from "react";
import "../../../Pages/Styles/LandingPage.css";

export default function TeamMemberCard({ imageSrc, name, role }) {
  return (
    <div className="team-member">
      <div className="member-image">
        <img src={imageSrc} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
