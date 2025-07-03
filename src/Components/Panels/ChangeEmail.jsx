import React, { useState } from "react";
import axios from "axios";
import InputCards from "../Shared/InputCards";
import UserCredentials from "../Shared/Data/UserCredentials";
import "../../Pages/Styles/Admin.css";

export default function ChangeEmail({ role = "admin", userId, email }) {
  const [newEmail, setNewEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newEmail !== confirmEmail) {
      alert("Emails do not match.");
      return;
    }

    try {
      if (role === "admin") {
        const res = await axios.get(`http://localhost:8080/admin/getAdmin/${userId}`);
        const currentAdmin = res.data;

        await axios.put(`http://localhost:8080/admin/updateAdmin/${userId}`, {
          ...currentAdmin,
          email: newEmail,
        });
      } else {
        const res = await axios.get(`http://localhost:8080/student/getById/${userId}`);
        const currentStudent = res.data;

        await axios.put(`http://localhost:8080/student/update/${userId}`, {
          ...currentStudent,
          email: newEmail,
        });
      }

      // Update localStorage
      const updatedUser = { ...JSON.parse(localStorage.getItem("user")), email: newEmail };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      alert(`✅ Email updated to ${newEmail} successfully!`);
      setNewEmail("");
      setConfirmEmail("");
    } catch (err) {
      console.error("❌ Email update failed:", err.response?.data || err.message);
      alert(err.response?.data || "Email update failed. Please try again.");
    }
  };

  return (
    <InputCards title="Change Email">
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
  );
}
