import React, { useState } from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import AdminSystemAnnouncement from "../../Components/Admin/Data/AdminSystemAnnouncement";
import AdminAddAnnounce from "../../Components/Admin/Data/AdminAddAnnounce";
import SectionHeader from "../../Components/Shared/LandingPage/SectionHeader";
import CampaignIcon from "@mui/icons-material/Campaign";
import { useNavigate } from "react-router-dom";
import adminMenu from "../../RoutesConfig/menuAdmin";

import "../../Pages/Styles/Shared/CommonComponents.css";

export default function Announcement() {
  const navigate = useNavigate();
  const [refreshKey, setRefreshKey] = useState(0); // 🔁 Refresh trigger

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
      <DashboardLayout
      title="WILDTEACH"
      role="admin"
      menuItems={adminMenu(navigate)}
    >
      <div className="admin-dashboard-section" style={{ marginTop: "0vw" }}>
        {/* ✅ Add this wrapper! */}
        <div className="dashboard-container">
          <SectionHeader
            badge="ADMIN PANEL"
            title="System"
            highlight="Announcements"
            subtitle="View, create, and manage public announcements for the system."
            layout="vertical"
            icon={<CampaignIcon fontSize="large" />}
          />

          <div className="dashboard-panels">
            <div className="glass-card"  style={{ minWidth: "50vw" }}>
              <AdminSystemAnnouncement
                key={refreshKey}
                refreshTrigger={refreshKey}
                onRefresh={handleRefresh}
              />
            </div>
            <div className="glass-card statcard-wrapper" style={{ marginLeft: "12vw" }}>
            <AdminAddAnnounce onAdd={handleRefresh} />
           </div>
          </div>

          
        </div>
      </div>
    </DashboardLayout>

  );
}
