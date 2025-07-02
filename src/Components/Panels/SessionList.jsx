import React, { useState, useEffect } from "react";
import Card from "../Shared/Card";
import TutorPayment from "../Tutor/Data/TutorPayment";
import "../../Pages/Styles/TutorPage.css";

export default function SessionList({ sessions, onDelete, onRefresh }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedSessions, setEditedSessions] = useState([]);
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [deletingId, setDeletingId] = useState(null);
  const [payDialogOpen, setPayDialogOpen] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  useEffect(() => {
      console.log("🧾 Updated sessions received by SessionList:", sessions);

    setEditedSessions([...sessions]);
  }, [sessions]);

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

  const handleSave = async () => {
    const updatedSession = editedSessions[editingIndex];
    const bookingId = updatedSession.booking_id;

    try {
      const res = await fetch(
        `http://localhost:8080/booking/update/${bookingId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookingId,
            subject: updatedSession.subject,
            sessionDateTime: new Date(updatedSession.date).toISOString(),
            duration: parseInt(updatedSession.duration),
            status: "Pending",
            student: { student_id: updatedSession.student_id || 2 },
            tutor: { tutor_id: updatedSession.tutor_id || 4 },
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to update session");

      alert("✅ Session updated!");
      setEditingIndex(null);
    } catch (err) {
      console.error("❌ Update error:", err);
      alert("Failed to update session.");
    }
  };

  const handleDelete = async (bookingId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this session?"
    );
    if (!confirmDelete) return;

    setDeletingId(bookingId);

    try {
      const res = await fetch(
        `http://localhost:8080/booking/delete/${bookingId}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        onDelete(bookingId);
      } else {
        alert("Failed to delete session.");
      }
    } catch {
      alert("Error deleting session.");
    } finally {
      setDeletingId(null);
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
                <h3 className="card-title">Student Name: {s.name}</h3>
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
                <p>
                  Payment Status:{" "}
                  <span
                    style={{
                      color: s.isPaid ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {s.isPaid ? "Paid" : "Not Yet Paid"}
                  </span>
                </p>

                <div className="card-actions">
                  {isEditing ? (
                    <>
                      <button className="btn-edit" onClick={handleSave}>
                        Save
                      </button>
                      <button className="btn-cancel" onClick={handleCancelClick}>
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
                      <button
                        className="btn-edit"
                        onClick={() => {
                          setSelectedBookingId(s.booking_id);
                          setPayDialogOpen(true);
                        }}
                        disabled={s.isPaid}
                        style={{ opacity: s.isPaid ? 0.6 : 1 }}
                      >
                        {s.isPaid ? "Paid" : "Pay"}
                      </button>
                      <button
                        onClick={() => handleDelete(s.booking_id)}
                        disabled={deletingId === s.booking_id}
                      >
                        {deletingId === s.booking_id ? "Deleting..." : "Delete"}
                      </button>
                    </>
                  )}
                </div>
              </Card>
            );
          })
        )}
      </div>

      <div className="pagination">
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
      </div>

      <TutorPayment
        open={payDialogOpen}
        onClose={() => setPayDialogOpen(false)}
        bookingId={selectedBookingId}
        onSuccess={() => {
              console.log("🔁 Payment recorded — refreshing sessions");

          alert("✅ Payment recorded successfully!");
          setPayDialogOpen(false);
          onRefresh?.(); // 🟢 refresh the sessions after payment
        }}
      />
    </div>
  );
}
