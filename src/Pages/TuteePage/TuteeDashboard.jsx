import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import UpcomingSchedulePanel from "../../Components/Tutee/Panels/UpcomingSchedulePanel";
import Announcement from "../../Components/Panels/Announcement";
import SectionHeader from "../../Components/Shared/LandingPage/SectionHeader";
import menuTutee from "../../RoutesConfig/MenuTutee";
import WavingHandIcon from "@mui/icons-material/WavingHand";

import "../../Pages/Styles/shared/CommonGlobals.css";
import "../../Pages/Styles/shared/CommonComponents.css";

export default function TuteeDashboard() {
  const [studentName, setStudentName] = useState("");
  const studentId = localStorage.getItem("student_id");
  const navigate = useNavigate();

  useEffect(() => {
    if (!studentId) return;

    fetch(`http://localhost:8080/student/getById/${studentId}`)
      .then((res) => res.json())
      .then((data) => {
        setStudentName(data.first_name);
      })
      .catch((err) => {
        console.error("Failed to fetch student name:", err);
      });
  }, [studentId]);

  return (
    <DashboardLayout
      title="WILDTEACH"
      role="tutee"
      menuItems={menuTutee(navigate)}
    >
      <div className="tutee-dashboard-section">
        <SectionHeader
          badge={<WavingHandIcon style={{ marginRight: 6 }} />}
          title="Hello,"
          highlight={studentName || "Student"}
          subtitle="Welcome back to your learning journey!"
          layout="vertical"
        />

        <div className="dashboard-panels">
          <div className="glass-card">
            <UpcomingSchedulePanel />
          </div>
          <div className="glass-card">
            <Announcement />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
