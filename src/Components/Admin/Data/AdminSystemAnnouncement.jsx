import Announcement from "../../Panels/Announcement";
import { useState } from "react";

export default function AdminSystemAnnouncement() {
  const [announcements] = useState([
    { id: 1, title: "System Maintenance", content: "The system will be down for maintenance on Saturday from 2 AM to 4 AM." },
    { id: 2, title: "New Feature Release", content: "We have released a new feature that allows users to filter sessions by subject." },
    { id: 3, title: "Holiday Schedule", content: "Please note the holiday schedule for the upcoming week." }
  ]);

  return <Announcement announcements={announcements} />;
}
