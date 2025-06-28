// src/Components/Tutee/Data/useBookingData.js
import { useEffect, useState } from 'react';

export default function useBookingData(tutorId) {
  const [tutor, setTutor] = useState(null);
  const [subject, setSubject] = useState('');
  const [sessionDateTime, setSessionDateTime] = useState(new Date());

  useEffect(() => {
    fetch('http://localhost:8080/tutor/all')
      .then(res => res.json())
      .then(data => {
        const foundTutor = data.find(t => t.student?.student_id === parseInt(tutorId));
        setTutor(foundTutor);
      })
      .catch(err => console.error('Error fetching tutors:', err));
  }, [tutorId]);

  return {
    tutor,
    subject,
    setSubject,
    sessionDateTime,
    setSessionDateTime,
  };
}
