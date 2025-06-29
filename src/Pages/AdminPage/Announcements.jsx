import React from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import AdminSystemAnnouncement from "../../Components/Admin/Data/AdminSystemAnnouncement";
import AdminAddAnnounce from "../../Components/Admin/Data/AdminAddAnnounce";
import CampaignIcon from "@mui/icons-material/Campaign"; // Optional icon
import "../../Pages/Styles/Admin.css";

export default function Announcement() {
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
        <AdminSystemAnnouncement />
        <AdminAddAnnounce />
      </div>
    </DashboardLayout>
  );
}
