import React from "react";

export default function ProfileInfo({ profile }) {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="avatar-section">
          <img src="/profile-placeholder.png" alt="Avatar" className="avatar" />
          <div>
            <h3>{profile.fullname}</h3>
            <p>{profile.email}</p>
            <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
          </div>
        </div>
        <button className="edit-btn">Edit</button>
      </div>
    </div>
  );
}
