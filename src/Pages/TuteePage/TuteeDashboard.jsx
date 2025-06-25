// import React from 'react';
// import Sidebar from '../../Components/Sidebar';
// import Header from '../../Components/Header';
// import Card from '../../Components/Card'; 

// import { useNavigate } from 'react-router-dom';

// export default function StudentDashboard() {
//   const navigate = useNavigate();

//   const menuItems = [
//     { text: "Dashboard", onClick: () => navigate('/studentDashboard') },
//     { text: "Assignments", onClick: () => navigate('/assignments') },
//     { text: "Profile", onClick: () => navigate('/profile') },
//     { text: "Logout", onClick: () => {
//         localStorage.clear();
//         navigate('/login');
//       }
//     },
//   ];

//   return (
//     <div>
//       <Header title="WildTeach" />
//       <Sidebar menuItems={menuItems} buttonLabel="Menu" />
//        <div style={{ marginTop: '10px', paddingRight: '800px' }}>
//               {/* <h1 style={{ marginBottom: '32px' }}>Welcome Admin</h1> */}
//           <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: 'auto'}}>
//             <Card title="Welcome Students!" content="9" />
//             <h1 style={{ marginBottom: '32px' }}>Upcoming Tutoring Schedule</h1>
//             <Card title="Active Students" content="100" />
//             <Card title="Active Sessions" content="5" />
//           </div>
//         </div>
//     </div>
//   );
// }

//MODIFIED CODE | 06-17-25
// import React from 'react';
// import Sidebar from '../../Components/Sidebar';
// import Header from '../../Components/Header';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';

// export default function StudentDashboard() {
//   const navigate = useNavigate();

//   const menuItems = [
//     { text: "Dashboard", onClick: () => navigate('/studentDashboard') },
//     { text: "Assignments", onClick: () => navigate('/assignments') },
//     { text: "Profile", onClick: () => navigate('/profile') },
//     {
//       text: "Logout", onClick: () => {
//         localStorage.clear();
//         navigate('/login');
//       }
//     },
//   ];

//   return (
//     <div style={{ display: 'flex' }}>
//       <Header title="WildTeach" />
//       <Sidebar menuItems={menuItems} buttonLabel="Menu" />

//       <div style={{ padding: '20px', flex: 1 }}>
//         {/* Welcome Banner */}
//         <Card
//           sx={{
//             background: 'linear-gradient(to right, #F8D77D, #89343B)',
//             color: 'white',
//             padding: 3,
//             borderRadius: 3,
//             boxShadow: 3,
//             mb: 4,
//             width:'900px',
//             marginTop:'160px',
//             marginLeft: 'auto'
//           }}
//         >
//           <CardContent>
//             <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
//               Welcome back, Student!
//             </Typography>
//             <Typography variant="body2">
//               Work smart, not harder
//             </Typography>
//           </CardContent>
//         </Card>

//         {/* Upcoming Tutoring Schedule */}
//         <Typography variant="h6" sx={{ mb: 2 }}>
//           Upcoming Tutoring Schedule
//         </Typography>

//         <Card
//           sx={{
//             width: 300,
//             border: '1px solid #ccc',
//             borderRadius: 2,
//             boxShadow: 2,
//             mb: 4,
//           }}
//         >
//           <CardContent>
//             <Typography variant="h6">
//               John Doe <span style={{ float: 'right', fontSize: '0.9em', color: '#999' }}>Tutor</span>
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 2 }}>
//               Subject: IM2
//             </Typography>
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: '#7b2c3c',
//                 borderRadius: 5,
//                 textTransform: 'none',
//                 px: 3,
//               }}
//             >
//               View
//             </Button>
//           </CardContent>
//         </Card>

//        {/* Enrolled Courses */}
// <Typography variant="h6" sx={{ mb: 2 }}>
//   Enrolled Courses
// </Typography>

// <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
//   <Card
//     sx={{
//       width: 250,
//       border: '1px solid #ccc',
//       borderRadius: 2,
//       boxShadow: 2,
//     }}
//   >
//     <CardContent>
//       <Typography variant="h6">Application Development</Typography>
//       <Typography variant="body2" sx={{ mb: 2 }}>CSIT321</Typography>
//       <Button
//         variant="contained"
//         sx={{
//           backgroundColor: '#7b2c3c',
//           borderRadius: 5,
//           textTransform: 'none',
//           px: 3,
//         }}
//       >
//         View
//       </Button>
//     </CardContent>
//   </Card>

//   <Card
//     sx={{
//       width: 250,
//       border: '2px solid #FAD85D',
//       borderRadius: 2,
//       boxShadow: 2,
//     }}
//   >
//     <CardContent>
//       <Typography variant="h6">Networking 2</Typography>
//       <Typography variant="body2" sx={{ mb: 2 }}>IT228</Typography>
//       <Button
//         variant="contained"
//         sx={{
//           backgroundColor: '#7b2c3c',
//           borderRadius: 5,
//           textTransform: 'none',
//           px: 3,
//         }}
//       >
//         View
//       </Button>
//     </CardContent>
//   </Card>

//   {/* Announcements */}
//   <Card
//     sx={{
//       backgroundColor: '#FEE28A',
//       width: 200,
//       borderRadius: 2,
//       padding: 2,
//       height: '100%', // So it aligns nicely
//     }}
//   >
//     <CardContent>
//       <Typography variant="h6">Announcements</Typography>
//     </CardContent>
//   </Card>
// </div>
// </div>
//     </div>
//   );
// }


//MODIFIED CODE | 06-23-25
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Divider,
//   Button,
//   Paper
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// import Header from '../../Components/Header';
// import Sidebar from '../../Components/Sidebar';
// import Card from '../../Components/Card';

// const menuItems = [
//   { text: 'Home', onClick: () => window.location.href = '/studentDashboard' },
//   { text: 'My Bookings', onClick: () => window.location.href = '/my-bookings' },

//   { text: 'Logout' },
// ];

// export default function StudentDashboard() {
//   const [tutorBookings, setTutorBookings] = useState([]);
//   const [announcements, setAnnouncements] = useState([]);
//   const [studentName, setStudentName] = useState('');
//   const navigate = useNavigate();
//   const studentId = localStorage.getItem('student_id');

//   useEffect(() => {
//     if (!studentId) return;
//     fetch(`http://localhost:8080/student/getById/${studentId}`)
//       .then(res => res.json())
//       .then(data => setStudentName(data.first_name))
//       .catch(err => console.error('Error fetching student name:', err));
//   }, [studentId]);

//   useEffect(() => {
//     if (!studentId) return;
//     fetch('http://localhost:8080/booking/all')
//       .then(res => res.json())
//       .then(data => {
//         const filtered = data.filter(b => b.student?.student_id === parseInt(studentId));
//         const sorted = filtered
//           .filter(b => new Date(b.sessionDateTime) >= new Date())
//           .sort((a, b) => new Date(a.sessionDateTime) - new Date(b.sessionDateTime));
//         setTutorBookings(sorted);
//       })
//       .catch(err => console.error('Error fetching bookings:', err));
//   }, [studentId]);

//   useEffect(() => {
//     fetch('http://localhost:8080/announcement/getAllAnnounce')
//       .then(res => res.json())
//       .then(data => {
//         const sorted = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
//         setAnnouncements(sorted.slice(0, 5));
//       })
//       .catch(err => console.error('Error fetching announcements:', err));
//   }, []);

//   const handleViewClick = () => {
//     navigate('/tutee/my-bookings');
//   };

//   return (
//     <>
//       <Header
//         title="Student Dashboard"
//         leftIcon={<Sidebar menuItems={menuItems} />}
//       />

//       {/* Welcome Container (full width) */}
//       <Paper elevation={3} sx={{ textAlign: 'center', p: 4, mb: 6, background: 'linear-gradient(180deg, #F8C400 0%, #812c33 100%)' }}>
//         <Typography variant="h4" fontWeight="bold" color="white">
//           Welcome back, {studentName}!
//         </Typography>
//         <Typography variant="subtitle1" color="white">
//           Work smart, not harder
//         </Typography>
//       </Paper>

//       {/* Row containing Upcoming Bookings and Announcements */}
//       <Grid container spacing={3}>
//         {/* Upcoming Tutoring Schedule on the left */}
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
//             <Typography
//               variant="h5"
//               gutterBottom
//               color="text.primary"
//               fontWeight="600"
//               mb={2}
//             >
//               📅 Upcoming Tutoring Schedule
//             </Typography>
//             <Grid container spacing={3}>
//               {tutorBookings.length > 0 ? (
//                 tutorBookings.map((booking) => (
//                   <Grid item xs={12} key={booking.booking_id}>
//                     <Card
//                       title={`${booking.tutor?.student?.first_name} ${booking.tutor?.student?.last_name}`}
//                       content={`Subject: ${booking.subject}`}
//                       style={{ backgroundColor: '#FAE8A7', borderColor: '#1976d2' }}
//                     >
//                       <Typography sx={{ mb: 1 }}>
//                         <strong>Status:</strong> {booking.status || 'N/A'}
//                       </Typography>
//                       <Typography sx={{ mb: 2 }}>
//                         Date: {new Date(booking.sessionDateTime).toLocaleString()}
//                       </Typography>
//                       <Button variant="contained" onClick={handleViewClick}>
//                         View
//                       </Button>
//                     </Card>
//                   </Grid>
//                 ))
//               ) : (
//                 <Grid item xs={12}>
//                   <Typography color="text.secondary">
//                     No upcoming bookings.
//                   </Typography>
//                 </Grid>
//               )}
//             </Grid>
//           </Paper>
//         </Grid>

//         {/* Announcements on the right */}
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ p: 4, height: '100%', backgroundColor: '#FAE8A7' }}>
//             <Typography variant="h6" fontWeight="bold" color="black" mb={2}>
//               📢 Announcements
//             </Typography>
//             <Divider sx={{ mb: 2 }} />
//             {announcements.length > 0 ? (
//               announcements.map(item => (
//                 <Box
//                   key={item.announcement_id}
//                   sx={{
//                     mb: 2,
//                     px: 3,
//                     py: 2,
//                     border: '1px solid #ccc',
//                     borderRadius: 2,
//                     backgroundColor: '#F8C400',
//                   }}
//                 >
//                   <Typography>{item.message}</Typography>
//                   <Typography variant="caption" color="text.secondary">
//                     🕒 Posted on: {new Date(item.created_at).toLocaleString()}
//                   </Typography>
//                 </Box>
//               ))
//             ) : (
//               <Typography color="text.secondary">
//                 No announcements yet.
//               </Typography>
//             )}
//           </Paper>
//         </Grid>
//       </Grid>
//       {/* </Box> */}
//     </>
//   );
// }


//MODIFIED CODE | 06-24-25 | UI ONLY 
import React from 'react';
import {
  Typography,
  Grid,
  Divider,
  Button,
} from '@mui/material';

import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import Card from '../../Components/Card';
import './CSS/TuteeDashboard.css';

const menuItems = [
  { text: 'Home', onClick: () => window.location.href = '/tuteeDashboard' },
  { text: 'My Bookings', onClick: () => window.location.href = '/my-bookings' },
  { text: 'Logout' },
];

export default function TuteeDashboard() {
  return (
    <>
      <Header
        title="Tutee Dashboard"
        leftIcon={<Sidebar menuItems={menuItems} />}
      />

      {/* Welcome Container */}
      <div className="welcome-container">
        <Typography variant="h4" className="welcome-title">
          Welcome back, Student!
        </Typography>
        <Typography variant="subtitle1" className="welcome-subtitle">
          Work smart, not harder
        </Typography>
      </div>

      {/* Main Content Grid */}
      <Grid container spacing={3}>
        {/* Upcoming Bookings */}
        <Grid item xs={12} md={6}>
          <div className="bookings-section">
            <Typography variant="h5" gutterBottom className="section-title">
              📅 Upcoming Tutoring Schedule
            </Typography>
            <br></br>

            <div className="card-container">
              <Card
                title="John Doe"
                content="Subject: IM2"
                style={{ backgroundColor: '#FAE8A7', borderColor: '#1976d2' }}
              >

                <Typography className="card-status">
                  <strong>Status:</strong> Confirmed
                </Typography>
                <Typography className="card-date">
                  Date: June 25, 2025, 10:00 AM
                </Typography>
                <Button className="view-button">View</Button>
              </Card>

              <Card
                title="John Doe"
                content="Subject: IM2"
                style={{ backgroundColor: '#FAE8A7', borderColor: '#1976d2' }}
              >

                <Typography className="card-status">
                  <strong>Status:</strong> Confirmed
                </Typography>
                <Typography className="card-date">
                  Date: June 25, 2025, 10:00 AM
                </Typography>
                <Button className="view-button">View</Button>
              </Card>

              <Card
                title="John Doe"
                content="Subject: IM2"
                style={{ backgroundColor: '#FAE8A7', borderColor: '#1976d2' }}
              >

                <Typography className="card-status">
                  <strong>Status:</strong> Confirmed
                </Typography>
                <Typography className="card-date">
                  Date: June 25, 2025, 10:00 AM
                </Typography>
                <Button className="view-button">View</Button>
              </Card>

              {/* You can append more <Card> components here */}
            </div>
          </div>
        </Grid>


        {/* Announcements */}
        <Grid item xs={12} md={6}>
          <div className="announcement-section">
            <Typography variant="h6" className="section-title">
              📢 Announcements
            </Typography>
            <Divider className="announcement-divider" />
            <div className="announcement-box">
              <Typography>Midterm schedule will be posted soon.</Typography>
              <Typography variant="caption" color="text.secondary">
                🕒 Posted on: June 20, 2025, 8:00 AM
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

