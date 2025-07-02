import React, { useState } from "react";
import Card from "../Shared/Card";
import "../../Pages/Styles/TutorPage.css";

export default function SessionList({ sessions, onDelete }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedSessions, setEditedSessions] = useState([...sessions]);
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("All");

  const handleEditClick = (index) => setEditingIndex(index);

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

  const handleDelete = async (bookingId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this session?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `http://localhost:8080/booking/delete/${bookingId}`,
        { method: "DELETE" }
      );
      if (res.ok) {
        onDelete(bookingId);
      } else {
        alert("Failed to delete session.");
      }
    } catch {
      alert("Error deleting session.");
    }
  };

  const filteredSessions = editedSessions.filter((s) => {
    const matchYear = selectedYear === "All" || s.year === selectedYear;
    const matchMonth = selectedMonth === "All" || s.month === selectedMonth;
    return matchYear && matchMonth;
  });

  return (
    <div className="sessions-container">
      <h2 className="section-title">Manage Sessions</h2>

      {/* Filters */}
      <div className="filter-bar">
        <select
          className="filter-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="All">All years</option>
          {[...new Set(sessions.map((s) => s.year))].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="All">All months</option>
          {[...new Set(sessions.map((s) => s.month))].map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Session Cards */}
      <div className="session-cards-grid">
        {filteredSessions.length === 0 ? (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            No sessions found.
          </p>
        ) : (
          filteredSessions.map((s, i) => {
            const isEditing = i === editingIndex;
            return (
              <Card key={s.booking_id} className="session-card">
                <h3 className="card-title">
                  Student Name:{" "}
                  {isEditing ? (
                    <input
                      value={s.name}
                      onChange={(e) => handleChange(i, "name", e.target.value)}
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
                      onChange={(e) =>
                        handleChange(i, "subject", e.target.value)
                      }
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
                      onChange={(e) => handleChange(i, "date", e.target.value)}
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
                      onChange={(e) =>
                        handleChange(i, "duration", e.target.value)
                      }
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
                      onChange={(e) => handleChange(i, "month", e.target.value)}
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
                      onChange={(e) => handleChange(i, "year", e.target.value)}
                    />
                  ) : (
                    s.year
                  )}
                </p>

                {/* Actions */}
                <div className="card-actions">
                  {isEditing ? (
                    <>
                      <button className="btn-edit" onClick={handleSave}>
                        Save
                      </button>
                      <button
                        className="btn-cancel"
                        onClick={handleCancelClick}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn-edit"
                        onClick={() => handleEditClick(i)}
                      >
                        Edit
                      </button>
                      <button onClick={() => handleDelete(s.booking_id)}>
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </Card>
            );
          })
        )}
      </div>

      {/* Pagination placeholder */}
      <div className="pagination">
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
      </div>
    </div>
  );
}
