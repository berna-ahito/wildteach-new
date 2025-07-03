import { useEffect, useState } from 'react';

export default function useMyBookingsData() {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const studentId = localStorage.getItem("student_id");

    const fetchBookings = async () => {
      try {
        const res = await fetch(`http://localhost:8080/booking/student/${studentId}`);
        if (!res.ok) throw new Error("Failed to fetch bookings");

        const data = await res.json();
        console.log("[MyBookings] Loaded bookings:", data);
        setBookings(data);
      } catch (err) {
        console.error("[MyBookings] Error loading:", err);
        setBookings([]);
      }
    };

    if (studentId) fetchBookings();
  }, []);

  const filteredBookings = bookings.filter((b) => {
    // const date = new Date(b.sessionDateTime);
    const date = new Date(new Date(b.sessionDateTime).getTime() + 8 * 60 * 60 * 1000); // ✅ Apply +8hr offset

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
