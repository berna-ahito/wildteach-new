import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button
} from '@mui/material';
import '../../Pages/Styles/Admin.css';

export default function UserTable({ data = [], roleFilter }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const filtered = roleFilter
      ? data.filter(user => user.role === roleFilter)
      : data;
    setTableData(filtered);
  }, [data, roleFilter]);

  const toggleStatus = (index) => {
    const updated = [...tableData];
    const currentStatus = updated[index].status;
    updated[index].status = currentStatus === 'Active' ? 'Inactive' : 'Active';
    setTableData(updated);
  };

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
            <TableCell className="custom-header">Name</TableCell>
            <TableCell className="custom-header">Course</TableCell>
            <TableCell className="custom-header">Phone Number</TableCell>
            <TableCell className="custom-header">Email</TableCell>
            <TableCell className="custom-header">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.length > 0 ? (
            tableData.map((user, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:hover': {
                    backgroundColor: '#fff8f6',
                  },
                }}
              >
                <TableCell>{user.studentName}</TableCell>
                <TableCell>{user.course}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button
                    className={`status-btn ${user.status === 'Active' ? 'active' : 'inactive'}`}
                    variant="contained"
                    size="small"
                    onClick={() => toggleStatus(index)}
                  >
                    {user.status}
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">No data available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
