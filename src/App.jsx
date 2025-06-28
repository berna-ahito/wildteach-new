import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

// Tutor pages
import TutorDashboard from './Pages/TutorPage/TutorDashboard';
import Sessions from './Pages/TutorPage/Sessions';
import ProfileTutor from './Pages/TutorPage/Profile';


// Admin pages
import AdminDashboard from './Pages/AdminPage/AdminDashboard';
import ManageUsers from './Pages/AdminPage/ManageUsers';
import SessionManage from './Pages/AdminPage/SessionManage';
import Announcements from './Pages/AdminPage/Announcements';
import Settings from './Pages/AdminPage/Settings';

// Tutee pages
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

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Admin Routes */}
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/manageUsers" element={<ManageUsers />} />
        <Route path="/sessionManage" element={<SessionManage />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/settings" element={<Settings />} />

        {/* Tutee Routes */}
        <Route path="/tuteeDashboard" element={<TuteeDashboard />} />
        <Route path="/tutee/my-bookings" element={<MyBookings />} />
        <Route path="/tutee/profile" element={<Profile />} />
        <Route path="/tutee/findTutor" element={<FindTutor />} />
        <Route path="/book-tutor/:tutorId" element={<BookingPage />} />
        <Route path="/tutee/contact-us" element={<ContactSection />} />
       <Route path="/tutee/about-us" element={<AboutSection />} />
        <Route path="/tutee/settings-tutee" element={<SettingsTutee />} />

        {/* Tutor Routes */}
        <Route path="/tutorDashboard" element={<TutorDashboard />} />
        <Route path="/tutor/home" element={<TutorDashboard />} />
        <Route path="/tutor/manageSessions" element={<Sessions />} />
        <Route path="/tutor/profile" element={<ProfileTutor />} />

      </Routes>
    </Router>
  );
}

export default App;
