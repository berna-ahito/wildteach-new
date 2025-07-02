import React from "react";
import "../../../Pages/Styles/LandingPage/ContactSection.css";

export default function ContactInput({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  isTextarea,
}) {
  return (
    <div className="form-group">
      {isTextarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-textarea"
          rows="6"
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-input"
          required
        />
      )}
    </div>
  );
}
