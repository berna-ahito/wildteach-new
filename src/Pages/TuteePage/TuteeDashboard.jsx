// MODIFIED CODE | 06-24-25
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import Card from '../../Components/Card';
import menuTutee from './Routes/MenuTutee';
import { Typography, Divider, Button } from '@mui/material';
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

export default function TuteeDashboard() {
  const navigate = useNavigate();

  return (
    <div className="tutee-dashboard bright-theme">
      <Sidebar menuItems={menuItems} />

      <div className="tutee-content">
        <Header title="Tutee Dashboard" />

        {/* Greeting */}
        <header className="tutee-greeting-section">
          <div className="greeting-avatar">
            <span role="img" aria-label="wave">👋</span>
          </div>
          <div>
            <h1>Welcome back, Student!</h1>
            <p>Work smart, not harder</p>
          </div>
        </header>

        {/* Panels */}
        <div className="tutee-dashboard-panels">
          {/* Bookings Section */}
          <div className="tutee-panel-card">
            <div className="tutee-panel-header">
              <h3>📅 Upcoming Tutoring Schedule</h3>
            </div>
            {/* <div className="tutee-card-container">
              {[1, 2, 3].map((_, i) => (
                <Card
                  key={i}
                  title="John Doe"
                  content="Subject: IM2"
                >
                  <Typography className="tutee-card-status">
                    <strong>Status:</strong> Confirmed
                  </Typography>
                  <Typography className="tutee-card-date">
                    Date: June 25, 2025, 10:00 AM
                  </Typography>
                  <Button className="tutee-view-button">View</Button>
                </Card>
              ))}
            </div> */}
          </div>

          {/* Announcements Section */}
          <div className="tutee-panel-card">
            <div className="tutee-panel-header">
              <h3>📢 Announcements</h3>
            </div>
            <Divider className="tutee-announcement-divider" />
            <div className="tutee-announcement-box">
              <Typography>Midterm schedule will be posted soon.</Typography>
              <Typography variant="caption" color="text.secondary">
                🕒 Posted on: June 20, 2025, 8:00 AM
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
