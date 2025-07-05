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
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <DashboardLayout
      title="WILDTEACH"
      role="admin"
      menuItems={adminMenu(navigate)}
    >
      <div className="admin-dashboard-section">
        <div className="dashboard-container" style={{ marginBottom: "20%" }}>
          <SectionHeader
            badge="ADMIN PANEL"
            title="System"
            highlight="Announcements"
            subtitle="View, create, and manage public announcements for the system"
            layout="vertical"
            icon={<CampaignIcon fontSize="large" />}
          />

          <div className="dashboard-panels">
            <div className="glass-card">
              <AdminSystemAnnouncement
                key={refreshKey}
                refreshTrigger={refreshKey}
                onRefresh={handleRefresh}
              />
            </div>
            <div className="forms-buttons announce">
              <AdminAddAnnounce onAdd={handleRefresh} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
