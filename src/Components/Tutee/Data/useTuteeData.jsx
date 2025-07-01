import { useState, useEffect } from 'react';

const mockBookings = [
  {
    id: 1,
    tutor: 'John Doe',
    subject: 'IM2',
    date: 'June 25, 2025, 10:00 AM',
    status: 'Confirmed',
  },
  {
    id: 2,
    tutor: 'Jane Smith',
    subject: 'Physics',
    date: 'June 26, 2025, 2:00 PM',
    status: 'Pending',
  },
];

export default function useTuteeData() {
  const [bookings, setBookings] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBookings(mockBookings);
      setAnnouncements(mockAnnouncements);
    }, 300); 
  }, []);

  return { bookings, announcements };
}