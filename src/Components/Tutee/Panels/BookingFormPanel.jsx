import React from "react";
import DatePicker from "react-datepicker";
import { useParams, useNavigate } from "react-router-dom"; // ✅ Added useNavigate
import "react-datepicker/dist/react-datepicker.css";
import useBookingData from "../Data/useBookingData";

export default function BookingFormPanel() {
  const { tutorId } = useParams();
  const navigate = useNavigate(); // ✅ Initialize navigate

  const { subject, setSubject, sessionDateTime, setSessionDateTime, tutor } =
    useBookingData(tutorId);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    const studentId = parseInt(localStorage.getItem("student_id"));
    const resolvedTutorId = parseInt(tutor?.tutor_id || tutor?.id || 0);
    const formattedDate = new Date(sessionDateTime).toISOString();

    console.log("🧾 Booking Debug", {
      studentId,
      resolvedTutorId,
      subject,
      formattedDate,
      tutor,
    });

    if (!studentId || !resolvedTutorId || !subject || !formattedDate) {
      alert("Missing booking info.");
      return;
    }

    const payload = {
      student: { student_id: studentId },
      tutor: { tutor_id: resolvedTutorId },
      subject,
      sessionDateTime: formattedDate,
      status: "Pending",
    };

    console.log("📤 Booking Payload", JSON.stringify(payload, null, 2));

    try {
      const res = await fetch("http://localhost:8080/booking/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseText = await res.text(); // ✅ Read plain text response

      if (!res.ok) {
        console.error("Server returned:", res.status, responseText);
        throw new Error("Booking failed");
      }

      console.log("✅ Booking success:", responseText);
      alert("Booking successful!");
      navigate("/tutee/mybookings");
    } catch (err) {
      console.error("Booking error:", err);
      alert("Booking failed. Please try again.");
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
          type="text" // ✅ fixed typo here
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

        <div className="form-actions">
          <button type="submit" className="confirm-book-button">
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
}
