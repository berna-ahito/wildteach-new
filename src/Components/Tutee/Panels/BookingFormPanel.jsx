// src/Components/Tutee/Panels/BookingFormPanel.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { Typography } from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';
import useBookingData from '../Data/useBookingData';
import '../../../Pages/Styles/TuteePage.css';


export default function BookingFormPanel({ tutorId }) {
  const navigate = useNavigate();
  const studentId = localStorage.getItem('student_id');

  const {
    tutor,
    subject,
    setSubject,
    sessionDateTime,
    setSessionDateTime,
  } = useBookingData(tutorId);

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    if (!studentId || !tutorId || !tutor) {
      alert('Missing required information. Make sure tutor is loaded.');
      return;
    }

    const bookingPayload = {
      student: { student_id: parseInt(studentId) },
      tutor: { tutor_id: tutor.tutor_id },
      subject,
      sessionDateTime,
      status: 'Pending',
    };

    fetch('http://localhost:8080/booking/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingPayload),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (res.ok) {
          alert('Booking successful!');
          navigate('/tuteeDashboard');
        } else {
          alert(`Booking failed: ${res.status} - ${data.message || 'Unknown error'}`);
        }
      })
      .catch((err) => console.error('Booking error:', err));
  };

  if (!tutor) return <Typography>Loading tutor information...</Typography>;

  return (
    <div className="booking-form-card">
      <h2 className="form-title">
        Book a Session with {tutor.student?.first_name} {tutor.student?.last_name}
      </h2>

      <form onSubmit={handleBookingSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            className="input-field"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className="form-group" >
          <label htmlFor="sessionDateTime">Select Date & Time</label>
          <DatePicker
            selected={sessionDateTime}
            onChange={(date) => setSessionDateTime(date)}
            showTimeSelect
            timeFormat="h:mm aa"
            timeIntervals={30}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="input-field"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="confirm-book-button">
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
}
