import React, { useState } from "react";
import ToastNotification from "../Panels/ToastNotification"; // ✅ Toast import

export default function ProfileInfo({ profile }) {
  const [editMode, setEditMode] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [toast, setToast] = useState({ message: "", type: "" });
  const [preview, setPreview] = useState(
    profile.profileImage
      ? `/uploads/profile/${profile.profileImage}?t=${Date.now()}`
      : `/uploads/profile/default.jpg`
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!imageFile) return;

    const safeFileName = imageFile.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    const finalFileName = `student_${profile.student_id}_${safeFileName}`;

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const res = await fetch(
        `http://localhost:8080/student/upload-profile/${profile.student_id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Upload failed");

      setToast({ message: "Profile image updated!", type: "success" });
      setEditMode(false);
      setPreview(`/uploads/profile/${finalFileName}?t=${Date.now()}`);
    } catch (err) {
      console.error(err);
      setToast({ message: "Upload error", type: "error" });
    }
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="avatar-section">
          <img src={preview} alt="Avatar" className="avatar" />
          <div>
            <h3>{profile.fullname}</h3>
            <p>{profile.email}</p>
            <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
          </div>
        </div>

        <button className="edit-btn" onClick={() => setEditMode(!editMode)}>
          {editMode ? "Cancel" : "Edit"}
        </button>
      </div>

      {editMode && (
        <div className="upload-form">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <button className="save-btn" onClick={handleUpload}>
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
}
