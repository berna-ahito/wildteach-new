import React from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import ChangePassword from "../../Components/Panels/ChangePassword";
import GroupIcon from "@mui/icons-material/Settings"; // Or any icon you prefer
import "../../Pages/Styles/TutorPage.css"; // 👈 For consistent styling
import "../../Pages/Styles/Admin.css"

export default function Settings() {
  return (
    <DashboardLayout title="Settings" role="admin">
      <div className="greeting-section">
        <div className="greeting-avatar">
          <GroupIcon fontSize="large" />
        </div>
        <div>
          <h1>Settings Panel</h1>
          <p>Manage your credentials and system preferences here</p>
          
        </div>
      </div>

      <div className = "forms">
        <ChangePassword role="admin"/>
      </div>

    </DashboardLayout>
  );
}
