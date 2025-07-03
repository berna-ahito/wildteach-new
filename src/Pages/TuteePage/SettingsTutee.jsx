// import React from "react";
// import DashboardLayout from "../../Components/Layout/DashboardLayout";
// import ChangePassword from "../../Components/Panels/ChangePassword";
// import GroupIcon from "@mui/icons-material/Settings"; 
// import "../../Pages/Styles/TutorPage.css"; 
// import "../../Pages/Styles/TuteePage.css";

// export default function SettingsTutee() {
//   return (
//     <DashboardLayout title="Settings" role="tutee">
//       <div className="greeting-section">
//         <div className="greeting-avatar">
//           <GroupIcon fontSize="large" />
//         </div>
//         <div>
//           <h1>Settings Panel</h1>
//           <p>Manage your credentials and preferences here</p>
//         </div>
//       </div>

//       <div className="forms">
//         <ChangePassword role="tutee"/>
//       </div>
//     </DashboardLayout>
//   );
// }


import React from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import ChangePassword from "../../Components/Panels/ChangePassword";
import GroupIcon from "@mui/icons-material/Settings";
import "../../Pages/Styles/TutorPage.css";
import "../../Pages/Styles/Admin.css";

export default function Settings() {
  const rawUser = localStorage.getItem("user");
  const user = rawUser ? JSON.parse(rawUser) : null;

  if (!user) {
    return (
      <div className="settings-error">
        <h2>❌ No user logged in</h2>
        <p>Please log in again to access settings.</p>
      </div>
    );
  }

  const role = user.role?.toLowerCase() || "tutee"; // fallback to "tutor"
  const userId = user.student_id;
  const email = user.email || "";

  return (
    <DashboardLayout title="WILDTEACH" role={role}>
      <div className="greeting-section">
        <div className="greeting-avatar">
          <GroupIcon fontSize="large" />
        </div>
        <div>
          <h1>Settings Panel</h1>
          <p>Manage your credentials and system preferences here</p>
        </div>
      </div>

      <div className="forms">
        <ChangePassword role={role} userId={userId} email={email} />
      </div>
    </DashboardLayout>
  );
}
