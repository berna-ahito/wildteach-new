import React, { useEffect, useState } from 'react';
import RecentActivity from '../../Panels/RecentActivity';
import axios from 'axios';

export default function AdminRecentActivity() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const [tutorsRes, bookingsRes] = await Promise.all([
          axios.get('http://localhost:8080/tutor/all'),
          axios.get('http://localhost:8080/booking/all')
        ]);

        const recentTutors = (tutorsRes.data || [])
          .slice(-3) // Get latest 3
          .map(tutor => {
            const student = tutor.student || {};
            return {
              avatar: (student.first_name?.[0] || '?') + (student.last_name?.[0] || ''),
              content: 'New tutor registered',
              name: `${student.first_name || 'Unknown'} ${student.last_name || ''}`,
              time: 'Just now',
              status: 'new'
            };
          });

        const recentBookings = (bookingsRes.data || [])
          .filter(b => b.status?.toLowerCase() === 'accepted')
          .slice(-3)
          .map(b => {
            return {
              avatar: (b.student?.first_name?.[0] || '?') + (b.student?.last_name?.[0] || ''),
              content: 'Session accepted',
              name: `${b.student?.first_name || ''} ${b.student?.last_name || ''}`,
              time: 'Just now',
              status: 'completed'
            };
          });

        // Combine and sort by most recent (you can add timestamps later)
        const combined = [...recentTutors, ...recentBookings];
        setRecent(combined.slice(0, 5)); // Keep latest 5
      } catch (error) {
        console.error('❌ Failed to fetch recent activity:', error);
      }
    };

    fetchActivity();
  }, []);

  return <RecentActivity recent={recent} role="admin" />;
}
