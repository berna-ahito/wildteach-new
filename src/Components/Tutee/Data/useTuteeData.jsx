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

const mockAnnouncements = [
  {
    id: 1,
    message: 'Midterm schedule will be posted soon.',
    datePosted: 'June 20, 2025, 8:00 AM',
  },
  {
    id: 2,
    message: 'Don’t forget to complete your profile!',
    datePosted: 'June 21, 2025, 1:30 PM',
  },
];

export default function useTuteeData() {
  const [bookings, setBookings] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Simulate async fetch
    setTimeout(() => {
      setBookings(mockBookings);
      setAnnouncements(mockAnnouncements);
    }, 300); // delay for mock effect
  }, []);

  return { bookings, announcements };
}
