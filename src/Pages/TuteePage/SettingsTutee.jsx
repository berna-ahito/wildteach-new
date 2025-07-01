import React from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import ChangePassword from "../../Components/Panels/ChangePassword";
import GroupIcon from "@mui/icons-material/Settings"; 
import "../../Pages/Styles/TutorPage.css"; 
import "../../Pages/Styles/TuteePage.css";

export default function SettingsTutee() {
  return (
    <DashboardLayout title="Settings" role="tutee">
      <div className="greeting-section">
        <div className="greeting-avatar">
          <GroupIcon fontSize="large" />
        </div>
        <div>
          <h1>Settings Panel</h1>
          <p>Manage your credentials and preferences here</p>
        </div>
      </div>

      <div className="forms">
        <ChangePassword role="tutee"/>
      </div>
    </DashboardLayout>
  );
}
