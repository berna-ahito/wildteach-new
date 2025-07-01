import React from 'react';
import DatePicker from 'react-datepicker';
import { useParams } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import useBookingData from '../Data/useBookingData';

export default function BookingFormPanel() {
  const { tutorId } = useParams();
  const {
    subject,
    setSubject,
    sessionDateTime,
    setSessionDateTime,
    tutor,
  } = useBookingData(tutorId);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    const studentId = localStorage.getItem('student_id');
    if (!studentId || !tutorId) {
      alert('Missing student or tutor information.');
      return;
    }

    const payload = {
      student: { student_id: parseInt(studentId) },
      tutor: { tutor_id: parseInt(tutorId) },
      subject,
      sessionDateTime,
      status: 'Pending',
    };

    try {
      const res = await fetch('http://localhost:8080/booking/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Booking failed');
      alert('Booking successfully submitted!');
    } catch (err) {
      console.error('Booking error:', err);
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <div className="booking-form-box">
      <div className="booking-heading">
        <h2>Book a Session with <span className="mock-name">{tutor?.student?.first_name} {tutor?.student?.last_name}</span></h2>
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

        <div className="form-actions">
          <button type="submit" className="confirm-book-button">
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
}
