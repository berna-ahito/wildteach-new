import { useState } from 'react';

export default function useMyBookingsData() {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');

  const sampleBookings = [
    {
      tutor: { student: { first_name: 'Jane', last_name: 'Smith' } },
      subject: 'Physics',
      sessionDateTime: '2025-06-26T14:00:00',
      status: 'Pending',
    },
    {
      tutor: { student: { first_name: 'John', last_name: 'Doe' } },
      subject: 'IM2',
      sessionDateTime: '2025-06-25T10:00:00',
      status: 'Confirmed',
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


//MODIFIED CODE | 06-30-25 | Data fetching and filtering for bookings
// import { useEffect, useState } from 'react';

// export default function useMyBookingsData() {
//   const [selectedYear, setSelectedYear] = useState('All');
//   const [selectedMonth, setSelectedMonth] = useState('All');
//   const [bookings, setBookings] = useState([]);

//   const studentId = localStorage.getItem('student_id');

//   useEffect(() => {
//     if (!studentId) return;

//     fetch('http://localhost:8080/booking/all')
//       .then((res) => res.json())
//       .then((data) => {
//         // Filter only bookings belonging to the logged-in student
//         const studentBookings = data.filter(b => b.student?.student_id === parseInt(studentId));
//         setBookings(studentBookings);
//       })
//       .catch((err) => {
//         console.error('Error fetching bookings:', err);
//       });
//   }, [studentId]);

//   const filteredBookings = bookings.filter((b) => {
//     const date = new Date(b.sessionDateTime);
//     const year = date.getFullYear().toString();
//     const month = date.toLocaleString('default', { month: 'long' });
//     const matchYear = selectedYear === 'All' || selectedYear === year;
//     const matchMonth = selectedMonth === 'All' || selectedMonth === month;
//     return matchYear && matchMonth;
//   });

//   return {
//     selectedYear,
//     selectedMonth,
//     setSelectedYear,
//     setSelectedMonth,
//     filteredBookings,
//   };
// }
