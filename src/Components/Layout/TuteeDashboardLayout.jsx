import React from "react";
import Sidebar from "../Shared/Sidebar";
import Header from "../Shared/Header";
import { useNavigate } from "react-router-dom";
import menuTutee from "../../RoutesConfig/MenuTutee";
import "../../Pages/Styles/TuteePage/TuteeGlobals.css";
import "../../Pages/Styles/TuteePage/TuteeDashboard.css";

export default function TuteeDashboardLayout({ title, children }) {
  const navigate = useNavigate();

  return (
    <div className="tutee-dashboard bright-theme">
      <Sidebar role="tutee" menuItems={menuTutee(navigate)} />
      <div className="tutee-content">
        <Header title={title} />
        {children}
      </div>
    </div>
  );
}
