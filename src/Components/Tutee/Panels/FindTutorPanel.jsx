// src/Components/Tutee/Panels/FindTutorPanel.jsx
import React from 'react';
import TextField from '@mui/material/TextField';

export default function FindTutorPanel({ searchTerm, setSearchTerm, tutors, navigate }) {
  return (
    <div>
      <div className="find-tutor-container">
        <h1>Find a Tutor</h1>
        <TextField
          label="Search by name or subject"
          variant="outlined"
          fullWidth
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="tutor-wrapper">
        <div className="tutoring-schedule-container">
          <div className="all-tutors-wrapper">
            {tutors.map((tutor) => (
              <div key={tutor.id} className="find-tutor-card">
                <div className="tutor-info">
                  <span className="tutor-name">{tutor.name}</span>
                  <span className="tutor-role">Status: {tutor.status}</span>
                </div>

                <div className="tutor-details-row">
                  <div className="tutor-details-text">
                    <div className="tutor-subject">Subjects: {tutor.subjects}</div>
                    <div className="tutor-subject">Rate per Hour: {tutor.rate}</div>
                    <div className="tutor-subject">Availability: {tutor.availability}</div>
                  </div>

                  <div className="action-buttons">
                    <button className="profile-button">View Profile</button>
                    <button
                      className="book-button"
                      onClick={() => navigate(`/book-tutor/${tutor.id}`)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {tutors.length === 0 && (
              <p style={{ textAlign: 'center', marginTop: '20px' }}>No tutors found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
