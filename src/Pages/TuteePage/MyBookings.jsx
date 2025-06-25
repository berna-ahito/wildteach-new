import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  MenuItem,
  Select,
  Paper,
  CircularProgress,
} from '@mui/material';

import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import './CSS/TuteeDashboard.css';

const menuItems = [
  { text: 'Home', onClick: () => window.location.href = '/tuteeDashboard' },
  { text: 'My Bookings', onClick: () => window.location.href = '/my-bookings' },
  { text: 'Logout' },
];

export default function MyBookings() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear().toString();
  const currentMonth = currentDate.toLocaleString('en-US', { month: 'long' });

  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [isLoading, setIsLoading] = useState(true);

  const studentId = localStorage.getItem('student_id');

  useEffect(() => {
    if (!studentId) {
      console.error('No student_id found in localStorage');
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    fetch('http://localhost:8080/booking/all')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        const studentBookings = data.filter(
          booking => booking.student?.student_id === parseInt(studentId)
        );
        setBookings(studentBookings);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching bookings:', err);
        setIsLoading(false);
      });
  }, [studentId]);

  useEffect(() => {
    const filtered = bookings.filter(booking => {
      const date = new Date(booking.sessionDateTime);
      if (isNaN(date.getTime())) return false;
      const year = date.getFullYear().toString();
      const month = date.toLocaleString('en-US', { month: 'long' });
      return (selectedYear === 'All' || year === selectedYear) &&
        (selectedMonth === 'All' || month === selectedMonth);
    });
    setFilteredBookings(filtered);
  }, [bookings, selectedYear, selectedMonth]);

  const getUniqueYears = () => {
    const years = bookings.map(b => {
      const date = new Date(b.sessionDateTime);
      return isNaN(date.getTime()) ? null : date.getFullYear();
    }).filter(Boolean);
    return ['All', ...new Set(years)];
  };

  const getUniqueMonths = () => {
    const months = bookings.map(b => {
      const date = new Date(b.sessionDateTime);
      return isNaN(date.getTime()) ? null : date.toLocaleString('en-US', { month: 'long' });
    }).filter(Boolean);
    return ['All', ...new Set(months)];
  };

  return (
    <Box display="flex">
      <Sidebar menuItems={menuItems} />

      <Box flexGrow={1}>
        <Header title="My Bookings" />
        <Box flexGrow={1}>
          <Header title="My Bookings" />

          <Container maxWidth="lg" className="my-bookings-wrapper">
            <Paper elevation={6} className="my-bookings-container">
              <Typography variant="h4" align="center" gutterBottom className="my-bookings-title">
                My Bookings
              </Typography>

              <Box className="filter-container">
                <Select
                  value={selectedYear}
                  onChange={e => setSelectedYear(e.target.value)}
                  className="filter-select"
                >
                  {getUniqueYears().map((year, idx) => (
                    <MenuItem key={idx} value={year}>{year}</MenuItem>
                  ))}
                </Select>

                <Select
                  value={selectedMonth}
                  onChange={e => setSelectedMonth(e.target.value)}
                  className="filter-select"
                >
                  {getUniqueMonths().map((month, idx) => (
                    <MenuItem key={idx} value={month}>{month}</MenuItem>
                  ))}
                </Select>
              </Box>

              {isLoading ? (
                <Box textAlign="center"><CircularProgress /></Box>
              ) : filteredBookings.length > 0 ? (
                <Grid container spacing={3} justifyContent="center">
                  {filteredBookings.map((booking, index) => {
                    const date = new Date(booking.sessionDateTime);
                    const month = date.toLocaleString('en-US', { month: 'long' });
                    const year = date.getFullYear();

                    const tutorFirstName = booking.tutor?.student?.first_name || 'N/A';
                    const tutorLastName = booking.tutor?.student?.last_name || '';

                    return (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper elevation={4} className="booking-card">
                          <Typography><strong>Tutor Name:</strong> {tutorFirstName} {tutorLastName}</Typography>
                          <Typography><strong>Subject:</strong> {booking.subject || 'N/A'}</Typography>
                          <Typography><strong>Date:</strong> {date.toLocaleDateString()}</Typography>
                          <Typography><strong>Time:</strong> {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Typography>
                          <Typography><strong>Status:</strong> {booking.status || 'N/A'}</Typography>
                          <Typography><strong>Month:</strong> {month}</Typography>
                          <Typography><strong>Year:</strong> {year}</Typography>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              ) : (
                <Typography align="center">No bookings found for selected filters.</Typography>
              )}
            </Paper>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
