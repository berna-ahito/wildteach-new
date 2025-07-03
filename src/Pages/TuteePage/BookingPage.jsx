import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import menuTutee from "../../RoutesConfig/MenuTutee";
import BookingFormPanel from "../../Components/Tutee/Panels/BookingFormPanel";

import "../../Pages/Styles/TuteePage/TuteeGlobals.css";
import "../../Pages/Styles/shared/CommonComponents.css";
import "../../Pages/Styles/TuteePage/TuteeBooking.css";

export default function BookingPage() {
  const navigate = useNavigate();
  const menuItems = menuTutee(navigate);

  return (
    <DashboardLayout title="WILDTEACH" role="tutee" menuItems={menuItems}>
      <div className="booking-header-container">
        <h1 className="booking-title">Request a Session</h1>
      </div>

      <div className="booking-card-wrapper">
        <div className="booking-card">
          <BookingFormPanel />
        </div>
      </div>
    </DashboardLayout>
  );
}
