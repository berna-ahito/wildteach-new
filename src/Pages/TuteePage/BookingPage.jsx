import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Shared/Header";
import Sidebar from "../../Components/Shared/Sidebar";
import menuTutee from "../../RoutesConfig/MenuTutee";
import BookingFormPanel from "../../Components/Tutee/Panels/BookingFormPanel";
import "../../Pages/Styles/TuteePage/TuteeGlobals.css";
import "../../Pages/Styles/TuteePage/TuteeDashboard.css";
import "../../Pages/Styles/TuteePage/TuteeBooking.css";

export default function BookingPage() {
  const navigate = useNavigate();
  const menuItems = menuTutee(navigate);

  return (
    <div className="tutee-dashboard bright-theme">
      <Sidebar menuItems={menuItems} />
      <div className="tutee-content">
        <Header title="WILDTEACH" />

        <div className="booking-header-container">
          <h1 className="booking-title">Request a Session</h1>
        </div>

        <div className="booking-card-wrapper">
          <div className="booking-card">
            <BookingFormPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
