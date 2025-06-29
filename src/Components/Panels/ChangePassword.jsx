import React, { useState } from "react";
import InputCards from "../Shared/InputCards"; // Make sure path is correct
import "../../Pages/Styles/Admin.css";

export default function ChangePassword() {
  const [email, setEmail] = useState("admin@example.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    alert("Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <InputCards title="Change Password">
      <form onSubmit={handleSubmit} className="settings-section">
        <input
          className="toggle-btn-settings"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Admin Email"
          disabled
        />
        <input
          className="toggle-btn-settings"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Current Password"
          required
        />
        <input
          className="toggle-btn-settings"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          required
        />
        <input
          className="toggle-btn-settings"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm New Password"
          required
        />
        <button type="submit" className="toggle-btn active" style={{ alignSelf: "center" }}>
          Update Password
        </button>
      </form>
    </InputCards>
  );
}
