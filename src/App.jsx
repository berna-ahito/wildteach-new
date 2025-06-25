import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import StudentDashboard from './Pages/StudentPage/StudentDashboard';
import TutorDashboard from './Pages/TutorPage/TutorDashboard';

// Admin pages
import AdminDashboard from './Pages/AdminPage/AdminDashboard';
import ManageUsers from './Pages/AdminPage/ManageUsers';
import SessionManage from './Pages/AdminPage/SessionManage';
import Announcements from './Pages/AdminPage/Announcements';
import Settings from './Pages/AdminPage/Settings';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* User Dashboards */}
        <Route path="/studentDashboard" element={<StudentDashboard />} />
        <Route path="/tutorDashboard" element={<TutorDashboard />} />

        {/* Admin Routes */}
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/manageUsers" element={<ManageUsers />} />
        <Route path="/sessionManage" element={<SessionManage />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
