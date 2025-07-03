import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/booking/all')
      .then((res) => {
        const raw = res.data || [];

        const cleaned = raw.map((b) => ({
          bookingId: b.bookingId,
          subject: b.subject,
          sessionDateTime: new Date(b.sessionDateTime).toLocaleString(),
          status: b.status.charAt(0).toUpperCase() + b.status.slice(1).toLowerCase(),
          studentName: b.student?.first_name + ' ' + b.student?.last_name || 'N/A',
          tutorName: b.tutor?.student?.first_name + ' ' + b.tutor?.student?.last_name || 'N/A',
        }));

        setBookings(cleaned);
      })
      .catch((err) => {
        console.error('❌ Failed to fetch bookings:', err);
      });
  }, []);

  return bookings;
}
