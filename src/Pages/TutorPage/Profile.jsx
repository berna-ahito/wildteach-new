import React from "react";
import Sidebar from "../../Components/Shared/Sidebar";
import ProfileInfo from "../../Components/Panels/ProfileInfo";
import PersonalInfo from "../../Components/Panels/PersonalInfo";
import SkillsSubjects from "../../Components/Panels/SkillsSubjects";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import "../../Pages/Styles/Shared/CommonComponents.css";
import "../../Pages/Styles/TutorPage/TutorGlobals.css";
import useTutorProfile from "../../Components/Tutor/Data/TutorProfileData";
import SectionHeader from "../../Components/Shared/LandingPage/SectionHeader";

export default function Profile() {
  const userId = localStorage.getItem("student_id");
  const { profile, loading } = useTutorProfile(userId);

  if (loading) return <p>Loading...</p>;
  if (!profile) return <p>Profile not found.</p>;

  return (
    <DashboardLayout title="Profile" role="tutor">
      <div style={{ marginTop: "15%", marginBottom: "40px" }}>
        <SectionHeader
          badge="PROFILE"
          title="Your"
          highlight="Profile"
          subtitle="Manage your personal information"
          layout="vertical"
          align="center"
          className="profile-header"
        />
      </div>
      <div
        className="glass-card"
        style={{ padding: "32px", marginTop: "-16px" }}
      >
        <div className="profile-container" style={{ marginTop: "0" }}>
          <div className="profile-info">
            <ProfileInfo profile={profile} />
          </div>
          <div className="profile-columns">
            <div className="personal-info">
              <PersonalInfo profile={profile} />
            </div>
            <div className="skills-info">
              <SkillsSubjects profile={profile} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
