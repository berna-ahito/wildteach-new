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


import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../Components/Layout/DashboardLayout';
import UpcomingSchedulePanel from '../../Components/Tutee/Panels/UpcomingSchedulePanel';
import AdminSystemAnnouncement from '../../Components/Admin/Data/AdminSystemAnnouncement';
import WavingHandIcon from '@mui/icons-material/WavingHand';

import '../Styles/TutorPage.css';

export default function TuteeDashboard() {
  const navigate = useNavigate();

  return (
    <DashboardLayout title="WILDTEACH" role="tutee">
      <div className="greeting-section">
        <div className="greeting-avatar">
          <WavingHandIcon fontSize="large" />
        </div>
        <div>
          <h1>Hello, Student!</h1>
          <p>Welcome back to your learning journey!</p>
        </div>
      </div>

      <div className="dashboard-panels">
        <UpcomingSchedulePanel />
        <AdminSystemAnnouncement />
      </div>
    </DashboardLayout>
  );
}
