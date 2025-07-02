// import React from 'react';
// import TuteeDashboardLayout from '../../Components/Layout/TuteeDashboardLayout';
// import UpcomingSchedulePanel from '../../Components/Tutee/Panels/UpcomingSchedulePanel';
// // import AnnouncementsPanel from '../../Components/Tutee/Panels/AnnouncementsPanel';
// import AdminSystemAnnouncement from '../../Components/Admin/Data/AdminSystemAnnouncement';
// import WavingHandIcon from '@mui/icons-material/WavingHand';
// import "../Styles/TutorPage.css";

// export default function TuteeDashboard() {
//   return (
//     <TuteeDashboardLayout title="WILDTEACH">
//       <header className="greeting-section">
//         <div className="greeting-avatar">
//           <WavingHandIcon fontSize="large" />
//         </div>
//         <div>
//           <h1>Hello, Student!</h1>
//           <p>Welcome back to your learning journey!</p>
//         </div>
//       </header>

//       <div className="dashboard-panels">
//         <UpcomingSchedulePanel />
//         <AdminSystemAnnouncement />
//         {/* <AnnouncementsPanel /> */}
//       </div>
//     </TuteeDashboardLayout>
//   );
// }

//WORKING CODE v1 | 07-01-25
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import DashboardLayout from '../../Components/Layout/DashboardLayout';
// import UpcomingSchedulePanel from '../../Components/Tutee/Panels/UpcomingSchedulePanel';
// import AdminSystemAnnouncement from '../../Components/Admin/Data/AdminSystemAnnouncement';
// import WavingHandIcon from '@mui/icons-material/WavingHand';

// import '../Styles/TutorPage.css';

// export default function TuteeDashboard() {
//   const navigate = useNavigate();

//   return (
//     <DashboardLayout title="WILDTEACH" role="tutee">
//       <div className="greeting-section">
//         <div className="greeting-avatar">
//           <WavingHandIcon fontSize="large" />
//         </div>
//         <div>
//           <h1>Hello, Student!</h1>
//           <p>Welcome back to your learning journey!</p>
//         </div>
//       </div>

//       <div className="dashboard-panels">
//         <UpcomingSchedulePanel />
//         <AdminSystemAnnouncement />
//       </div>
//     </DashboardLayout>
//   );
// }

//WORKING CODE v2 | 07-01-25
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../Components/Layout/DashboardLayout';
import UpcomingSchedulePanel from '../../Components/Tutee/Panels/UpcomingSchedulePanel';
import Announcement from '../../Components/Panels/Announcement';
import WavingHandIcon from '@mui/icons-material/WavingHand';

import '../Styles/TutorPage.css';

export default function TuteeDashboard() {
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState('');
  const studentId = localStorage.getItem('student_id');

  // 🔁 Fetch student first_name
  useEffect(() => {
    if (!studentId) return;

    fetch(`http://localhost:8080/student/getById/${studentId}`)
      .then(res => res.json())
      .then(data => {
        setStudentName(data.first_name); 
      })
      .catch(err => {
        console.error("Failed to fetch student name:", err);
      });
  }, [studentId]);

  return (
    <DashboardLayout title="WILDTEACH" role="tutee">
      <div className="greeting-section">
        <div className="greeting-avatar">
          <WavingHandIcon fontSize="large" />
        </div>
        <div>
          <h1>Hello, {studentName || 'Student'}!</h1>
          <p>Welcome back to your learning journey!</p>
        </div>
      </div>

      <div className="dashboard-panels">
        <UpcomingSchedulePanel />
        <Announcement />
      </div>
    </DashboardLayout>
  );
}
