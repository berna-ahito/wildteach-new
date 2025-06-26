import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RecentActivity({ recent }) {
  const navigate = useNavigate();
  return (
    <div className="panel-card">
      <div className="panel-header">
        <h3>Recent Activity</h3>
        <button className="seeall-btn" onClick={() => navigate('/tutor/recent')}>See All</button>
      </div>
      <ul>
        {recent.map((r, i) => (
          <li key={i} className="panel-item">
            <div className="avatar-circle">{r.avatar}</div>
            <div className="info">
              <strong>{r.name}</strong> • {r.subject} • {r.time}
            </div>
            <span className={`status ${r.status}`}>{r.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
