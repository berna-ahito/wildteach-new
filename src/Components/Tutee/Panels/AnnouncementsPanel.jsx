// import React from 'react';
// import { Typography, Divider } from '@mui/material';
// import useTuteeData from '../Data/useTuteeData';

// export default function AnnouncementsPanel() {
//   const { announcements } = useTuteeData();

//   return (
//     <div className="panel-card">
//       <div className="tutee-panel-header">
//         <h3>📢 Announcements</h3>
//       </div>
//       <Divider className="announcement-divider" />
//       <div className="announcement-box">
//         {announcements.length === 0 ? (
//           <Typography variant="body2">No announcements available.</Typography>
//         ) : (
//           announcements.map((item) => (
//             <div key={item.id} style={{ marginBottom: '1rem' }}>
//               <Typography>{item.message}</Typography>
//               <Typography variant="caption" color="text.secondary">
//                 🕒 Posted on: {item.datePosted}
//               </Typography>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
