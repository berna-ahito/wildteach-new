// src/Pages/TuteePage/BookingPage.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../Components/Shared/Header';
import Sidebar from '../../Components/Shared/Sidebar';
import menuTutee from '../../RoutesConfig/MenuTutee';
import BookingFormPanel from '../../Components/Tutee/Panels/BookingFormPanel';
import '../Styles/TuteePage.css';

export default function BookingPage() {
  const navigate = useNavigate();
  const { tutorId } = useParams(); // ✅ Get tutorId from route params
  const menuItems = menuTutee(navigate);

  return (
    <div className="tutee-dashboard bright-theme">
      <Sidebar menuItems={menuItems} />
      <div className="tutee-content">
        <Header title="WILDTEACH" />
        <div className="find-tutor-container">
          <h1>Request a Session</h1>
        </div>
        <div className="booking-page-container">
          <BookingFormPanel tutorId={tutorId} /> {/* ✅ Pass tutorId */}
        </div>
      </div>
    </div>
  );
}
