import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../Components/Shared/Header';
import Sidebar from '../../Components/Shared/Sidebar';
import menuTutee from '../../RoutesConfig/MenuTutee';
import BookingFormPanel from '../../Components/Tutee/Panels/BookingFormPanel';
import '../Styles/TuteePage.css';

export default function BookingPage() {
  const navigate = useNavigate();
  const { tutorId } = useParams(); 
  const menuItems = menuTutee(navigate);

  return (
    <div className="tutee-dashboard bright-theme">
      <Sidebar menuItems={menuItems} />
      <div className="tutee-content">
        <Header title="WILDTEACH" />
        
        <div className="booking-header-container">
          <h1 className="booking-title">Request a Session</h1>
        </div>

        <div className="booking-card-wrapper">
          <div className="booking-card">
            <BookingFormPanel tutorId={tutorId} />
          </div>
        </div>
      </div>
    </div>
  );
}


// // STATIC VERSION - TEMPORARY
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import { Typography } from '@mui/material';
// import 'react-datepicker/dist/react-datepicker.css';
// import '../Styles/TuteePage.css'; 

// export default function BookingFormPanel() {
//   const [subject, setSubject] = useState('');
//   const [sessionDateTime, setSessionDateTime] = useState(new Date());

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();
//     alert('Booking confirmed (static version)');
//   };
 
//   return (
//     <div className="booking-form-box">
//       <div className="booking-heading">
//         <h2>Book a Session with <span className="mock-name">Jane Doe</span></h2>
//       </div>

//       <form onSubmit={handleBookingSubmit}>
//         <label>Subject</label>
//         <input
//           type="text"
//           className="subject-input"
//           value={subject}
//           onChange={(e) => setSubject(e.target.value)}
//           placeholder="Enter subject"
//           required
//         />

//         <label>Select Date & Time</label>
//         <DatePicker
//           selected={sessionDateTime}
//           onChange={(date) => setSessionDateTime(date)}
//           showTimeSelect
//           timeFormat="h:mm aa"
//           timeIntervals={30}
//           dateFormat="MMMM d, yyyy h:mm aa"
//         />

//         <div className="form-actions">
//           <button type="submit" className="confirm-book-button">
//             Confirm Booking
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
