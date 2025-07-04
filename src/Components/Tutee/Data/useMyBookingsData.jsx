// import { useEffect, useState } from 'react';

// export default function useMyBookingsData() {
//   const [selectedYear, setSelectedYear] = useState('All');
//   const [selectedMonth, setSelectedMonth] = useState('All');
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const studentId = localStorage.getItem("student_id");

//     const fetchBookings = async () => {
//       try {
//         const res = await fetch(`http://localhost:8080/booking/student/${studentId}`);
//         if (!res.ok) throw new Error("Failed to fetch bookings");

//         const data = await res.json();
//         console.log("[MyBookings] Loaded bookings:", data);
//         setBookings(data);
//       } catch (err) {
//         console.error("[MyBookings] Error loading:", err);
//         setBookings([]);
//       }
//     };

//     if (studentId) fetchBookings();
//   }, []);

//   const filteredBookings = bookings.filter((b) => {
//     const [yr, mo, dy, hr, min, sec] = b.sessionDateTime
//       .replace("T", " ") // Convert "T" to space if present
//       .split(/[- :]/)
//       .map(Number);

//     const date = new Date(yr, mo - 1, dy, hr, min, sec);

//     const bookingYear = date.getFullYear().toString();
//     const bookingMonth = date.toLocaleString('default', { month: 'long' });

//     const matchYear = selectedYear === 'All' || selectedYear === bookingYear;
//     const matchMonth = selectedMonth === 'All' || selectedMonth === bookingMonth;

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


//FINAL CODE | 07-04-25
import { useEffect, useState } from "react";

export default function useMyBookingsData() {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("All");
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

  // Fixed full month list
  const months = [
    "All",
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  // Dynamically generated years from booking data
  const years = [
    "All",
    ...Array.from(new Set(
      bookings.map((b) =>
        new Date(new Date(b.sessionDateTime).getTime()).getFullYear().toString()
      )
    )).sort()
  ];


  // Filtered bookings based on selected month/year
  const filteredBookings = bookings.filter((b) => {
    const [yr, mo, dy, hr, min, sec] = b.sessionDateTime
      .replace("T", " ")
      .split(/[- :]/)
      .map(Number);

    const date = new Date(yr, mo - 1, dy, hr, min, sec);

    const bookingYear = date.getFullYear().toString();
    const bookingMonth = date.toLocaleString("default", { month: "long" });

    const matchYear = selectedYear === "All" || selectedYear === bookingYear;
    const matchMonth = selectedMonth === "All" || selectedMonth === bookingMonth;

    return matchYear && matchMonth;
  });

  return {
    selectedYear,
    selectedMonth,
    setSelectedYear,
    setSelectedMonth,
    filteredBookings,
    months,
    years,
  };
}
