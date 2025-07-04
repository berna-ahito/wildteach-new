import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './RoutesConfig/ProtectedRoute';
import UnauthorizedPage from './RoutesConfig/UnathorizedPage';

// Auth pages
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

// Admin
import AdminDashboard from './Pages/AdminPage/AdminDashboard';
import ManageUsers from './Pages/AdminPage/ManageUsers';
import SessionManage from './Pages/AdminPage/SessionManage';
import Announcements from './Pages/AdminPage/Announcements';
import AdminSettings from './Pages/AdminPage/AdminSettings';
import AdminRecentAll from './Components/Admin/Data/AdminRecentAll';

// Tutor
import TutorDashboard from './Pages/TutorPage/TutorDashboard';
import Sessions from './Pages/TutorPage/Sessions';
import ProfileTutor from './Pages/TutorPage/Profile';
import TutorSettings from './Pages/TutorPage/Settings';
import ContactUs from './Pages/TutorPage/ContactUs';

// Tutee
import TuteeDashboard from './Pages/TuteePage/TuteeDashboard';
import MyBookings from './Pages/TuteePage/MyBookings';
import BookingPage from './Pages/TuteePage/BookingPage';
import Profile from './Pages/TuteePage/Profile';
import FindTutor from './Pages/TuteePage/FindTutor';
import ContactSection from './Pages/TuteePage/ContactSection';
import AboutSection from './Pages/TuteePage/AboutSection';
import SettingsTutee from './Pages/TuteePage/SettingsTutee';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.isLoggedIn && user?.role) {
      setIsLoggedIn(true);
      setUserRole(user.role.toLowerCase());
    }
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        {/* === Public Routes === */}
        <Route path="/" element={<LandingPage section="home" />} />
        <Route path="/home" element={<LandingPage section="home" />} />
        <Route path="/what-is-wildteach" element={<LandingPage section="what-is-wildteach" />} />
        <Route path="/about-us" element={<LandingPage section="about-us" />} />
        <Route path="/contact-us" element={<LandingPage section="contact-us" />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        {/* === Admin Routes === */}
        <Route path="/adminDashboard" element={
          <ProtectedRoute
            element={<AdminDashboard setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />}
            isLoggedIn={isLoggedIn}
            allowedRoles={["admin"]}
            userRole={userRole}
          />
        } />
        <Route path="/admin/manageUsers" element={
          <ProtectedRoute element={<ManageUsers />} isLoggedIn={isLoggedIn} allowedRoles={["admin"]} userRole={userRole} />
        } />
        <Route path="/admin/sessionManage" element={
          <ProtectedRoute element={<SessionManage />} isLoggedIn={isLoggedIn} allowedRoles={["admin"]} userRole={userRole} />
        } />
        <Route path="/admin/announcements" element={
          <ProtectedRoute element={<Announcements />} isLoggedIn={isLoggedIn} allowedRoles={["admin"]} userRole={userRole} />
        } />
        <Route path="/admin/settings" element={
          <ProtectedRoute element={<AdminSettings />} isLoggedIn={isLoggedIn} allowedRoles={["admin"]} userRole={userRole} />
        } />
        <Route path="/admin/recent" element={
          <ProtectedRoute element={<AdminRecentAll />} isLoggedIn={isLoggedIn} allowedRoles={["admin"]} userRole={userRole} />
        } />

        {/* === Tutee Routes === */}
        <Route path="/tuteeDashboard" element={
          <ProtectedRoute
            element={<TuteeDashboard setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />}
            isLoggedIn={isLoggedIn}
            allowedRoles={["tutee"]}
            userRole={userRole}
          />
        } />
        <Route path="/tutee/my-bookings" element={
          <ProtectedRoute element={<MyBookings />} isLoggedIn={isLoggedIn} allowedRoles={["tutee"]} userRole={userRole} />
        } />
        <Route path="/tutee/profile" element={
          <ProtectedRoute element={<Profile />} isLoggedIn={isLoggedIn} allowedRoles={["tutee"]} userRole={userRole} />
        } />
        <Route path="/tutee/findTutor" element={
          <ProtectedRoute element={<FindTutor />} isLoggedIn={isLoggedIn} allowedRoles={["tutee"]} userRole={userRole} />
        } />
        <Route path="/book-tutor/:tutorId" element={
          <ProtectedRoute element={<BookingPage />} isLoggedIn={isLoggedIn} allowedRoles={["tutee"]} userRole={userRole} />
        } />
        <Route path="/tutee/contact-us" element={
          <ProtectedRoute element={<ContactSection />} isLoggedIn={isLoggedIn} allowedRoles={["tutee"]} userRole={userRole} />
        } />
        <Route path="/tutee/about-us" element={
          <ProtectedRoute element={<AboutSection />} isLoggedIn={isLoggedIn} allowedRoles={["tutee"]} userRole={userRole} />
        } />
        <Route path="/tutee/settings-tutee" element={
          <ProtectedRoute element={<SettingsTutee />} isLoggedIn={isLoggedIn} allowedRoles={["tutee"]} userRole={userRole} />
        } />

        {/* === Tutor Routes === */}
        <Route path="/tutorDashboard" element={
          <ProtectedRoute
            element={<TutorDashboard setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />}
            isLoggedIn={isLoggedIn}
            allowedRoles={["tutor"]}
            userRole={userRole}
          />
        } />
        <Route path="/tutor/home" element={
          <ProtectedRoute
            element={<TutorDashboard setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />}
            isLoggedIn={isLoggedIn}
            allowedRoles={["tutor"]}
            userRole={userRole}
          />
        } />
        <Route path="/tutor/manageSessions" element={
          <ProtectedRoute element={<Sessions />} isLoggedIn={isLoggedIn} allowedRoles={["tutor"]} userRole={userRole} />
        } />
        <Route path="/tutor/profile" element={
          <ProtectedRoute element={<ProfileTutor />} isLoggedIn={isLoggedIn} allowedRoles={["tutor"]} userRole={userRole} />
        } />
        <Route path="/tutor/settings" element={
          <ProtectedRoute element={<TutorSettings />} isLoggedIn={isLoggedIn} allowedRoles={["tutor"]} userRole={userRole} />
        } />
        <Route path="/tutor/contact-us" element={
          <ProtectedRoute element={<ContactUs />} isLoggedIn={isLoggedIn} allowedRoles={["tutor"]} userRole={userRole} />
        } />
      </Routes>
    </Router>
  );
}

export default App;
