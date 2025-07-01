import React, { useEffect, useState } from 'react';
import SessionList from '../../Panels/SessionList';

export default function TutorSessionData() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const tutorId = localStorage.getItem("tutor_id");

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const res = await fetch(`http://localhost:8080/booking/tutor/${tutorId}`);
        if (!res.ok) throw new Error("Failed to fetch sessions");

        const data = await res.json();
        console.log("[Sessions] Loaded sessions:", data);

        const formatted = data.map((s) => ({
          name: s.student?.first_name + " " + s.student?.last_name,
          subject: s.subject,
          date: new Date(s.sessionDateTime).toLocaleDateString(),
          duration: "1 hr", // Or calculate from data if available
          month: new Date(s.sessionDateTime).toLocaleString('default', { month: 'long' }),
          year: new Date(s.sessionDateTime).getFullYear().toString(),
        }));

        setSessions(formatted);
      } catch (err) {
        console.error("[Sessions] Error loading:", err);
        setSessions([]);
      } finally {
        setLoading(false);
      }
    };

    if (tutorId) fetchSessions();
  }, [tutorId]);

  if (loading) return <p>Loading sessions...</p>;

  return <SessionList sessions={sessions} />;
}
