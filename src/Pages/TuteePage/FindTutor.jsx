// src/Pages/TuteePage/FindTutor.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Shared/Header';
import Sidebar from '../../Components/Shared/Sidebar';
import menuTutee from '../../RoutesConfig/MenuTutee';
import TextField from '@mui/material/TextField';

import '../Styles/TuteePage.css';

export default function FindTutor() {
  const navigate = useNavigate();
  const menuItems = menuTutee(navigate);
  const [searchTerm, setSearchTerm] = React.useState('');

  const tutors = [
    {
      id: 1,
      name: 'Juan Dela Cruz',
      status: 'Active',
      subjects: 'IM2, Calculus',
      rate: '₱200',
      availability: 'MWF 9AM - 11AM',
    },
    {
      id: 2,
      name: 'Maria Clara',
      status: 'Active',
      subjects: 'Science, English',
      rate: '₱250',
      availability: 'TTh 2PM - 4PM',
    },
    {
      id: 3,
      name: 'Jose Rizal',
      status: 'Active',
      subjects: 'Science',
      rate: '₱300',
      availability: 'TTh 2PM - 4PM',
    },
  ];

  const filteredTutors = tutors.filter((tutor) =>
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.subjects.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="tutee-dashboard bright-theme">
      <Sidebar menuItems={menuItems} />
      <div className="tutee-content">
        <Header title="WILDTEACH" />

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
              {filteredTutors.map((tutor) => (
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
              {filteredTutors.length === 0 && (
                <p style={{ textAlign: 'center', marginTop: '20px' }}>No tutors found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
