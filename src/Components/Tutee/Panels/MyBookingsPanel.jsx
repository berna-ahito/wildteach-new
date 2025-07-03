import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  MenuItem,
  Select,
  Paper,
  Card,
} from '@mui/material';
import useMyBookingsData from '../../Tutee/Data/useMyBookingsData';

export default function MyBookingsPanel() {
  const {
    selectedYear,
    selectedMonth,
    setSelectedYear,
    setSelectedMonth,
    filteredBookings,
  } = useMyBookingsData();

  const years = ['All', ...new Set(
    filteredBookings.map((b) =>
      new Date(new Date(b.sessionDateTime).getTime() + 8 * 60 * 60 * 1000).getFullYear().toString()
    )
  )];

  const months = ['All', ...new Set(
    filteredBookings.map((b) =>
      new Date(new Date(b.sessionDateTime).getTime() + 8 * 60 * 60 * 1000).toLocaleString('default', { month: 'long' })
    )
  )];

  return (
    <Container maxWidth="lg" className="my-bookings-wrapper">
      <Paper elevation={6} className="my-bookings-container">
        <Typography variant="h4" align="center" gutterBottom>
          My Bookings
        </Typography>

        {/* Filters */}
        <Box className="filter-container" display="flex" gap={2} justifyContent="center" mb={3}>
          <Select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            <MenuItem value="All">All Years</MenuItem>
            <MenuItem value="2025">2025</MenuItem>
            <MenuItem value="2026">2026</MenuItem>
            <MenuItem value="2027">2027</MenuItem>
          </Select>

          <Select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
            <MenuItem value="All">All Months</MenuItem>
            <MenuItem value="June">June</MenuItem>
            <MenuItem value="July">July</MenuItem>
            <MenuItem value="August">August</MenuItem>
          </Select>

          <button className="clear-filter-btn" onClick={() => {
            setSelectedYear('All');
            setSelectedMonth('All');
          }}>
            Clear
          </button>
        </Box>

        {/* Booking Cards */}
        <Grid container spacing={3} justifyContent="center">
          {filteredBookings.map((b, idx) => {
            // const d = new Date(b.sessionDateTime);
            const d = new Date(new Date(b.sessionDateTime).getTime() + 8 * 60 * 60 * 1000); 
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
  );
}
