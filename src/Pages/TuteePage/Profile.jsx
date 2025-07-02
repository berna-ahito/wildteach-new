import React from "react";
import menuTutee from "../../RoutesConfig/MenuTutee";
import Sidebar from "../../Components/Shared/Sidebar";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "../../Components/Panels/ProfileInfo";
import PersonalInfo from "../../Components/Panels/PersonalInfo";
import AddressInfo from "../../Components/Panels/AddressInfo";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import "../../Pages/Styles/TutorPage.css"; // ✅ using same styling

export default function Profile() {
  const navigate = useNavigate();
  const profile = {
    fullname: "Tutee Name",
    email: "tutee@email.com",
    dob: "May 10, 2004",
    address: "Davao City",
    phone: "09987654321",
    city: "Davao City",
    province: "Davao del Sur",
    home_address: "456 Matina, Davao",
  };

  return (
    <DashboardLayout title="Profile" role="tutee">
      <div className="profile-container">
        <h2 className="profile-title">Profile</h2>
        <ProfileInfo profile={profile} />
        <PersonalInfo profile={profile} />
        {/* ❌ Omit SkillsSubjects */}
        <AddressInfo profile={profile} />
      </div>
    </DashboardLayout>
  );
}
