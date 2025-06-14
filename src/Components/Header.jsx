import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

export default function Header({ title = "Dashboard", leftIcon, rightIcon }) {
  return (
    <AppBar position="fixed" color="primary" elevation={1}>
      <Toolbar>
        {leftIcon}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, tectAlign: 'left', ml: 4 }}>
          {title}
        </Typography>
        {rightIcon}
      </Toolbar>
    </AppBar>
  );
}