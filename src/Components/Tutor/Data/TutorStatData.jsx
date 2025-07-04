import React, { useState, useEffect } from "react";
import StatCards from "../../Shared/StatCards";
import GroupIcon from "@mui/icons-material/Group";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import axios from "axios";

export default function TutorStatData() {
  const [activeStudents, setActiveStudents] = useState(0);
  const [pendingSessions, setPendingSessions] = useState(0);
  const [totalSessions, setTotalSessions] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/student/all")
      .then((res) => {
        const allUsers = res.data || [];
        const activeTutees = allUsers.filter(
          (u) => u.role?.toLowerCase() === "tutee" && u.is_active
        ).length;
        setActiveStudents(activeTutees);
      })
      .catch((err) => {
        console.error("❌ Error fetching user data for stats:", err);
      });
  }, []);

  useEffect(() => {
    const tutorId = localStorage.getItem("tutor_id");
    if (!tutorId) return;

    axios
      .get(`http://localhost:8080/booking/tutor/${tutorId}`)
      .then((res) => {
        const bookings = res.data || [];
        const pending = bookings.filter((b) => b.status === "Pending").length;
        const total = bookings.length;

        setPendingSessions(pending);
        setTotalSessions(total);
      })
      .catch((err) => {
        console.error("❌ Error fetching bookings:", err);
      });
  }, []);

  const stats = [
    {
      label: "Students",
      value: activeStudents,
      icon: <GroupIcon className="statcard-icon statcard-orange" />,
      color: "orange",
    },
    {
      label: "Pending",
      value: pendingSessions,
      icon: <HourglassBottomIcon className="statcard-icon statcard-yellow" />,
      color: "yellow",
    },
    {
      label: "Sessions",
      value: totalSessions,
      icon: <CheckCircleIcon className="statcard-icon statcard-green" />,
      color: "green",
    },
  ];

  return <StatCards stats={stats} />;
}
