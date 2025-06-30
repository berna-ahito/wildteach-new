import React from 'react';
import StatCards from '../../Shared/StatCards';
import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function TutorStatData() {
    const [activeStudents, setActiveStudents] = useState(0);
  
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
  
          setActiveStudents(activeStudents);
        })
        .catch(err => {
          console.error("❌ Error fetching user data for stats:", err);
        });
    }, []);
  const stats = [
    { label: 'Students', value: activeStudents, icon: GroupIcon, color: 'orange' },
    { label: 'Earnings', value: '₱1250', icon: MonetizationOnIcon, color: 'purple' },
    { label: 'Pending', value: 5, icon: HourglassBottomIcon, color: 'yellow' },
    { label: 'Sessions', value: 28, icon: CheckCircleIcon, color: 'green' },
  ];

  return <StatCards stats={stats} />;
}
