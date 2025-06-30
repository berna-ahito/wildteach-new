import React, { useState, useEffect } from 'react';
import StatCards from '../../Shared/StatCards';
import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';

export default function TutorStatData() {
  const [activeStudents, setActiveStudents] = useState(0);
  const [pendingSessions, setPendingSessions] = useState(0);
  const [totalSessions, setTotalSessions] = useState(0);

  // 🔶 Fetch all students for stats
  useEffect(() => {
    axios.get('http://localhost:8080/student/all')
      .then(res => {
        const allUsers = res.data || [];

        const activeTutees = allUsers.filter(u =>
          u.role?.toLowerCase() === 'tutee' && u.is_active
        ).length;

        setActiveStudents(activeTutees);
      })
      .catch(err => {
        console.error("❌ Error fetching user data for stats:", err);
      });
  }, []);

  // 🔷 Fetch tutor sessions
  useEffect(() => {
    const tutorId = localStorage.getItem('tutor_id');
    console.log("📦 Tutor ID (stat fetch):", tutorId);

    if (!tutorId) return;

    axios.get('http://localhost:8080/booking/all')
      .then(res => {
        const bookings = res.data || [];

        const mySessions = bookings.filter(b => b.tutor?.tutor_id?.toString() === tutorId);

        const pending = mySessions.filter(b => b.status === "Pending").length;
        const total = mySessions.length;

        console.log("📊 Sessions found:", total, "| Pending:", pending);

        setPendingSessions(pending);
        setTotalSessions(total);
      })
      .catch(err => {
        console.error("❌ Error fetching bookings:", err);
      });
  }, []);

  const stats = [
    { label: 'Students', value: activeStudents, icon: GroupIcon, color: 'orange' },
    { label: 'Earnings', value: '₱1250', icon: MonetizationOnIcon, color: 'purple' }, // Placeholder
    { label: 'Pending', value: pendingSessions, icon: HourglassBottomIcon, color: 'yellow' },
    { label: 'Sessions', value: totalSessions, icon: CheckCircleIcon, color: 'green' },
  ];

  return <StatCards stats={stats} />;
}
