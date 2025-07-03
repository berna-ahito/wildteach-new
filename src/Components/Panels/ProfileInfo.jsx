import React, { useState } from "react";

export default function ProfileInfo({ profile }) {
  const [editMode, setEditMode] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(
    profile.profileImage
      ? `/uploads/profile/${profile.profileImage}?t=${Date.now()}`
      : `/uploads/profile/default.jpg`
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setPreview(URL.createObjectURL(file)); // Show temporary preview before saving
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

      alert("Profile image updated!");
      setEditMode(false);

      // Update preview to final saved image
      setPreview(`/uploads/profile/${finalFileName}?t=${Date.now()}`);
    } catch (err) {
      console.error(err);
      alert("Upload error");
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
    </div>
  );
}
