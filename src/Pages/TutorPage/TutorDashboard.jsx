import React from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import TutorStatData from "../../Components/Tutor/Data/TutorStatData";
import TutorScheduleData from "../../Components/Tutor/Data/TutorScheduleData";
import TutorRecentActivity from "../../Components/Tutor/Data/TutorRecentActivity";
import SectionHeader from "../../Components/Shared/LandingPage/SectionHeader";
import menuTutor from "../../RoutesConfig/MenuTutor";
import { useNavigate } from "react-router-dom";

import "../../Pages/Styles/shared/CommonGlobals.css";
import "../../Pages/Styles/shared/CommonComponents.css";

export default function TutorDashboard({ setIsLoggedIn, setUserRole }) {
  const navigate = useNavigate();

  return (
    <DashboardLayout
      title="WILDTEACH"
      role="tutor"
      menuItems={menuTutor(navigate)}
      setIsLoggedIn={setIsLoggedIn}
      setUserRole={setUserRole}
    >
      <div className="tutor-dashboard-section">
        <div className="dashboard-container">
          <SectionHeader
            badge="WELCOME BACK"
            title="Tutor"
            highlight="Dashboard"
            subtitle="Empower students through each session."
            layout="vertical"
          />

          <div className="glass-card statcard-wrapper">
            <TutorStatData />
          </div>

          <div className="dashboard-panels">
            <div className="glass-card">
              <TutorScheduleData />
            </div>
            <div className="glass-card">
              <TutorRecentActivity />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
