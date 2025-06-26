import React, { useState } from 'react';
import RecentActivity from '../Panels/RecentActivity';

export default function TutorRecentActivity() {
  const [recent] = useState([
    { name: 'Juan Dela Cruz', subject: 'Physics', time: '3:30 PM', status: 'completed', avatar: 'JD' },
    { name: 'Ana R.', subject: 'Chemistry', time: '4:00 PM', status: 'upcoming', avatar: 'AR' },
  ]);

  return <RecentActivity recent={recent} />;
}
