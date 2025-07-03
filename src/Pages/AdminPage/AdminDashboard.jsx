import React, { useState } from 'react';
import DashboardLayout from '../../Components/Layout/DashboardLayout';
import AdminStatData from '../../Components/Admin/Data/AdminStatData';
import AdminRecentActivity from '../../Components/Admin/Data/AdminRecentActivity';
import AdminSystemAnnouncement from '../../Components/Admin/Data/AdminSystemAnnouncement';
import SectionHeader from '../../Components/Shared/LandingPage/SectionHeader';
import { useNavigate } from 'react-router-dom';
import adminMenu from '../../RoutesConfig/menuAdmin';

export default function AdminDashboard() {
  const navigate = useNavigate(); 
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => setRefreshKey(prev => prev + 1);

  return (
    <DashboardLayout
      title="WILDTEACH"
      role="admin"
      menuItems={adminMenu(navigate)} 
    >
      ...

      <div className="admin-dashboard-section">
        {/* ✅ White central container */}
        <div className="dashboard-container">
          <SectionHeader
            badge="WELCOME BACK"
            title="Admin"
            highlight="Dashboard"
            subtitle="Manage tutors, students, and sessions efficiently."
            layout="vertical"
          />

          {/* Stat cards */}
          <div className="glass-card statcard-wrapper">
            <AdminStatData />
          </div>

          {/* Grid block */}
          <div className="dashboard-panels">
            <div className="glass-card">
              <AdminRecentActivity />
            </div>
            <div className="glass-card">
              <AdminSystemAnnouncement
                refreshTrigger={refreshKey}
                onRefresh={handleRefresh}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
