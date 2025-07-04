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

export default function TutorDashboard() {
  const navigate = useNavigate();

  return (
    <DashboardLayout
      title="WILDTEACH"
      role="tutor"
      menuItems={menuTutor(navigate)}
    >
      <div className="tutor-dashboard-section">
        {/* ✅ White central container */}
        <div className="dashboard-container">
          <SectionHeader
            badge="WELCOME BACK"
            title="Tutor"
            highlight={<span className="highlight-gold">Dashboard</span>}
            subtitle="Empower students through each session."
            layout="vertical"
          />

          {/* Stat cards */}
          <div className="glass-card statcard-wrapper">
            <TutorStatData />
          </div>

          {/* Grid block */}
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
