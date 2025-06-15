import React from 'react';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import { useNavigate } from 'react-router-dom';
import getAdminMenu from './Routes/menuAdmin';

import bookingData from '../../Data/Booking';

import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, Chip
} from '@mui/material';

export default function ManageUsers() {
  const navigate = useNavigate();
  const menuItems = getAdminMenu(navigate);

  return (
    <>
      <Header title="WildTeach" />
      <Sidebar menuItems={menuItems} />
      <div style={{ marginTop: '190px', paddingRight: '10px' , marginBottom: '40px'  }}>
        <h1>Session Management</h1>
        <TableContainer component={Paper} sx={{ mt: 2, width: '100%' }}>
          <Table sx={{ minWidth: 1400 }} aria-label="session table">
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
    </>
  );
}