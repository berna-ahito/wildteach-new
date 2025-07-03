import React, { useState } from 'react';
import DashboardLayout from '../../Components/Layout/DashboardLayout';
import AdminStatData from '../../Components/Admin/Data/AdminStatData';
import AdminRecentActivity from '../../Components/Admin/Data/AdminRecentActivity';
import GroupIcon from '@mui/icons-material/Group';
import AdminSystemAnnouncement from '../../Components/Admin/Data/AdminSystemAnnouncement';

export default function AdminDashboard() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => setRefreshKey(prev => prev + 1);

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
        <AdminSystemAnnouncement
          refreshTrigger={refreshKey}
          onRefresh={handleRefresh} 
        />
      </div>
    </DashboardLayout>
  );
}
