import { useState, useEffect } from "react";

export default function useTuteeData(studentId) {
  const [bookings, setBookings] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/booking/student/${studentId}`
        );
        const data = await res.json();

        const formatted = data.map((booking) => {
          const tutor = booking.tutor?.student;

          const localDateTime = new Date(
            new Date(booking.sessionDateTime).getTime()
          );

          return {
            id: booking.bookingId,
            tutorName: tutor
              ? `${tutor.first_name} ${tutor.last_name}`
              : "Unknown Tutor",
            subject: booking.subject,
            date: localDateTime.toLocaleString("en-PH", {
              weekday: "short",
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            }),
            status: booking.status,
          };
        });

        setBookings(formatted);
      } catch (err) {
        console.error("Error fetching student bookings:", err);
      }
    };

    if (studentId) {
      fetchBookings();
    }
  }, [studentId]);

  useEffect(() => {
    setAnnouncements([]);
  }, []);

  return { bookings, announcements };
}
