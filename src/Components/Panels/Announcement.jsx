import React from 'react';

export default function Announcement({ announcements = [] }) {
  return (
    <div className="panel-card">
      <div className="panel-header">
        <h3>System Announcements</h3>
        <button className="add-btn" onClick={() => alert('Add new announcement')}>Add</button>
      </div>
      <ul>
        {announcements.length > 0 ? (
          announcements.map((a, i) => (
            <li key={i} className="panel-item">
              <div className="avatar-circle">{a.title[0]}</div>
              <div className="info">
                <strong>{a.title}</strong> • {a.content}
              </div>
              <span className="status confirmed">New</span>
            </li>
          ))
        ) : (
          <li className="panel-item">
            <div className="info">No new announcements at this time.</div>
          </li>
        )}
      </ul>
    </div>
  );
}
