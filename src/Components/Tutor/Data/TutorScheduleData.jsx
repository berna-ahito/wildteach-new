import React, { useEffect, useState } from "react";
import SchedulePanel from "../../Panels/SchedulePanel";

export default function TutorScheduleData() {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const tutorId = localStorage.getItem("tutor_id");

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/booking/sessions/tutor/today/${tutorId}`
        );
        if (!res.ok) throw new Error("Failed to fetch schedule");

        const data = await res.json();
        console.log("[Schedule] Today’s sessions:", data);

        const formatted = data.map((item) => {
          const rawTime = item.session_time;
          const formattedTime = formatTime(rawTime);

          console.log("[Schedule] Raw session time:", rawTime);
          console.log("[Schedule] Formatted local time:", formattedTime);

          return {
            time: formattedTime,
            student: formatStudentName(item.student_name),
            subject: item.subject || "Unknown",
            status: item.status?.toLowerCase() || "pending",
          };
        });

        setSchedule(formatted);
      } catch (err) {
        console.error("[Schedule] Error:", err);
        setSchedule([]);
      } finally {
        setLoading(false);
      }
    };

    if (tutorId) {
      fetchSchedule();
    }
  }, [tutorId]);

  const formatTime = (isoString) => {
    const local = new Date(isoString);
    return local.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatStudentName = (fullName) => {
    if (!fullName) return "Student";
    const parts = fullName.trim().split(" ");
    if (parts.length >= 2) return `${parts[0]} ${parts[1][0]}.`;
    return parts[0];
  };

  if (loading) return <p>Loading schedule...</p>;

  return <SchedulePanel schedule={schedule} />;
}
