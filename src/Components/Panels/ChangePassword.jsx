import React, { useState } from "react";
import axios from "axios";
import InputCards from "../Shared/InputCards";
import UserCredentials from "../Shared/Data/UserCredentials";
import "../../Pages/Styles/Admin.css";

export default function ChangePassword({ role = "admin", userId, email }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    try {
      if (role === "admin") {
        // ✅ Step 1: Get current admin data
        const res = await axios.get(`http://localhost:8080/admin/getAdmin/${userId}`);
        const currentAdmin = res.data;

        // ✅ Step 2: Update with existing fields + new password
        await axios.put(`http://localhost:8080/admin/updateAdmin/${userId}`, {
          ...currentAdmin,
          password: newPassword,
        });
      } else {
        // ✅ Tutee or Tutor: Provide current & new password
        await axios.put("http://localhost:8080/student/updatePassword", {
          studentId: userId,
          oldPassword: currentPassword,
          newPassword: newPassword,
        });
      }

      alert(`✅ Password for ${email} updated successfully!`);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("❌ Password update failed:", err.response?.data || err.message);
      alert(err.response?.data || "Password update failed. Please check your input.");
    }
  };

  return (
    <InputCards title="Change Password">
      <form onSubmit={handleSubmit} className="settings-section">
        <UserCredentials role={role} email={email} />

        {role !== "admin" && (
          <input
            className="toggle-btn-settings"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Current Password"
            required
          />
        )}

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
        <button
          type="submit"
          className="toggle-btn active"
          style={{ alignSelf: "center" }}
        >
          Update Password
        </button>
      </form>
    </InputCards>
  );
}
