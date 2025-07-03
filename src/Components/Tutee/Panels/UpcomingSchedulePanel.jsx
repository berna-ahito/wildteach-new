import React from "react";
import { Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useTuteeData from "../Data/useTuteeData";

export default function UpcomingSchedulePanel() {
  const studentId = localStorage.getItem("student_id");
  const { bookings } = useTuteeData(studentId);
  const navigate = useNavigate();

  return (
    <div className="panel-card">
      <div className="panel-header">
        <h3>📅 Upcoming Tutoring Schedule</h3>
      </div>

      <div className="tutee-card-row">
        {bookings?.length === 0 ? (
          <Typography variant="body2">No upcoming bookings.</Typography>
        ) : (
          bookings.map((booking) => (
            <Paper
              className="tutee-booking-card"
              elevation={3}
              key={booking.id}
            >
              <Typography variant="h6" className="card-title">
                {booking.tutorName}
              </Typography>
              <Typography>Subject: {booking.subject}</Typography>
              <Typography>Date: {booking.date}</Typography>
              <Typography>
                Status:{" "}
                <span
                  className={`tutee-status ${booking.status.toLowerCase()}`}
                >
                  {booking.status}
                </span>
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#6d2a30",
                  color: "white",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#F8C400",
                  },
                }}
                onClick={() => navigate("/tutee/my-bookings")}
              >
                View
              </Button>
            </Paper>
          ))
        )}
      </div>
    </div>
  );
}
