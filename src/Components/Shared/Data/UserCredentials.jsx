import React, { useEffect } from "react";

export default function UserCredentials({ role = "admin", email, setEmail }) {
  const dummyEmails = {
    admin: "admin@example.com",
    tutor: "tutor@example.com",
    tutee: "tutee@example.com",
    default: "user@example.com",
  };

  // ✅ Set dummy email on first render if not already set
  useEffect(() => {
    if (!email && setEmail) {
      setEmail(dummyEmails[role] || dummyEmails.default);
    }
  }, [role, email, setEmail]);

  const getLabel = () => {
    switch (role) {
      case "admin":
        return "Admin Email";
      case "tutor":
        return "Tutor Email";
      case "tutee":
        return "Tutee Email";
      default:
        return "User Email";
    }
  };

  return (
    <input
      className="toggle-btn-settings"
      type="email"
      value={email}
      onChange={(e) => setEmail && setEmail(e.target.value)}
      placeholder={getLabel()}
      disabled
    />
  );
}
