import React from "react";

export default function PersonalInfo({ profile }) {
  return (
    <div className="profile-card">
      <div className="section-header">
        <h4>Personal Information</h4>
        <button className="edit-btn">Edit</button>
      </div>
      <div className="info-grid">
        <p><strong>Fullname:</strong> {profile.fullname}</p>
        <p><strong>Date of Birth:</strong> {profile.dob}</p>
        <p><strong>Address:</strong> {profile.address}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
      </div>
    </div>
  );
}
