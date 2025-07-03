import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button
} from '@mui/material';
import '../../Pages/Styles/Shared/CommonComponents.css';
import '../../Pages/Styles/Shared/UserTable.css'; 


export default function UserTable({ data = [], onToggleStatus,onRefresh }) {
  const [view, setView] = useState("Tutee");
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (!Array.isArray(data)) {
      console.error("🚨 Expected 'data' to be an array but got:", typeof data, data);
      setTableData([]);
      return;
    }

    const filtered = data.filter(user =>
      user.role?.toLowerCase() === view.toLowerCase()
    );
    setTableData(filtered);
  }, [data, view]);

  const handleToggleStatus = async (user, index) => {
    const newStatus = user.status === 'Active' ? 'Inactive' : 'Active';
    const success = await onToggleStatus(user.student_id, newStatus === 'Active');

    if (success) {
      const updated = [...tableData];
      updated[index].status = newStatus;
      setTableData(updated);
      if (onRefresh) onRefresh(); // ✅ trigger stat refresh
    }

  };

  return (
    <div className="p-4">
      <div className="button-toggle-group mb-4">
        <h1>Manage Users</h1>
        <button
          className={`toggle-btn ${view === "Tutee" ? "active" : ""}`}
          onClick={() => setView("Tutee")}
        >
          View Tutees
        </button>
        <button
          className={`toggle-btn ${view === "Tutor" ? "active" : ""}`}
          onClick={() => setView("Tutor")}
        >
          View Tutors
        </button>
      </div>

    <TableContainer component={Paper} className="user-table-container">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className="custom-headerTable">Name</TableCell>
              <TableCell className="custom-headerTable">Course</TableCell>
              <TableCell className="custom-headerTable">Phone Number</TableCell>
              <TableCell className="custom-headerTable">Email</TableCell>
              <TableCell className="custom-headerTable">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.length > 0 ? (
              tableData.map((user, index) => (
                <TableRow key={user.student_id || index}>
                  <TableCell>{user.studentName}</TableCell>
                  <TableCell>{user.course}</TableCell>
                  <TableCell>{user.phoneNumber}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button
                      className={`status ${user.status === 'Active' ? 'active' : 'inactive'}`}
                      variant="contained"
                      size="small"
                      onClick={() => handleToggleStatus(user, index)}
                    >
                      {user.status}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No data available for <strong>{view}</strong>.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
