// AdminDashboard.jsx
import React from 'react';
import DashboardLayout from '../../Components/Layout/DashboardLayout';
import AdminStatData from '../../Components/Admin/Data/AdminStatData';
import AdminRecentActivity from '../../Components/Admin/Data/AdminRecentActivity';
import { useNavigate } from 'react-router-dom';  
import GroupIcon from '@mui/icons-material/Group';
import "../Styles/TutorPage.css";
import AdminSystemAnnouncement from '../../Components/Admin/Data/AdminSystemAnnouncement';

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <DashboardLayout title="WILDTEACH" role="admin">
      <div className="greeting-section">
        <div className="greeting-avatar">
          <GroupIcon fontSize="large" />
        </div>
        <div>
          <h1>Welcome Admin</h1>
          <p>Manage your platform from here!</p>
        </div>
      </div>

     
      <AdminStatData />
      <div className="dashboard-panels">
        <AdminRecentActivity />
        <AdminSystemAnnouncement />
      </div>
    </DashboardLayout>
  );
}
