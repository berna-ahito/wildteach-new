import React from 'react';
import Sidebar from '../../Components/Shared/Sidebar';
import Header from '../../Components/Shared/Header';
import { useNavigate } from 'react-router-dom';
import getAdminMenu from "../../RoutesConfig/menuAdmin";
import Card from "../../Components/Shared/Card"; 
import bookingData from '../../Data/Booking';

import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, Chip
} from '@mui/material';

import '../Styles/TutorPage.css';

export default function ManageUsers() {
  const navigate = useNavigate();
  const menuItems = getAdminMenu(navigate);

  return (
    <div className="tutor-dashboard bright-theme">
      <Sidebar menuItems={menuItems} />
      <div className="content">
        <Header title="WildTeach" />
        <h1 style={{ marginBottom: '32px' }}>Session Management</h1>

        {/* Stat Cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
          <Card title="Active Sessions" content="4" className="stat-card" style={{ width: '220px', height: '120px' }} />
          <Card title="Pending Bookings" content="20" className="stat-card" style={{ width: '220px', height: '120px' }} />
          <Card title="Total Sessions" content="24" className="stat-card" style={{ width: '220px', height: '120px' }} />
        </div>

        {/* Scrollable Table */}
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: '500px',     // scroll vertically if too many rows
            overflowY: 'auto',
            overflowX: 'auto',
            marginBottom: 4,
          }}
        >
          <Table stickyHeader sx={{ minWidth: 1000 }} aria-label="session table">
            <TableHead>
              <TableRow>
                <TableCell><b>Booking ID</b></TableCell>
                <TableCell><b>Student Name</b></TableCell>
                <TableCell><b>Tutor Name</b></TableCell>
                <TableCell><b>Subject</b></TableCell>
                <TableCell><b>Session Date & Time</b></TableCell>
                <TableCell><b>Status</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookingData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    <Typography variant="body2" color="text.secondary">
                      No sessions found
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                bookingData.map((session, idx) => (
                  <TableRow key={session.bookingId || idx}>
                    <TableCell>{session.bookingId}</TableCell>
                    <TableCell>{session.studentName}</TableCell>
                    <TableCell>{session.tutorName}</TableCell>
                    <TableCell>{session.subject}</TableCell>
                    <TableCell>{session.sessionDateTime}</TableCell>
                    <TableCell>
                      <Chip
                        label={session.status}
                        color={
                          session.status === 'Accepted'
                            ? 'success'
                            : session.status === 'Pending'
                              ? 'warning'
                              : 'error'
                        }
                        variant="outlined"
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
