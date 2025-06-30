import React from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import ChangePassword from "../../Components/Panels/ChangePassword";
import GroupIcon from "@mui/icons-material/Settings";
import "../../Pages/Styles/TutorPage.css";
import "../../Pages/Styles/Admin.css";

export default function Settings() {
  const user = JSON.parse(localStorage.getItem("user"));

  // Fallbacks in case user is not logged in
  const role = user?.role || "student";
  const userId = role === "admin" ? user?.admin_id : user?.student_id;

  return (
    <DashboardLayout title="Settings" role={role}>
      <div className="greeting-section">
        <div className="greeting-avatar">
          <GroupIcon fontSize="large" />
        </div>
        <div>
          <h1>Settings Panel</h1>
          <p>Manage your credentials and system preferences here</p>
        </div>
      </div>

      <div className="forms">
        {/* ✅ Pass userId and role */}
        <ChangePassword role={role} userId={userId} />
      </div>
    </DashboardLayout>
  );
}
