import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Pages/Styles/TutorPage/TutorDashboard.css";

export default function SchedulePanel({ schedule }) {
  const navigate = useNavigate();
  return (
    <div className="panel-card">
      <div className="panel-header">
        <h3>Today's Schedule</h3>
        <button
          onClick={() => navigate("/tutor/manageSessions")}
          className="add-btn"
        >
          + Add
        </button>
      </div>
      <ul>
        {schedule.map((s, i) => (
          <li key={i} className="panel-item">
            <span className="time">{s.time}</span>
            <div className="info">
              {s.student} • {s.subject}
            </div>
            <span className={`status ${s.status}`}>{s.status}</span>
            <button className="join-btn">Join</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
