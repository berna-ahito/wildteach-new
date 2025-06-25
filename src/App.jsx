import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import TuteeDashboard from './Pages/TuteePage/TuteeDashboard';
import TutorDashboard from './Pages/TutorPage/TutorPage';

// Admin pages
import AdminDashboard from './Pages/AdminPage/AdminDashboard';
import ManageUsers from './Pages/AdminPage/ManageUsers';
import SessionManage from './Pages/AdminPage/SessionManage';
import Announcements from './Pages/AdminPage/Announcements';
import Settings from './Pages/AdminPage/Settings';

// Tutee pages
import MyBookings from './Pages/TuteePage/MyBookings';
// import Profile from './Pages/TuteePage/Profile';
import FindTutor from './Pages/TuteePage/FindTutor';


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
        <Route path="/tuteeDashboard" element={<TuteeDashboard />} />
        <Route path="/tutorDashboard" element={<TutorDashboard />} />

        {/* Admin Routes */}
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/manageUsers" element={<ManageUsers />} />
        <Route path="/sessionManage" element={<SessionManage />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/settings" element={<Settings />} />

        {/* Tutee Routes */}
        <Route path="/my-bookings" element={<MyBookings />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/findTutor" element={<FindTutor />} />
        {/* <Route path="/settings" element={<Settings />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
