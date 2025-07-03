import React, { useState } from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import AdminUsersStat from "../../Components/Admin/Data/AdminUsersStat";
import AdminStudent from "../../Components/Admin/Data/AdminStudent";
import SectionHeader from "../../Components/Shared/LandingPage/SectionHeader";
import { useNavigate } from "react-router-dom";
import adminMenu from "../../RoutesConfig/menuAdmin";

import "../../Pages/Styles/Admin.css";

export default function ManageUsers() {
  const navigate = useNavigate();
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshStats = () => setRefreshKey(prev => prev + 1);

  return (
    <DashboardLayout
      title="WILDTEACH"
      role="admin"
      menuItems={adminMenu(navigate)}
    >
      <div className="admin-dashboard-section" style ={{ marginTop: "30vw" }}>
        <SectionHeader
          badge="ADMIN PANEL"
          title="Manage"
          highlight="Users"
          subtitle="Monitor and manage students and tutors in the system."
          layout="vertical"
        />

        <div className="glass-card statcard-wrapper">
          <AdminUsersStat refreshTrigger={refreshKey} />
        </div>
        <div className="glass-card statcard-wrapper">
          <AdminStudent onRefresh={refreshStats} />
        </div>
      </div>
    </DashboardLayout>
  );
}
