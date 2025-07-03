  import React from "react";

  export default function UserCredentials({ role = "admin", email }) {
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
        placeholder={getLabel()}
        disabled
      />
    );
  }
