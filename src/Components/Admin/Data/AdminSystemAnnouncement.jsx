import { useEffect, useState } from "react";
import axios from "axios";
import Announcement from "../../Panels/Announcement";

export default function AdminSystemAnnouncement({ refreshTrigger, onRefresh }) {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/announcement/getAllAnnounce")
      .then((response) => {
        const data = response.data;
        const recentFour = data
          .slice(-4)
          .reverse()
          .map((item) => ({
            id: item.announcement_id,
            title: item.title,
            content: item.message
          }));
        setAnnouncements(recentFour);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch announcements:", err);
        setError("Failed to load announcements.");
        setLoading(false);
      });
  }, [refreshTrigger]);

  if (loading) return <p>Loading announcements...</p>;
  if (error) return <p>{error}</p>;

  return <Announcement announcements={announcements} onRefresh={onRefresh} />;
}
