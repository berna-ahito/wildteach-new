import React from "react";
import menuTutor from "../../RoutesConfig/MenuTutor";
import Sidebar from "../../Components/Shared/Sidebar";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "../../Components/Panels/ProfileInfo";
import PersonalInfo from "../../Components/Panels/PersonalInfo";
import SkillsSubjects from "../../Components/Panels/SkillsSubjects";
import AddressInfo from "../../Components/Panels/AddressInfo";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import "../../Pages/Styles/TutorPage.css";

export default function Profile() {
  const navigate = useNavigate();
  const profile = {
    fullname: "Berna Ahito",
    email: "berna@cit.edu",
    dob: "April 04, 2001",
    address: "Cebu City",
    phone: "09123456789",
    subjects: ["Subject 1", "Subject 2"],
    skills: ["Skill 1", "Skill 2"],
    city: "Cebu City",
    province: "Cebu Province",
    home_address: "1234 Mabolo, Cebu",
  };

  return (
    <DashboardLayout title="Profile" role="tutor">
      <div className="profile-container">
        <h2 className="profile-title">Profile</h2>
        <ProfileInfo profile={profile} />
        <PersonalInfo profile={profile} />
        <SkillsSubjects profile={profile} />
        <AddressInfo profile={profile} />
      </div>
    </DashboardLayout>
  );
}
