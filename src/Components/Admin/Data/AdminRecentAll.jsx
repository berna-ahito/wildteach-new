import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewAll from "../../Panels/ViewAll";
export default function AdminRecentAll() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const [tutorsRes, bookingsRes] = await Promise.all([
          axios.get("http://localhost:8080/tutor/all"),
          axios.get("http://localhost:8080/booking/all")
        ]);

        const tutorActivity = (tutorsRes.data || []).map((t) => {
          const s = t.student || {};
          return {
            avatar: (s.first_name?.[0] || "?") + (s.last_name?.[0] || ""),
            name: `${s.first_name} ${s.last_name}`,
            content: "New tutor registered",
            status: "New"
          };
        });

        const bookingActivity = (bookingsRes.data || []).map((b) => ({
          avatar: (b.student?.first_name?.[0] || "?") + (b.student?.last_name?.[0] || ""),
          name: `${b.student?.first_name || ""} ${b.student?.last_name || ""}`,
          content: `${b.subject} booking`,
          status: b.status
        }));

        setRecent([...tutorActivity, ...bookingActivity]);
      } catch (err) {
        console.error("❌ Error fetching recent activity:", err);
      }
    };

    fetchRecent();
  }, []);

  const handleDelete = (id) => {
    console.log("🗑️ Delete not implemented, item id:", id);
  };

  return <ViewAll data={recent} type="activity" handleDelete={handleDelete} />;
}
