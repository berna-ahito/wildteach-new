import React, { useEffect, useState } from 'react';
import StatCards from '../../Shared/StatCards';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import EventNoteIcon from '@mui/icons-material/EventNote';
import axios from 'axios';

export default function AdminSessionData() {
  const [activeSessions, setActiveSessions] = useState(0);
  const [pendingSessions, setPendingSessions] = useState(0);
  const [totalSessions, setTotalSessions] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8080/booking/all')
      .then(res => {
        const bookings = res.data || [];

        // Exclude cancelled sessions
        const validBookings = bookings.filter(b =>
          b.status?.toUpperCase() !== 'CANCELLED'
        );

        const active = validBookings.filter(b =>
          b.status?.toUpperCase() === 'ACCEPTED' || b.status?.toUpperCase() === 'SCHEDULED'
        ).length;

        const pending = validBookings.filter(b =>
          b.status?.toUpperCase() === 'PENDING'
        ).length;

        setActiveSessions(active);
        setPendingSessions(pending);
        setTotalSessions(validBookings.length);
      })
      .catch(err => {
        console.error("❌ Error fetching booking data:", err);
      });
  }, []);

  const stats = [
    { label: 'Active Sessions', value: activeSessions, icon: PlayCircleOutlineIcon, color: 'yellow' },
    { label: 'Pending Sessions', value: pendingSessions, icon: HourglassEmptyIcon, color: 'orange' },
    { label: 'Total Sessions', value: totalSessions, icon: EventNoteIcon, color: 'blue' }
  ];

  return <StatCards stats={stats} />;
}
