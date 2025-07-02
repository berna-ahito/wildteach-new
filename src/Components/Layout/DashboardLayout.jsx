import React from "react";
import Sidebar from "../Shared/Sidebar";
import Header from "../Shared/Header";
import "../../Pages/Styles/TutorPage/TutorDashboard.css";
import "../../Pages/Styles/TutorPage/TutorGlobals.css";

export default function DashboardLayout({ title, children, role = "tutor" }) {
  return (
    <div className="tutor-dashboard bright-theme">
      <Sidebar role={role} />
      <div className="content">
        <Header title={title} />
        {children}
      </div>
    </div>
  );
}
