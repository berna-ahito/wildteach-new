import React, { useState } from "react";
import axios from "axios";
import InputCards from "../Shared/InputCards";
import UserCredentials from "../Shared/Data/UserCredentials";
import ToastNotification from "../Panels/ToastNotification";
import "../../Pages/Styles/Admin/Admin.css";
export default function ChangeEmail({ role = "admin", userId, email }) {
  const [newEmail, setNewEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newEmail !== confirmEmail) {
      setToast({ type: "error", message: "Emails do not match." });
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
          email: newEmail,
        });
      } else {
        const res = await axios.get(
          `http://localhost:8080/student/getById/${userId}`
        );
        const currentStudent = res.data;

        await axios.put(`http://localhost:8080/student/update/${userId}`, {
          ...currentStudent,
          email: newEmail,
        });
      }

      // Update localStorage
      const updatedUser = {
        ...JSON.parse(localStorage.getItem("user")),
        email: newEmail,
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setToast({
        type: "success",
        message: `Email updated to ${newEmail} successfully!`,
      });
      setNewEmail("");
      setConfirmEmail("");
    } catch (err) {
      console.error(
        "❌ Email update failed:",
        err.response?.data || err.message
      );
      const msg =
        err.response?.data || "Email update failed. Please try again.";
      setToast({ type: "error", message: msg });
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

      <InputCards title="Change Email" className="wide-card border-top-gold">
        <form onSubmit={handleSubmit} className="settings-section">
          <UserCredentials role={role} email={email} />

          <input
            className="toggle-btn-settings"
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="New Email"
            required
          />
          <input
            className="toggle-btn-settings"
            type="email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            placeholder="Confirm New Email"
            required
          />
          <button
            type="submit"
            className="toggle-btn active"
            style={{ alignSelf: "center" }}
          >
            Update Email
          </button>
        </form>
      </InputCards>
    </>
  );
}
