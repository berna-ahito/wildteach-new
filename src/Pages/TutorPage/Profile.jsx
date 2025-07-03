import React from "react";
import Sidebar from "../../Components/Shared/Sidebar";
import ProfileInfo from "../../Components/Panels/ProfileInfo";
import PersonalInfo from "../../Components/Panels/PersonalInfo";
import SkillsSubjects from "../../Components/Panels/SkillsSubjects";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import "../../Pages/Styles/TutorPage.css";
import useTutorProfile from "../../Components/Tutor/Data/TutorProfileData";

export default function Profile() {
  const userId = localStorage.getItem("student_id");
  const { profile, loading } = useTutorProfile(userId);

  if (loading) return <p>Loading...</p>;
  if (!profile) return <p>Profile not found.</p>;

  return (
    <DashboardLayout title="Profile" role="tutor">
      <div className="profile-container">
        <h2 className="profile-title">Profile</h2>
        <ProfileInfo profile={profile} />
        <PersonalInfo profile={profile} />
        <SkillsSubjects profile={profile} />
      </div>
    </DashboardLayout>
  );
}
