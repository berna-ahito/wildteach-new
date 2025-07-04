import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "../../../Pages/Styles/Shared/CommonComponents.css";
import "../../../Pages/Styles/Shared/UserTable.css";

export default function AdminSessionTable({ bookings = [] }) {
  return (
    <TableContainer component={Paper} className="user-table-container">
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell className="custom-headerTable">Student</TableCell>
            <TableCell className="custom-headerTable">Tutor</TableCell>
            <TableCell className="custom-headerTable">Subject</TableCell>
            <TableCell className="custom-headerTable">Date & Time</TableCell>
            <TableCell className="custom-headerTable">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No bookings available
              </TableCell>
            </TableRow>
          ) : (
            bookings.map((b) => (
              <TableRow key={b.bookingId}>
                <TableCell>{b.studentName}</TableCell>
                <TableCell>{b.tutorName}</TableCell>
                <TableCell>{b.subject}</TableCell>
                <TableCell>{b.sessionDateTime}</TableCell>
                <TableCell>
                  <span
                    className={`status ${
                      b.status === "Accepted"
                        ? "active"
                        : b.status === "Pending"
                        ? "pending"
                        : "inactive"
                    }`}
                  >
                    {b.status}
                  </span>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
