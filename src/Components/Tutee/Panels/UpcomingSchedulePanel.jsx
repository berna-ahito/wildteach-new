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



//MODIFIED
// import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import useTuteeData from "../Data/useTuteeData";

// export default function UpcomingSchedulePanel() {
//   const studentId = localStorage.getItem("student_id");
//   const { bookings } = useTuteeData(studentId);
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//   };
  

//   return (
//     <div className="panel-card">
//       <div className="panel-header">
//         <h3>📅 Upcoming Tutoring Schedule</h3>
//       </div>

//       <div className="tutee-scroll-wrapper">
//         <button className="scroll-btn left" onClick={scrollLeft}>‹</button>

//         <div className="tutee-upcoming-bookings-scroll" ref={scrollRef}>
//           {bookings?.length === 0 ? (
//             <div className="no-bookings-text">No upcoming bookings.</div>
//           ) : (
//             bookings.map((booking) => (
//               <div className="tutee-upcoming-card" key={booking.id}>
//                 <div className="highlighted-title">
//                   {booking.tutorName}
//                 </div>
//                 <div className="booking-line"><strong>Subject:</strong> {booking.subject}</div>
//                 <div className="booking-line"><strong>Date:</strong> {booking.date}</div>
//                 <div className="booking-line">
//                   <strong>Status:</strong>{" "}
//                   <span className={`panel-item status ${booking.status.toLowerCase()}`}>
//                     {booking.status}
//                   </span>
//                 </div>
//                 <button
//                   className="tutee-upcoming-view-btn"
//                   onClick={() => navigate("/tutee/my-bookings")}
//                 >
//                   View
//                 </button>
//               </div>
//             ))
//           )}
//         </div>

//         <button className="scroll-btn right" onClick={scrollRight}>›</button>
//       </div>
//     </div>
//   );
// }




//PREFINAL
// import React, { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useTuteeData from "../Data/useTuteeData";

// export default function UpcomingSchedulePanel() {
//   const studentId = localStorage.getItem("student_id");
//   const { bookings } = useTuteeData(studentId);
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);

//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [selectedDay, setSelectedDay] = useState("");
//   const [filteredBookings, setFilteredBookings] = useState([]);
//   const [selectedBooking, setSelectedBooking] = useState(null);

//   useEffect(() => {
//     if (!bookings) return;

//     let result = bookings;

//     if (selectedMonth) {
//       result = result.filter((b) => {
//         const date = new Date(b.sessionDateTime || b.date);
//         return date.getMonth() + 1 === parseInt(selectedMonth);
//       });
//     }

//     if (selectedDay) {
//       result = result.filter((b) => {
//         const date = new Date(b.sessionDateTime || b.date);
//         return date.getDate() === parseInt(selectedDay);
//       });
//     }

//     setFilteredBookings(result);
//   }, [bookings, selectedMonth, selectedDay]);

//   const clearFilters = () => {
//     setSelectedMonth("");
//     setSelectedDay("");
//     setFilteredBookings(bookings);
//   };

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//   };

//   const handleCloseModal = () => {
//     setSelectedBooking(null);
//   };

//   const openBookingModal = (booking) => {
//     setSelectedBooking(booking);
//   };

//   return (
//     <>
//       <div className="panel-card">
//         <div className="panel-header">
//           <h3>📅 Upcoming Tutoring Schedule</h3>
//         </div>

//         <div className="filter-container">
//           <select
//             value={selectedMonth}
//             onChange={(e) => setSelectedMonth(e.target.value)}
//             className="filter-select"
//           >
//             <option value="">Filter by Month</option>
//             {[...Array(12)].map((_, i) => (
//               <option key={i + 1} value={i + 1}>
//                 {new Date(0, i).toLocaleString("default", { month: "long" })}
//               </option>
//             ))}
//           </select>

//           <select
//             value={selectedDay}
//             onChange={(e) => setSelectedDay(e.target.value)}
//             className="filter-select"
//           >
//             <option value="">Filter by Day</option>
//             {[...Array(31)].map((_, i) => (
//               <option key={i + 1} value={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>

//           <button onClick={clearFilters} className="clear-filter-btn">
//             Clear
//           </button>
//         </div>

//         <div className="tutee-scroll-wrapper">
//           <button className="scroll-btn left" onClick={scrollLeft}>‹</button>

//           <div className="tutee-upcoming-bookings-scroll" ref={scrollRef}>
//             {(filteredBookings.length === 0 && (selectedMonth || selectedDay)) ? (
//               <div className="no-bookings-text">No schedule booking found.</div>
//             ) : bookings?.length === 0 ? (
//               <div className="no-bookings-text">No upcoming bookings.</div>
//             ) : (
//               (filteredBookings.length === 0 ? bookings : filteredBookings).map((booking) => {
//                 const d = new Date(booking.sessionDateTime || booking.date);
//                 const dd = d.toLocaleDateString();

//                 return (
//                   <div className="tutee-upcoming-card" key={booking.id}>
//                     <div className="highlighted-title">{booking.tutorName}</div>
//                     <div className="booking-line"><strong>Subject:</strong> {booking.subject}</div>
//                     <div className="booking-line"><strong>Date:</strong> {dd}</div>
//                     <button
//                       className="tutee-upcoming-view-btn"
//                       onClick={() => openBookingModal(booking)}
//                     >
//                       View
//                     </button>
//                   </div>
//                 );
//               })
//             )}
//           </div>

//           <button className="scroll-btn right" onClick={scrollRight}>›</button>
//         </div>
//       </div>

//       {/* Modal Outside the Panel */}
//       {selectedBooking && (
//         <div className="schedule-modal-overlay">
//           <div className="schedule-modal">
//             <h3>Schedule Details</h3>
//             <p><strong>Tutor Name:</strong> {selectedBooking.tutorName}</p>
//             <p><strong>Subject:</strong> {selectedBooking.subject}</p>

//             {(() => {
//               const d = new Date(selectedBooking.sessionDateTime || selectedBooking.date);
//               const date = d.toLocaleDateString();
//               const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

//               return (
//                 <>
//                   <p><strong>Date:</strong> {date}</p>
//                   <p><strong>Time:</strong> {time}</p>
//                 </>
//               );
//             })()}

//             <p>
//               <strong>Status:</strong>{" "}
//               <span className={`status ${selectedBooking.status?.toLowerCase()}`}>
//                 {selectedBooking.status}
//               </span>
//             </p>

//             <div className="modal-buttons">
//               <button onClick={handleCloseModal} className="back-btn">Back</button>
//               <button onClick={() => navigate("/tutee/my-bookings")} className="bookings-btn">
//                 My Bookings
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// // }


// NO GLASS CARD
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import useTuteeData from "../Data/useTuteeData";

export default function UpcomingSchedulePanel() {
  const studentId = localStorage.getItem("student_id");
  const { bookings } = useTuteeData(studentId);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    if (!bookings) return;
    let result = bookings;

    if (selectedMonth) {
      result = result.filter((b) => {
        const date = new Date(b.sessionDateTime || b.date);
        return date.getMonth() + 1 === parseInt(selectedMonth);
      });
    }

    if (selectedDay) {
      result = result.filter((b) => {
        const date = new Date(b.sessionDateTime || b.date);
        return date.getDate() === parseInt(selectedDay);
      });
    }

    setFilteredBookings(result);
  }, [bookings, selectedMonth, selectedDay]);

  const clearFilters = () => {
    setSelectedMonth("");
    setSelectedDay("");
    setFilteredBookings(bookings);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const openBookingModal = (booking) => setSelectedBooking(booking);
  const closeBookingModal = () => setSelectedBooking(null);

  const modal = selectedBooking && ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="schedule-modal">
        <h3>Tutoring Schedule</h3>
        {/* <div className="card-divider"></div> */}
        <p><strong>Tutor Name:</strong> {selectedBooking.tutorName}</p>
        <p><strong>Subject:</strong> {selectedBooking.subject}</p>

        {(() => {
          const d = new Date(selectedBooking.sessionDateTime || selectedBooking.date);
          const date = d.toLocaleDateString();
          const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

          return (
            <>
              <p><strong>Date:</strong> {date}</p>
              <p><strong>Time:</strong> {time}</p>
            </>
          );
        })()}

        <p>
          <strong>Status:</strong>{" "}
          <span className={`status ${selectedBooking.status?.toLowerCase()}`}>
            {selectedBooking.status}
          </span>
        </p>

        <div className="modal-buttons">
          <button className="tutee-upcoming-view-btn" onClick={closeBookingModal}>Back to home</button>
          <button className="tutee-upcoming-view-btn" onClick={() => navigate("/tutee/my-bookings")}>
            My Bookings
          </button>
        </div>
      </div>
    </div>,
    document.body
  );

  return (
    <>
    <div className="panel-card">
      <div className="panel-header">
        <h3>📅 Upcoming Tutoring Schedule</h3>
      </div>

      <div className="filter-container">
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="filter-select">
          <option value="">Filter by Month</option>
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>

        <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)} className="filter-select">
          <option value="">Filter by Day</option>
          {[...Array(31)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <button onClick={clearFilters} className="clear-filter-btn">Clear</button>
      </div>

      <div className="tutee-scroll-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>‹</button>

        <div className="tutee-upcoming-bookings-scroll" ref={scrollRef}>
          {(filteredBookings.length === 0 && (selectedMonth || selectedDay)) ? (
            <div className="no-bookings-text">No scheduled bookings found.</div>
          ) : bookings?.length === 0 ? (
            <div className="no-bookings-text">No upcoming bookings.</div>
          ) : (
            (filteredBookings.length === 0 ? bookings : filteredBookings).map((booking) => {
              const d = new Date(booking.sessionDateTime || booking.date);
              const dd = d.toLocaleDateString();

              return (
                <div className="tutee-upcoming-card" key={booking.id}>
                  <div className="highlighted-title">{booking.tutorName}</div>
                  <div className="booking-line"><strong>Subject:</strong> {booking.subject}</div>
                  <div className="booking-line"><strong>Date:</strong> {dd}</div>
                  <button
                    className="tutee-upcoming-view-btn"
                    onClick={() => openBookingModal(booking)}
                  >
                    View details
                  </button>
                </div>
              );
            })
          )}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>›</button>
      </div>
      {modal}
    </div>
    </>
  );
}


