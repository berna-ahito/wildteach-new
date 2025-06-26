import React from "react";
import ProfileInfo from "../../Components/Tutor/Panels/ProfileInfo";
import PersonalInfo from "../../Components/Tutor/Panels/PersonalInfo";
import SkillsSubjects from "../../Components/Tutor/Panels/SkillsSubjects";
import AddressInfo from "../../Components/Tutor/Panels/AddressInfo";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import "../../Pages/Styles/TutorPage.css";

export default function Profile() {
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
    <DashboardLayout title="Profile">
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
