import React from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import ChangePassword from "../../Components/Panels/ChangePassword";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import menuTutor from "../../RoutesConfig/MenuTutor";

import "../../Pages/Styles/shared/CommonComponents.css";

export default function Settings( setIsLoggedIn, setUserRole) {
  const rawUser = localStorage.getItem("user");
  const user = rawUser ? JSON.parse(rawUser) : null;
    const navigate = useNavigate();


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
<DashboardLayout
      title="WILDTEACH"
      role="tutor"
      menuItems={menuTutor(navigate)}
      setIsLoggedIn={setIsLoggedIn}
      setUserRole={setUserRole}
    >      <div className="settings-container">
        <div className="settings-header-row">
          <SettingsIcon className="settings-icon" />
          <h2 className="highlighted-title shiny">Settings Panel</h2>
        </div>

        <ChangePassword role={role} userId={userId} email={email} />
      </div>
    </DashboardLayout>
  );
}
