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

        const tutorBookings = bookings.slice(-5).map((b) => {
          const avatarUrl = b.profileImage
            ? `http://localhost:8080/uploads/profile/${b.profileImage}`
            : null;

          const data = {
            avatar: b.studentName?.[0] || "?",
            avatarUrl,
            name: b.studentName || "Unknown",
            subject: b.subject || "N/A",
            status: b.status?.toLowerCase() || "unknown",
          };

          console.log("🧠 Booking:", data);
          return data;
        });

        console.log("✅ Recent Activity:", tutorBookings);
        setRecent(tutorBookings);
      } catch (err) {
        console.error("❌ Error fetching tutor activity:", err);
      }
    };

    fetchTutorActivity();
  }, []);

  return <RecentActivity recent={recent} role="tutor" />;
}
