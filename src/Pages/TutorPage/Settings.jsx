import React from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import ChangePassword from "../../Components/Panels/ChangePassword";
import SettingsIcon from "@mui/icons-material/Settings";
import "../../Pages/Styles/shared/CommonComponents.css";

export default function Settings() {
  const rawUser = localStorage.getItem("user");
  const user = rawUser ? JSON.parse(rawUser) : null;

  if (!user) {
    return (
      <div className="settings-error">
        <h2>❌ No user logged in</h2>
        <p>Please log in again to access settings.</p>
      </div>
    );
  }

  const role = user.role?.toLowerCase() || "tutor";
  const userId = user.student_id;
  const email = user.email || "";

  return (
    <DashboardLayout title="Settings" role={role}>
      <div className="settings-container">
        <div className="settings-header-row">
          <SettingsIcon className="settings-icon" />
          <h2 className="section-title">Settings Panel</h2>
        </div>

        <ChangePassword role={role} userId={userId} email={email} />
      </div>
    </DashboardLayout>
  );
}
