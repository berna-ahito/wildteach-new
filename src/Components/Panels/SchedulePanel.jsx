import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Pages/Styles/shared/CommonComponents.css";

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
        {schedule.map((item, i) => (
          <li key={i} className="panel-item">
            <div className="avatar-circle">
              {item.avatarUrl ? (
                <img src={item.avatarUrl} alt="avatar" className="avatar-img" />
              ) : (
                <span>{item.student?.[0]}</span>
              )}
            </div>
            <div className="activity-details">
              {item.student} • {item.subject}
            </div>
            <span className={`status ${item.status}`}>{item.status}</span>
            <button className="join-btn">Join</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
