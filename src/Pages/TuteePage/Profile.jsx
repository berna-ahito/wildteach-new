import React from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import ProfileInfo from "../../Components/Panels/ProfileInfo";
import PersonalInfo from "../../Components/Panels/PersonalInfo";
import SectionHeader from "../../Components/Shared/LandingPage/SectionHeader";
import useTutorProfile from "../../Components/Tutor/Data/TutorProfileData";

import "../../Pages/Styles/Shared/CommonComponents.css";
import "../../Pages/Styles/TutorPage/TutorGlobals.css";

export default function Profile() {
  const userId = localStorage.getItem("student_id");
  const { profile, loading } = useTutorProfile(userId);

  if (loading) return <p>Loading...</p>;
  if (!profile) return <p>Profile not found.</p>;

  return (
    <DashboardLayout title="Profile" role="tutee">
      <div style={{ marginTop: "30%", marginBottom: "40px" }}>
        <SectionHeader
          badge="PROFILE"
          title="Your"
          highlight="Profile"
          subtitle="Manage your personal and account information"
          layout="vertical"
          align="center"
          className="profile-header section-header-profile"
        />
      </div>
      <div className="glass-card">
        <div className="profile-container">
          <div className="profile-info">
            <ProfileInfo profile={profile} />
          </div>

          <div className="personal-info">
            <PersonalInfo profile={profile} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
