import React from 'react';
import TuteeDashboardLayout from '../../Components/Layout/TuteeDashboardLayout';
import UpcomingSchedulePanel from '../../Components/Tutee/Panels/UpcomingSchedulePanel';
import AnnouncementsPanel from '../../Components/Tutee/Panels/AnnouncementsPanel';
import WavingHandIcon from '@mui/icons-material/WavingHand';

export default function TuteeDashboard() {
  return (
    <TuteeDashboardLayout title="WILDTEACH">
      <header className="greeting-section">
        <div className="greeting-avatar">
          <WavingHandIcon fontSize="large" />
        </div>
        <div>
          <h1>Hello, Student!</h1>
          <p>Welcome back to your learning journey!</p>
        </div>
      </header>

      <div className="dashboard-panels">
        <UpcomingSchedulePanel />
        <AnnouncementsPanel />
      </div>
    </TuteeDashboardLayout>
  );
}
