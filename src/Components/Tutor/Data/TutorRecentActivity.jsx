import React, { useEffect, useState } from "react";
import axios from "axios";
import RecentActivity from "../../Panels/RecentActivity";

export default function TutorRecentActivity() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const fetchTutorActivity = async () => {
      try {
        const tutorId = localStorage.getItem("tutor_id");
        if (!tutorId) return;

        const res = await axios.get(
          `http://localhost:8080/booking/tutor/${tutorId}`
        );
        const bookings = res.data || [];

        const tutorBookings = bookings.slice(-5).map((b) => ({
          avatar:
            (b.student?.first_name?.[0] || "?") +
            (b.student?.last_name?.[0] || ""),
          name: `${b.student?.first_name || ""} ${b.student?.last_name || ""}`,
          subject: b.subject || "N/A",
          status: b.status?.toLowerCase() || "unknown",
        }));

        setRecent(tutorBookings);
      } catch (err) {
        console.error("❌ Error fetching tutor activity:", err);
      }
    };

    fetchTutorActivity();
  }, []);

  return <RecentActivity recent={recent} role="tutor" />;
}
