import React, { useState } from "react";
import ToastNotification from "../Panels/ToastNotification"; // ✅ Toast import

const SkillsSubjects = ({ profile }) => {
  const [editMode, setEditMode] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" }); // ✅ Toast state
  const [formData, setFormData] = useState({
    subjects: profile.subjects_offered || "",
    availability: profile.availability || "",
    rate: profile.rate_per_hour || "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/tutor/update/${profile.tutor_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            subjects_offered: formData.subjects,
            availability: formData.availability,
            rate_per_hour: parseFloat(formData.rate),
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to update");

      setToast({ message: "Teaching profile updated successfully!", type: "success" });
      setEditMode(false);
    } catch (err) {
      console.error("Error:", err);
      setToast({ message: "Update failed.", type: "error" });
    }
  };

  return (
    <div className="profile-card">
      <div className="section-header">
        <h4>Teaching Profile</h4>
        <button className="edit-btn" onClick={() => setEditMode(!editMode)}>
          {editMode ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="info-grid">
        <div>
          <strong>Subjects:</strong>{" "}
          {editMode ? (
            <input
              value={formData.subjects}
              onChange={(e) => handleChange("subjects", e.target.value)}
              placeholder="e.g., Math, English"
            />
          ) : (
            <ul>
              {formData.subjects.split(",").map((s, i) => (
                <li key={i}>{s.trim()}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <strong>Availability:</strong>{" "}
          {editMode ? (
            <input
              value={formData.availability}
              onChange={(e) => handleChange("availability", e.target.value)}
              placeholder="e.g., MWF 9AM–11AM"
            />
          ) : (
            <span>{formData.availability}</span>
          )}
        </div>

        <div>
          <strong>Rate per Hour (₱):</strong>{" "}
          {editMode ? (
            <input
              type="number"
              value={formData.rate}
              onChange={(e) => handleChange("rate", e.target.value)}
              placeholder="e.g., 250"
            />
          ) : (
            <span>₱{formData.rate}</span>
          )}
        </div>
      </div>

      {editMode && (
        <div className="form-actions">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      )}

      {/* ✅ Toast */}
      {toast.message && (
        <ToastNotification
          type={toast.type}
          message={toast.message}
          onClose={() => setToast({ message: "", type: "" })}
        />
      )}
    </div>
  );
};

export default SkillsSubjects;
