import React from "react";

export default function AddressInfo({ profile }) {
  return (
    <div className="profile-card">
      <div className="section-header">
        <h4>Address</h4>
        <button className="edit-btn">Edit</button>
      </div>
      <div className="info-grid">
        <p><strong>City:</strong> {profile.city}</p>
        <p><strong>Province:</strong> {profile.province}</p>
        <p><strong>Home Address:</strong> {profile.home_address}</p>
      </div>
    </div>
  );
}
