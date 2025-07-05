import React, { useState } from "react";
import ToastNotification from "../Panels/ToastNotification";

export default function PersonalInfo({ profile }) {
  const [editMode, setEditMode] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });

  const [formData, setFormData] = useState({
    first_name: profile.first_name,
    last_name: profile.last_name,
    dob: profile.dob,
    address: profile.address,
    phone: profile.phone,
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = async () => {
    try {
      const studentId = profile.student_id;

      const payload = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        birth_date: formData.dob,
        address: formData.address,
        contact_number: formData.phone,
      };

      const res = await fetch(
        `http://localhost:8080/student/update/${studentId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Failed to update");

      setToast({ message: "Profile updated successfully!", type: "success" });
      setEditMode(false);
    } catch (err) {
      console.error("Update error:", err);
      setToast({ message: "Failed to update profile.", type: "error" });
    }
  };

  return (
    <div className="glass-card">
      <div className="card-header">
        <h4>Personal Information</h4>
        <button className="edit-btn" onClick={() => setEditMode(!editMode)}>
          {editMode ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="info-grid">
        <p>
          <strong>Fullname:</strong>{" "}
          {editMode ? (
            <>
              <input
                value={formData.first_name}
                onChange={(e) => handleChange("first_name", e.target.value)}
                placeholder="First name"
              />
              <input
                value={formData.last_name}
                onChange={(e) => handleChange("last_name", e.target.value)}
                placeholder="Last name"
              />
            </>
          ) : (
            `${formData.first_name} ${formData.last_name}`
          )}
        </p>
        <p>
          <strong>Date of Birth:</strong>{" "}
          {editMode ? (
            <input
              type="date"
              value={formData.dob}
              onChange={(e) => handleChange("dob", e.target.value)}
            />
          ) : (
            formData.dob
          )}
        </p>
        <p>
          <strong>Address:</strong>{" "}
          {editMode ? (
            <input
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          ) : (
            formData.address
          )}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          {editMode ? (
            <input
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          ) : (
            formData.phone
          )}
        </p>
      </div>

      {editMode && (
        <div className="form-actions">
          <button className="save-btn" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      )}

      {/* Toast Notification */}
      {toast.message && (
        <ToastNotification
          type={toast.type}
          message={toast.message}
          onClose={() => setToast({ message: "", type: "" })}
        />
      )}
    </div>
  );
}
