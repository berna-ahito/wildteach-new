import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import UpcomingSchedulePanel from "../../Components/Tutee/Panels/UpcomingSchedulePanel";
import AdminSystemAnnouncement from "../../Components/Admin/Data/AdminSystemAnnouncement";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import "../../Pages/Styles/TutorPage/TutorDashboard.css";
import "../../Pages/Styles/TutorPage/TutorGlobals.css";

export default function TuteeDashboard() {
  const [studentName, setStudentName] = useState("");
  const studentId = localStorage.getItem("student_id");

  // 🔁 Fetch student first_name
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
    <DashboardLayout title="WILDTEACH" role="tutee">
      <div className="greeting-section">
        <div className="greeting-avatar">
          <WavingHandIcon fontSize="large" />
        </div>
        <div>
          <h1>Hello, {studentName || "Student"}!</h1>
          <p>Welcome back to your learning journey!</p>
        </div>
      </div>

      <div className="dashboard-panels">
        <UpcomingSchedulePanel />
        <AdminSystemAnnouncement />
      </div>
    </DashboardLayout>
  );
}
