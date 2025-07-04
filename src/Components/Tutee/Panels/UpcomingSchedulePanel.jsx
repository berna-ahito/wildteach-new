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

//       <div className="panel-item content" stye="gap:10px">
//         {bookings?.length === 0 ? (
//           <Typography variant="body2">No upcoming bookings.</Typography>
//         ) : (
//           bookings.map((booking) => (
//             <Paper
//               className="panel-card"
//               elevation={3}
//               key={booking.id}
//             >
//               <Typography variant="h5" className="highlighted-title">
//                 {booking.tutorName}
//               </Typography>
//               <Typography>Subject: {booking.subject}</Typography>
//               <Typography>Date: {booking.date}</Typography>
//               <Typography>
//                 Status:{" "}
//                 <span
//                   className={`tutee-status ${booking.status.toLowerCase()}`}
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

      <div
        className="tutee-panel-item content"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          overflowX: "auto", 
          padding: "10px 0"
        }}
      >
        {bookings?.length === 0 ? (
          <Typography variant="body2">No upcoming bookings.</Typography>
        ) : (
          bookings.map((booking) => (
            <Paper
              className="panel-card"
              elevation={3}
              key={booking.id}
              style={{ minWidth: "250px", padding: "16px" }}
            >
              <Typography variant="h5" className="highlighted-title">
                {booking.tutorName}
              </Typography>
              <Typography>Subject: {booking.subject}</Typography>
              <Typography>Date: {booking.date}</Typography>
              <Typography>
                Status:{" "}
                <span className={`panel-item status ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </span>
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#6d2a30",
                  color: "white",
                  borderRadius: "10px",
                  marginTop: "10px",
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
