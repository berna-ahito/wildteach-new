import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  MenuItem,
  Select,
  Paper,
} from '@mui/material';

import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import '../Styles/TuteePage.css';   // ← entire page’s CSS lives here

const menuItems = [
  { text: 'Home', onClick: () => window.location.href = '/tuteeDashboard' },
  { text: 'Find Tutor', onClick: () => window.location.href = '/findTutor' },
  { text: 'My Bookings', onClick: () => window.location.href = '/my-bookings' },
  { text: 'Profile', onClick: () => window.location.href = '/profile' },
  { text: 'Contact Us', onClick: () => window.location.href = '/contactUs' },
  { text: 'Settings', onClick: () => window.location.href = '/settings' },
  { text: 'Logout' },
];

export default function MyBookings() {
  /* demo data purely for layout preview */
  const sampleBookings = [
    {
      tutor: { student: { first_name: 'Jane', last_name: 'Doe' } },
      subject: 'Mathematics',
      sessionDateTime: '2025-06-25T14:00:00',
      status: 'Confirmed',
    },
    {
      tutor: { student: { first_name: 'John', last_name: 'Smith' } },
      subject: 'Science',
      sessionDateTime: '2025-07-26T10:30:00',
      status: 'Upcoming',
    },
    {
      tutor: { student: { first_name: 'John', last_name: 'Smith' } },
      subject: 'Science',
      sessionDateTime: '2025-07-26T10:30:00',
      status: 'Upcoming',
    },
    {
      tutor: { student: { first_name: 'Alice', last_name: 'Johnson' } },
      subject: 'History',
      sessionDateTime: '2025-08-01T09:00:00',
      status: 'Cancelled',
    },

  ];

  return (
    <Box className="tutee-dashboard bright-theme">
      <Sidebar menuItems={menuItems} />

      <Box className="tutee-content">
        <Header title="My Bookings" />

        <Container maxWidth="lg" className="my-bookings-wrapper">
          <Paper elevation={6} className="my-bookings-container">
            <Typography variant="h4" align="center" gutterBottom>
              My Bookings
            </Typography>

            {/* year / month filters */}
            <Box className="filter-container">
              <Select defaultValue="All">
                <MenuItem value="All">All Years</MenuItem>
                <MenuItem value="2025">2025</MenuItem>
              </Select>

              <Select defaultValue="All">
                <MenuItem value="All">All Months</MenuItem>
                <MenuItem value="June">June</MenuItem>
              </Select>
            </Box>

            {/* booking cards */}
            <Grid container spacing={3} justifyContent="center">
              {sampleBookings.map((b, idx) => {
                const d  = new Date(b.sessionDateTime);
                const dd = d.toLocaleDateString();
                const tt = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                return (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Paper elevation={4} className="booking-card">
                      <Typography variant="h6">
                        Tutor: {b.tutor.student.first_name} {b.tutor.student.last_name}
                      </Typography>
                      <Typography>Subject: {b.subject}</Typography>
                      <Typography>Date: {dd}</Typography>
                      <Typography>Time: {tt}</Typography>
                      <Typography>
                        Status:
                        <span className={`tutee-status ${b.status.toLowerCase()}`}> {b.status}</span>
                      </Typography>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
