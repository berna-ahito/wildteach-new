import React from 'react';
import { AppBar, Toolbar, Typography, Badge, InputBase } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import "../Pages/Styles/Header.css";

export default function Header({ tutorName = "Tutor" }) {
  return (
    <AppBar position="fixed" color="default" elevation={1} className="custom-header">
      <Toolbar className="header-toolbar">
        <div className="navbar-left">
          <div className="navbar-logo-circle">
            <span className="logo-circle-text">W</span>
          </div>
          <Typography variant="h6" className="navbar-title">WILDTEACH</Typography>
        </div>

        <div className="navbar-right-group">
          <div className="navbar-center">
            <SearchIcon className="navbar-icon" />
            <InputBase
              placeholder="Search students, subjects..."
              className="search-input"
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <div className="navbar-right">
            <Badge badgeContent={3} color="secondary">
              <NotificationsIcon className="notif-icon" />
            </Badge>
          </div>
        </div>

      </Toolbar>
    </AppBar>
  );
}
