import React, { useState } from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import AdminSystemAnnouncement from "../../Components/Admin/Data/AdminSystemAnnouncement";
import AdminAddAnnounce from "../../Components/Admin/Data/AdminAddAnnounce";
import CampaignIcon from "@mui/icons-material/Campaign";
import "../../Pages/Styles/Admin.css";

export default function Announcement() {
  const [refreshKey, setRefreshKey] = useState(0); // 🔁 Refresh trigger

  const handleAdd = () => {
    setRefreshKey(prev => prev + 1); // Change key to force refresh
  };

  return (
    <DashboardLayout title="Announcements" role="admin">
      <div className="greeting-section">
        <div className="greeting-avatar">
          <CampaignIcon fontSize="large" />
        </div>
        <div>
          <h1>Announcements</h1>
          <p>View and create important system updates</p>
        </div>
      </div>

      <div className="dashboard-panels">
        <AdminSystemAnnouncement key={refreshKey} />
        <AdminAddAnnounce onAdd={handleAdd} />
      </div>
    </DashboardLayout>
  );
}
