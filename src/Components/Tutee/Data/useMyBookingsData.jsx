import { useState } from 'react';

export default function useMyBookingsData() {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');

  const sampleBookings = [
    {
      tutor: { student: { first_name: 'Jane', last_name: 'Doe' } },
      subject: 'Mathematics',
      sessionDateTime: '2025-06-25T14:00:00',
      status: 'Confirmed',
    },
    {
      tutor: { student: { first_name: 'John', last_name: 'Smith' } },
      subject: 'Science',
      sessionDateTime: '2025-07-26T10:30:00',
      status: 'Upcoming',
    },
    {
      tutor: { student: { first_name: 'Alice', last_name: 'Johnson' } },
      subject: 'History',
      sessionDateTime: '2025-08-01T09:00:00',
      status: 'Cancelled',
    },
  ];

  const filteredBookings = sampleBookings.filter((b) => {
    const date = new Date(b.sessionDateTime);
    const year = date.getFullYear().toString();
    const month = date.toLocaleString('default', { month: 'long' });
    const matchYear = selectedYear === 'All' || selectedYear === year;
    const matchMonth = selectedMonth === 'All' || selectedMonth === month;
    return matchYear && matchMonth;
  });

  return {
    selectedYear,
    selectedMonth,
    setSelectedYear,
    setSelectedMonth,
    filteredBookings,
  };
}
