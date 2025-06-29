import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../Components/Layout/DashboardLayout';
import TutorStatData from '../../Components/Tutor/Data/TutorStatData';
import TutorScheduleData from '../../Components/Tutor/Data/TutorScheduleData';
import TutorRecentActivity from '../../Components/Tutor/Data/TutorRecentActivity';
import WavingHandIcon from '@mui/icons-material/WavingHand';

export default function TutorDashboard() {
  const navigate = useNavigate();
  return (
    <DashboardLayout title="WILDTEACH" role='tutor'>
      <header className="greeting-section">
        <div className="greeting-avatar">
          <WavingHandIcon fontSize="large" />
        </div>
        <div>
          <h1>Hello, User!</h1>
          <p>Welcome back to your learning hub!</p>
        </div>
      </header>

      <TutorStatData />
      <div className="dashboard-panels">
        <TutorScheduleData />
        <TutorRecentActivity />
      </div>
    </DashboardLayout>
  );
}
