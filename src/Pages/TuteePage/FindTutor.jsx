// src/Pages/FindTutor.jsx
import React from 'react';
import Header from '../../Components/Shared/Header';
import Sidebar from '../../Components/Shared/Sidebar';
import '../Styles/TuteePage.css';

const menuItems = [
  { text: 'Home', onClick: () => window.location.href = '/tuteeDashboard' },
  { text: 'Find Tutor', onClick: () => window.location.href = '/findTutor' },
  { text: 'My Bookings', onClick: () => window.location.href = '/my-bookings' },
  { text: 'Profile', onClick: () => window.location.href = '/profile' },
  { text: 'Contact Us', onClick: () => window.location.href = '/contactUs' },
  { text: 'Settings', onClick: () => window.location.href = '/settings' },
  { text: 'Logout' },
];

export default function FindTutor() {
  return (
    <div className="tutee-dashboard bright-theme">
      <Sidebar menuItems={menuItems} />

      <div className="tutee-content">
        <Header title="Find Tutor" />
        <Header />

        <div className="find-tutor-container">
          <h1>Find a Tutor</h1>
        </div>

        <div className="tutor-wrapper">
          <div className="tutoring-schedule-container">
            <div className="all-tutors-wrapper">
              {[1, 2].map((_, index) => (
                <div key={index}>
                  <div className="find-tutor-card">
                    <div className="tutor-info">
                      <span className="tutor-name">Juan Dela Cruz</span>
                      <span className="tutor-role">Status: Active</span>
                    </div>

                    <div className="tutor-details-row">
                      <div className="tutor-details-text">
                        <div className="tutor-subject">Subjects: IM2, Calculus</div>
                        <div className="tutor-subject">Rate per Hour: ₱200</div>
                        <div className="tutor-subject">Availability: MWF 9AM - 11AM</div>
                      </div>

                      <div className="action-buttons">
                        <button className="profile-button">View Profile</button>
                        <button className="book-button">Book Now</button>
                      </div>
                    </div>
                  </div>

                  {index !== 1 && <hr className="tutor-divider" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
