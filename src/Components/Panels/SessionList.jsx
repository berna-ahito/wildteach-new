import React, { useState } from 'react';
import Card from "../Shared/Card"; 
import '../../Pages/Styles/TutorPage.css';

export default function SessionList({ sessions }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedSessions, setEditedSessions] = useState([...sessions]);

  const handleEditClick = (index) => {
    setEditingIndex(index);
  };

  const handleCancelClick = () => {
    setEditedSessions([...sessions]);
    setEditingIndex(null);
  };

  const handleChange = (index, field, value) => {
    const updated = [...editedSessions];
    updated[index][field] = value;
    setEditedSessions(updated);
  };

  const handleSave = () => {
    console.log("Saved:", editedSessions[editingIndex]);
    setEditingIndex(null);
  };

  return (
    <div className="sessions-container">
      <h2 className="section-title">Manage Sessions</h2>

      <div className="filter-bar">
        <select className="filter-select">
          <option>Select year</option>
          <option>2025</option>
          <option>2024</option>
        </select>

        <select className="filter-select">
          <option>Select month</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
        </select>
      </div>

      <div className="session-cards-grid">
        {editedSessions.map((s, i) => {
          const isEditing = i === editingIndex;
          return (
            <Card key={i} className="session-card">
              <h3 className="card-title">
                Student Name:{" "}
                {isEditing ? (
                  <input
                    value={s.name}
                    onChange={(e) => handleChange(i, 'name', e.target.value)}
                  />
                ) : (
                  s.name
                )}
              </h3>
              <p>
                Subject:{" "}
                {isEditing ? (
                  <input
                    value={s.subject}
                    onChange={(e) => handleChange(i, 'subject', e.target.value)}
                  />
                ) : (
                  s.subject
                )}
              </p>
              <p>
                Date:{" "}
                {isEditing ? (
                  <input
                    type="date"
                    value={s.date}
                    onChange={(e) => handleChange(i, 'date', e.target.value)}
                  />
                ) : (
                  s.date
                )}
              </p>
              <p>
                Duration:{" "}
                {isEditing ? (
                  <input
                    value={s.duration}
                    onChange={(e) => handleChange(i, 'duration', e.target.value)}
                  />
                ) : (
                  s.duration
                )}
              </p>
              <p>
                Month:{" "}
                {isEditing ? (
                  <input
                    value={s.month}
                    onChange={(e) => handleChange(i, 'month', e.target.value)}
                  />
                ) : (
                  s.month
                )}
              </p>
              <p>
                Year:{" "}
                {isEditing ? (
                  <input
                    value={s.year}
                    onChange={(e) => handleChange(i, 'year', e.target.value)}
                  />
                ) : (
                  s.year
                )}
              </p>

              <div className="card-actions">
                {isEditing ? (
                  <>
                    <button className="btn-edit" onClick={handleSave}>Save</button>
                    <button className="btn-cancel" onClick={handleCancelClick}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="btn-edit" onClick={() => handleEditClick(i)}>Edit</button>
                    <button className="btn-cancel">Delete</button>
                  </>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      <div className="pagination">
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
      </div>
    </div>
  );
}
