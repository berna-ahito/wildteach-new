import React from 'react';
import { Typography, Button, Paper } from '@mui/material';
import useTuteeData from '../Data/useTuteeData';

export default function UpcomingSchedulePanel() {
  const { bookings } = useTuteeData();

  return (
    <div className="tutee-panel-card">
      <div className="tutee-panel-header">
        <h3>📅 Upcoming Tutoring Schedule</h3>
      </div>

      <div className="tutee-card-row">
        {bookings?.length === 0 ? (
          <Typography variant="body2">No upcoming bookings.</Typography>
        ) : (
          bookings.map((booking) => (
            <Paper className="tutee-booking-card" elevation={3} key={booking.id}>
              <Typography variant="h6" className="card-title">
                {booking.tutor}
              </Typography>
              <Typography>Subject: {booking.subject}</Typography>
              <Typography>Date: {booking.date}</Typography>
              <Typography>
                Status:{' '}
                <span className={`tutee-status ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </span>
              </Typography>
              <Button className="tutee-view-button">View</Button>
            </Paper>
          ))
        )}
      </div>
    </div>
  );
}
