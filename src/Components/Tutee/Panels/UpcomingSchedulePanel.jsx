// import React from "react";
// import { Typography, Button, Paper } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import useTuteeData from "../Data/useTuteeData";

// export default function UpcomingSchedulePanel() {
//   const studentId = localStorage.getItem("student_id");
//   const { bookings } = useTuteeData(studentId);
//   const navigate = useNavigate();

//   return (
//     <div className="panel-card">
//       <div className="panel-header">
//         <h3>📅 Upcoming Tutoring Schedule</h3>
//       </div>

//       <div
//         className="tutee-panel-item content"
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           gap: "20px",
//           overflowX: "auto",
//           padding: "10px 0",
//         }}
//       >
//         {bookings?.length === 0 ? (
//           <Typography variant="body2">No upcoming bookings.</Typography>
//         ) : (
//           bookings.map((booking) => (
//             <Paper
//               className="panel-card"
//               elevation={3}
//               key={booking.id}
//               style={{ minWidth: "250px", padding: "16px" }}
//             >
//               <Typography variant="h5" className="highlighted-title">
//                 {booking.tutorName}
//               </Typography>
//               <Typography>Subject: {booking.subject}</Typography>
//               <Typography>Date: {booking.date}</Typography>
//               <Typography>
//                 Status:{" "}
//                 <span
//                   className={`panel-item status ${booking.status.toLowerCase()}`}
//                 >
//                   {booking.status}
//                 </span>
//               </Typography>

//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: "#6d2a30",
//                   color: "white",
//                   borderRadius: "10px",
//                   marginTop: "10px",
//                   "&:hover": {
//                     backgroundColor: "#F8C400",
//                   },
//                 }}
//                 onClick={() => navigate("/tutee/my-bookings")}
//               >
//                 View
//               </Button>
//             </Paper>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useTuteeData from "../Data/useTuteeData";

export default function UpcomingSchedulePanel() {
  const studentId = localStorage.getItem("student_id");
  const { bookings } = useTuteeData(studentId);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="panel-card">
      <div className="panel-header">
        <h3>📅 Upcoming Tutoring Schedule</h3>
      </div>

      <div className="tutee-scroll-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>‹</button>

        <div className="tutee-upcoming-bookings-scroll" ref={scrollRef}>
          {bookings?.length === 0 ? (
            <div className="no-bookings-text">No upcoming bookings.</div>
          ) : (
            bookings.map((booking) => (
              <div className="tutee-upcoming-card" key={booking.id}>
                <div className="highlighted-title">
                  {booking.tutorName}
                </div>
                <div className="booking-line"><strong>Subject:</strong> {booking.subject}</div>
                <div className="booking-line"><strong>Date:</strong> {booking.date}</div>
                <div className="booking-line">
                  <strong>Status:</strong>{" "}
                  <span className={`panel-item status ${booking.status.toLowerCase()}`}>
                    {booking.status}
                  </span>
                </div>
                <button
                  className="tutee-upcoming-view-btn"
                  onClick={() => navigate("/tutee/my-bookings")}
                >
                  View
                </button>
              </div>
            ))
          )}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>›</button>
      </div>
    </div>
  );
}
