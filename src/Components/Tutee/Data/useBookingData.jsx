// src/Components/Tutee/Data/useBookingData.js
import { useEffect, useState } from "react";

export default function useBookingData(tutorId) {
  const [tutor, setTutor] = useState(null);
  const [subject, setSubject] = useState("");
  const [sessionDateTime, setSessionDateTime] = useState(new Date());

  useEffect(() => {
    if (!tutorId) return;

    fetch(`http://localhost:8080/tutor/getById/${tutorId}`)
      .then((res) => res.json())
      .then((data) => {
        setTutor(data);
      })
      .catch((err) => console.error("Error fetching tutor:", err));
  }, [tutorId]);

  return {
    tutor,
    subject,
    setSubject,
    sessionDateTime,
    setSessionDateTime,
  };
}
