import { useEffect, useState } from "react";

export default function useBookingData(tutorId) {
  const [tutor, setTutor] = useState(null);
  const [subject, setSubject] = useState("");

  // Ensure time is set to a local datetime without timezone offset affecting MySQL
  const getInitialLocalDate = () => {
    const now = new Date();
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours(),
      now.getMinutes(),
      0
    );
  };

  const [sessionDateTime, setSessionDateTime] = useState(getInitialLocalDate());

  useEffect(() => {
    if (!tutorId) return;

    fetch(`http://localhost:8080/tutor/getById/${tutorId}`)
      .then((res) => res.json())
      .then((data) => setTutor(data))
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
