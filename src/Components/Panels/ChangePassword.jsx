import React, { useState } from "react";
import axios from "axios";
import InputCards from "../Shared/InputCards";
import UserCredentials from "../Shared/Data/UserCredentials";
import ToastNotification from "../Panels/ToastNotification";
import "../../Pages/Styles/shared/CommonComponents.css";

export default function ChangePassword({ role = "admin", userId, email }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setToast({ type: "error", message: "New passwords do not match." });
      return;
    }

    try {
      if (role === "admin") {
        const res = await axios.get(
          `http://localhost:8080/admin/getAdmin/${userId}`
        );
        const currentAdmin = res.data;

        await axios.put(`http://localhost:8080/admin/updateAdmin/${userId}`, {
          ...currentAdmin,
          password: newPassword,
        });
      } else {
        await axios.put("http://localhost:8080/student/updatePassword", {
          studentId: userId,
          oldPassword: currentPassword,
          newPassword: newPassword,
        });
      }

      setToast({ type: "success", message: "Password updated successfully!" });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("❌ Password update failed:", err);
      const errorMsg =
        err.response?.data || "Password update failed. Please try again.";
      setToast({ type: "error", message: errorMsg });
    }
  };

  return (
    <>
      {toast && (
        <ToastNotification
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <InputCards title="Change Password" className="wide-card border-top-gold">
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

          <button type="submit" className="toggle-btn active">
            Update Password
          </button>
        </form>
      </InputCards>
    </>
  );
}
