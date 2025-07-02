import React, { useState } from "react";

const SkillsSubjects = ({ profile }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    subjects:
      (Array.isArray(profile.subjects) ? profile.subjects.join(", ") : "") ||
      "",
  });

  const handleChange = (value) => {
    setFormData({ subjects: value });
  };

  const handleSave = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/student/update/${profile.student_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            subjects_offered: formData.subjects,
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to update");

      alert("Subjects updated");
      setEditMode(false);
    } catch (err) {
      console.error("Error:", err);
      alert("Update failed");
    }
  };

  return (
    <div className="profile-card">
      <div className="section-header">
        <h4>Subjects</h4>
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
              onChange={(e) => handleChange(e.target.value)}
              placeholder="e.g., Math, Science"
            />
          ) : (
            <ul>
              {formData.subjects.split(",").map((s, i) => (
                <li key={i}>{s.trim()}</li>
              ))}
            </ul>
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
    </div>
  );
};

export default SkillsSubjects;
