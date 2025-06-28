import React, { useState } from 'react';
import RecentActivity from '../../Panels/RecentActivity';

export default function TutorRecentActivity() {
  const [recent] = useState([
    {  avatar: 'JD', name: 'Juan Dela Cruz', subject: 'Physics', time: '3:30 PM', status: 'completed', },
    {  avatar: 'AR', name: 'Ana R.', subject: 'Chemistry', time: '4:00 PM', status: 'upcoming',  },
  ]);

  return <RecentActivity recent={recent} role='tutor'/>;
}
