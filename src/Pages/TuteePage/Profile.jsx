import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import menuTutee from "../../RoutesConfig/MenuTutee";
import ProfileInfo from "../../Components/Panels/ProfileInfo";
import PersonalInfo from "../../Components/Panels/PersonalInfo";
// import AddressInfo from "../../Components/Panels/AddressInfo";
import useTuteeProfile from "../../Components/Tutee/Data/useTuteeProfile";

import "../../Pages/Styles/TuteePage/TuteeGlobals.css";
// import "../../Pages/Styles/TuteePage/TuteeProfile.css";

export default function Profile() {
  const studentId = localStorage.getItem("student_id");
  const { profile, loading } = useTuteeProfile(studentId);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (!profile) return <p>Profile not found.</p>;

  return (
    <DashboardLayout
      title="Profile"
      role="tutee"
      menuItems={menuTutee(navigate)}
    >
      <div className="profile-container">
        <h2 className="profile-title">Profile</h2>
        <ProfileInfo profile={profile} />
        <PersonalInfo profile={profile} />
        {/* <AddressInfo profile={profile} /> */}
      </div>
    </DashboardLayout>
  );
}
