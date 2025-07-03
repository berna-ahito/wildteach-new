import React from "react";
import { AppBar, Toolbar, Badge, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Pages/Styles/Header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get role from localStorage's "user" object
  const user = localStorage.getItem("user");
  console.log("[Header] Raw localStorage user:", user);

  const parsedUser = user ? JSON.parse(user) : null;
  const role = parsedUser?.role;

  console.log("[Header] Parsed role from user object:", role);

  const handleToolbarClick = () => {
    let targetPath = "/home"; // fallback
    if (role === "admin") targetPath = "/adminDashboard";
    else if (role === "tutor") targetPath = "/tutorDashboard";
    else if (role === "tutee") targetPath = "/tuteeDashboard";

    console.log("[Header] Current path:", location.pathname);
    console.log("[Header] Target path based on role:", targetPath);

    if (location.pathname !== targetPath) {
      console.log("[Header] Navigating to:", targetPath);
      navigate(targetPath);
    } else {
      console.log("[Header] Already on target path. No navigation needed.");
    }
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={1}
      className="custom-header"
    >
      <Toolbar className="header-toolbar">
        <div className="navbar-left">
          <div
            className="brand-zone"
            onClick={handleToolbarClick}
            style={{ cursor: "pointer" }}
          >
            <div className="logo-badge">
              <div className="logo-inner">W</div>
            </div>
            <div className="brand-title">
              <span className="wild-text">WILD</span>
              <span className="teach-text">TEACH</span>
              <div className="brand-underline"></div>
            </div>
          </div>
        </div>

        <div className="navbar-right-group">
          <div className="navbar-center">
            <SearchIcon className="navbar-icon" />
            <InputBase
              placeholder="Search students, subjects..."
              className="search-input"
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
