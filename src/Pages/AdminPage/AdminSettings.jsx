import React from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import ChangePassword from "../../Components/Panels/ChangePassword";
import ChangeEmail from "../../Components/Panels/ChangeEmail";
import AdminAddNewAdmin from "../../Components/Admin/Data/AdminAddNewAdmin";
import AdminDeleteAccount from "../../Components/Admin/Data/AdminDeleteAccount";
import SectionHeader from "../../Components/Shared/LandingPage/SectionHeader";
import adminMenu from "../../RoutesConfig/menuAdmin";
import { useNavigate } from "react-router-dom";

import "../../Pages/Styles/shared/CommonComponents.css";
import "../../Pages/Styles/TutorPage/TutorSettings.css";
import "../../Pages/Styles/TutorPage/TutorGlobals.css";
import "../../Pages/Styles/Admin/Admin.css";

export default function Settings() {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role || "student";
  const userId = role === "admin" ? user?.admin_id : user?.student_id;
  const email = user?.email || "";
  const navigate = useNavigate();

  return (
    <DashboardLayout
      title="WILDTEACH"
      role={role}
      menuItems={adminMenu(navigate)}
    >
      <div className="admin-dashboard-section" style={{ paddingTop: "-15vw" }}>
        <div className="dashboard-container">
          <SectionHeader
            badge="SYSTEM"
            title="Admin"
            highlight="Settings"
            subtitle="Manage your credentials and system preferences here."
            layout="vertical"
          />
          <div className="forms">
            <ChangeEmail role={role} userId={userId} email={email} />
            <ChangePassword role={role} userId={userId} email={email} />
            <div className="forms-buttons">
              <AdminAddNewAdmin />
              <AdminDeleteAccount />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
