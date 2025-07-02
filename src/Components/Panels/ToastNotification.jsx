import React, { useEffect } from "react";
import "../../Pages/Styles/ToastNotification.css";

export default function ToastNotification({
  type = "success",
  message,
  onClose,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast ${type}`} role="alert" aria-live="assertive">
      <span>{message}</span>
      <button onClick={onClose} className="close-btn" aria-label="Close">
        &times;
      </button>
    </div>
  );
}
