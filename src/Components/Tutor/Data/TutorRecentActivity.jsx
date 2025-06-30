import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecentActivity from '../../Panels/RecentActivity';

export default function TutorRecentActivity() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const fetchTutorActivity = async () => {
      try {
        const tutorId = localStorage.getItem('tutor_id');
        console.log('📦 [Fetch] tutor_id from localStorage:', tutorId);

        if (!tutorId) {
          console.warn('⚠️ No tutor_id found in localStorage.');
          return;
        }

        const res = await axios.get('http://localhost:8080/booking/all');
        const bookings = res.data || [];
        console.log('📦 [Fetch] Total bookings fetched:', bookings.length);

        const tutorBookings = bookings
          .filter(b => {
            const match = b.tutor?.tutor_id?.toString() === tutorId;
            if (match) console.log(`✅ Match found: Booking ID ${b.booking_id}`);
            return match;
          })
          .slice(-5)
          .map(b => ({
            avatar: (b.student?.first_name?.[0] || '?') + (b.student?.last_name?.[0] || ''),
            name: `${b.student?.first_name || ''} ${b.student?.last_name || ''}`,
            subject: b.subject || 'N/A',
            status: b.status?.toLowerCase() || 'unknown',
          }));

        console.log('🟢 Final tutor activity list:', tutorBookings);
        setRecent(tutorBookings);
      } catch (err) {
        console.error('❌ Error fetching tutor activity:', err);
      }
    };

    fetchTutorActivity();
  }, []);

  return <RecentActivity recent={recent} role="tutor" />;
}
