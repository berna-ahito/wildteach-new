import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useParams, useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import useBookingData from "../Data/useBookingData";
import ToastNotification from "../../Panels/ToastNotification";

export default function BookingFormPanel() {
  const { tutorId } = useParams();
  const navigate = useNavigate();
  const [toast, setToast] = useState({ message: "", type: "" });

  const { subject, setSubject, sessionDateTime, setSessionDateTime, tutor } =
    useBookingData(tutorId);

  const [duration, setDuration] = useState(60); // ✅ default to 1 hour

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    const studentId = parseInt(localStorage.getItem("student_id"));
    const resolvedTutorId = parseInt(tutor?.tutor_id || tutor?.id || 0);
    const formattedDate = new Date(sessionDateTime).toISOString();

    if (
      !studentId ||
      !resolvedTutorId ||
      !subject ||
      !formattedDate ||
      !duration
    ) {
      setToast({ message: "Missing booking information.", type: "error" });
      return;
    }

    const payload = {
      student: { student_id: studentId },
      tutor: { tutor_id: resolvedTutorId },
      subject,
      sessionDateTime: formattedDate,
      duration,
      status: "Pending",
    };

    try {
      const res = await fetch("http://localhost:8080/booking/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseText = await res.text();
      if (!res.ok) {
        console.error("Server returned:", res.status, responseText);
        throw new Error("Booking failed");
      }

      setToast({ message: "Booking successful!", type: "success" });

      setTimeout(() => {
        navigate("/tuteeDashboard");
      }, 1200);
    } catch (err) {
      console.error("Booking error:", err);
      setToast({ message: "Booking failed. Please try again.", type: "error" });
    }
  };

  return (
    <div className="booking-form-box">
      <div className="booking-heading">
        <h2>
          Book a Session with{" "}
          <span className="mock-name">
            {tutor?.student?.first_name} {tutor?.student?.last_name}
          </span>
        </h2>
      </div>

      <form onSubmit={handleBookingSubmit}>
        <label>Subject</label>
        <input
          type="text"
          className="subject-input"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter subject"
          required
        />

        <label>Select Date & Time</label>
        <DatePicker
          selected={sessionDateTime}
          onChange={(date) => setSessionDateTime(date)}
          showTimeSelect
          timeFormat="h:mm aa"
          timeIntervals={30}
          dateFormat="MMMM d, yyyy h:mm aa"
        />

        <label>Duration</label>
        <select
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          required
        >
          <option value={30}>30 minutes</option>
          <option value={60}>1 hour</option>
          <option value={90}>1.5 hours</option>
        </select>

        <div className="form-actions">
          <button type="submit" className="confirm-book-button">
            Confirm Booking
          </button>
        </div>
      </form>

      {/* ✅ Toast Notification */}
      {toast.message && (
        <ToastNotification
          type={toast.type}
          message={toast.message}
          onClose={() => setToast({ message: "", type: "" })}
        />
      )}
    </div>
  );
}
