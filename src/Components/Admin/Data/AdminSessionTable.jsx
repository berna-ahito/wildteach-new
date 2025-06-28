import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';
import '../../../Pages/Styles/Admin.css'; // Reusing shared styles

export default function AdminSessionTable({ bookings = [] }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: '16px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
        backgroundColor: '#fffdfb',
        border: '1px solid #f5eee9',
        maxHeight: '60vh',
        overflow: 'auto'
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5eee9' }}>
            <TableCell className="custom-header">Student</TableCell>
            <TableCell className="custom-header">Tutor</TableCell>
            <TableCell className="custom-header">Subject</TableCell>
            <TableCell className="custom-header">Date & Time</TableCell>
            <TableCell className="custom-header">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">No bookings available</TableCell>
            </TableRow>
          ) : (
            bookings.map((b) => (
              <TableRow
                key={b.bookingId}
                sx={{ '&:hover': { backgroundColor: '#fff8f6' } }}
              >
                <TableCell>{b.studentName}</TableCell>
                <TableCell>{b.tutorName}</TableCell>
                <TableCell>{b.subject}</TableCell>
                <TableCell>{b.sessionDateTime}</TableCell>
                <TableCell>
                  <button
                    className={`status-btn ${
                      b.status === 'Accepted'
                        ? 'active'
                        : b.status === 'Pending'
                        ? 'pending'
                        : 'inactive'
                    }`}
                  >
                    {b.status}
                  </button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
