import React, { useEffect, useState } from 'react';
import StatCards from '../../Shared/StatCards';
import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';    
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SchoolIcon from '@mui/icons-material/School';
import axios from 'axios';

export default function AdminStatData() {
  const [activeTutors, setActiveTutors] = useState(0);
  const [activeStudents, setActiveStudents] = useState(0);
  const [activeSessions, setActiveSessions] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8080/student/all')
      .then(res => {
        const allUsers = res.data || [];

        const activeTutors = allUsers.filter(u =>
          u.role?.toLowerCase() === 'tutor' && u.is_active
        ).length;

        const activeStudents = allUsers.filter(u =>
          u.role?.toLowerCase() === 'tutee' && u.is_active
        ).length;

        setActiveTutors(activeTutors);
        setActiveStudents(activeStudents);
      })
      .catch(err => {
        console.error("❌ Error fetching user data for stats:", err);
      });

    axios.get('http://localhost:8080/booking/all')
      .then(res => {
        const allBookings = res.data || [];

        const accepted = allBookings.filter(b =>
          b.status?.toLowerCase() === 'accepted'
        ).length;

        setActiveSessions(accepted);
      })
      .catch(err => {
        console.error("❌ Error fetching booking data:", err);
      });
  }, []);

  const stats = [
    { label: 'Active Tutors', value: activeTutors, icon: GroupIcon, color: 'orange' },
    { label: 'Active Students', value: activeStudents, icon: SchoolIcon, color: 'purple' },
    { label: 'Active Sessions', value: activeSessions, icon: PlayCircleOutlineIcon, color: 'yellow' },
    { label: 'Total Revenue', value: '₱25,000', icon: MonetizationOnIcon, color: 'green' }
  ];

  return <StatCards stats={stats} />;
}
