// import React from "react";
// import { useNavigate } from "react-router-dom";
// import DashboardLayout from "../../Components/Layout/DashboardLayout";
// import menuTutee from "../../RoutesConfig/MenuTutee";
// import ProfileInfo from "../../Components/Panels/ProfileInfo";
// import PersonalInfo from "../../Components/Panels/PersonalInfo";
// import useTuteeProfile from "../../Components/Tutee/Data/useTuteeProfile";

// import "../../Pages/Styles/TuteePage/TuteeGlobals.css";
// import "../../Pages/Styles/TuteePage/TuteeProfile.css";


// export default function Profile() {
//   const studentId = localStorage.getItem("student_id");
//   const { profile, loading } = useTuteeProfile(studentId);
//   const navigate = useNavigate();

//   if (loading) return <p>Loading...</p>;
//   if (!profile) return <p>Profile not found.</p>;

//   return (
//     <DashboardLayout
//       title="Profile"
//       role="tutee"
//       menuItems={menuTutee(navigate)}
//     >
//       <div className="profile-container">
//         <h2 className="profile-title">Profile</h2>
//         <ProfileInfo profile={profile} />
//         <PersonalInfo profile={profile} />
//       </div>
//     </DashboardLayout>
//   );
// }


// // import React from "react";
// // import Sidebar from "../../Components/Shared/Sidebar";
// // import ProfileInfo from "../../Components/Panels/ProfileInfo";
// // import PersonalInfo from "../../Components/Panels/PersonalInfo";
// // import SkillsSubjects from "../../Components/Panels/SkillsSubjects";
// // import DashboardLayout from "../../Components/Layout/DashboardLayout";
// // import "../../Pages/Styles/Shared/CommonComponents.css";
// // import "../../Pages/Styles/TutorPage/TutorGlobals.css";
// // import useTutorProfile from "../../Components/Tutor/Data/TutorProfileData";

// // export default function Profile() {
// //   const userId = localStorage.getItem("student_id");
// //   const { profile, loading } = useTutorProfile(userId);

// //   if (loading) return <p>Loading...</p>;
// //   if (!profile) return <p>Profile not found.</p>;

// //   return (
// //     <DashboardLayout title="Profile" role="tutor">
// //       <div className="profile-container">
// //         <div className="profile-container">
// //           <h2 className="profile-title-inside">Profile</h2>{" "}
// //           {/* ✅ moved inside */}
// //           <div className="profile-info">
// //             <ProfileInfo profile={profile} />
// //           </div>
// //           <div className="">
// //             <div className="personal-info">
// //               <PersonalInfo profile={profile} />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </DashboardLayout>
// //   );
// // }



import React from "react";
import Sidebar from "../../Components/Shared/Sidebar";
import ProfileInfo from "../../Components/Panels/ProfileInfo";
import PersonalInfo from "../../Components/Panels/PersonalInfo";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import "../../Pages/Styles/Shared/CommonComponents.css";
import "../../Pages/Styles/TutorPage/TutorGlobals.css";
import useTutorProfile from "../../Components/Tutor/Data/TutorProfileData";

export default function Profile() {
  const userId = localStorage.getItem("student_id");
  const { profile, loading } = useTutorProfile(userId);

  if (loading) return <p>Loading...</p>;
  if (!profile) return <p>Profile not found.</p>;

  return (
    <DashboardLayout title="Profile" role="tutee">
      <div className="profile-container">
        <div className="profile-container">
          <h2 className="profile-title-inside">Profile</h2>{" "}
          {/* ✅ moved inside */}
          <div className="profile-info">
            <ProfileInfo profile={profile} />
          </div>
          <div className="profile-infor">
            <div className="personal-info">
              <PersonalInfo profile={profile} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
