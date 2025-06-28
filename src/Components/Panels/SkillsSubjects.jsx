import React from "react";

const SkillsSubjects = ({ profile }) => {
  return (
    <div className="profile-card">
      <div className="section-header">
        <h4>Skills & Subjects</h4>
        <button className="edit-btn">Edit</button>
      </div>
      <div className="info-grid">
        <div>
          <strong>Subjects:</strong>
          <ul>
            {Array.isArray(profile.subjects) && profile.subjects.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Skills:</strong>
          <ul>
            {Array.isArray(profile.skills) && profile.skills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsSubjects;
