import React from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import ChangePassword from "../../Components/Panels/ChangePassword";
import GroupIcon from "@mui/icons-material/Settings";
import "../../Pages/Styles/shared/CommonComponents.css";
import "../../Pages/Styles/TutorPage/TutorSettings.css";
import "../../Pages/Styles/TutorPage/TutorGlobals.css";
import "../../Pages/Styles/Admin.css";
import ChangeEmail from "../../Components/Panels/ChangeEmail";
import AdminAddNewAdmin from "../../Components/Admin/Data/AdminAddNewAdmin";
import AdminDeleteAccount from "../../Components/Admin/Data/AdminDeleteAccount";

export default function Settings() {
  const user = JSON.parse(localStorage.getItem("user"));

  const role = user?.role || "student";
  const userId = role === "admin" ? user?.admin_id : user?.student_id;
  const email = user?.email || "";
  console.log("🧠 Loaded user from localStorage:", user);

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
        {/* ✅ Now includes email prop */}
        <ChangeEmail role={role} userId={userId} email={email} />
        <ChangePassword role={role} userId={userId} email={email} />
        <div className="forms-buttons">
          <AdminAddNewAdmin />
          <AdminDeleteAccount />
        </div>
      </div>
    </DashboardLayout>
  );
}
