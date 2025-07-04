import React, { useEffect, useState } from "react";
import StatCards from "../../Shared/StatCards";
import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";
import PersonOffIcon from "@mui/icons-material/PersonOff"; // for deactivated users
import axios from "axios";

export default function AdminStatData({ refreshTrigger }) {
  const [activeTutors, setActiveTutors] = useState(0);
  const [deactivatedTutors, setDeactivatedTutors] = useState(0);
  const [activeStudents, setActiveStudents] = useState(0);
  const [deactivatedStudents, setDeactivatedStudents] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/student/all")
      .then((res) => {
        const allUsers = res.data || [];

        const activeTutors = allUsers.filter(
          (u) => u.role?.toLowerCase() === "tutor" && u.is_active
        ).length;

        const deactivatedTutors = allUsers.filter(
          (u) => u.role?.toLowerCase() === "tutor" && !u.is_active
        ).length;

        const activeStudents = allUsers.filter(
          (u) => u.role?.toLowerCase() === "tutee" && u.is_active
        ).length;

        const deactivatedStudents = allUsers.filter(
          (u) => u.role?.toLowerCase() === "tutee" && !u.is_active
        ).length;

        setActiveTutors(activeTutors);
        setDeactivatedTutors(deactivatedTutors);
        setActiveStudents(activeStudents);
        setDeactivatedStudents(deactivatedStudents);
      })
      .catch((err) => {
        console.error("❌ Error fetching user data for stats:", err);
      });
  }, [refreshTrigger]);

  const stats = [
    {
      label: "Active Tutors",
      value: activeTutors,
      icon: <GroupIcon />,
      color: "orange",
    },
    {
      label: "Deactivated Tutors",
      value: deactivatedTutors,
      icon: <PersonOffIcon />,
      color: "red",
    },
    {
      label: "Active Students",
      value: activeStudents,
      icon: <SchoolIcon />,
      color: "purple",
    },
    {
      label: "Deactivated Students",
      value: deactivatedStudents,
      icon: <PersonOffIcon />,
      color: "yellow",
    },
  ];

  return <StatCards stats={stats} />;
}
