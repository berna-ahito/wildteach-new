import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, Button
} from '@mui/material';

export default function UserTable({ data = [], roleFilter }) {
  const [userList, setUserList] = useState(data);

  const filteredData = roleFilter
    ? userList.filter(user => user.role === roleFilter)
    : userList;

  const mappedData = filteredData.map((user, idx) => ({
    ...user,
    name: user.studentName,
    course: user.course,
    phone: user.phoneNumber,
    email: user.email,
    status: user.status,
    idx,
  }));

  // Toggle status handler
  const handleToggleStatus = (idx) => {
    setUserList(prev =>
      prev.map((user, i) =>
        i === idx
          ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
          : user
      )
    );
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="user table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Course</b></TableCell>
            <TableCell><b>Phone Number</b></TableCell>
            <TableCell><b>Email</b></TableCell>
            <TableCell><b>Status</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mappedData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <Typography variant="body2" color="text.secondary">
                  No data available
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            mappedData.map((user, idx) => (
              <TableRow key={user.id || idx}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.course}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    color={user.status === 'Active' ? 'success' : 'error'}
                    onClick={() => handleToggleStatus(userList.findIndex(u => u.id === user.id))}
                  >
                    {user.status}
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}