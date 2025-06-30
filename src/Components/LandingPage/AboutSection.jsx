import React from "react";
import TeamMemberCard from "../Shared/LandingPage/TeamMemberCard";
import SectionHeader from "../Shared/LandingPage/SectionHeader";

export default function AboutSection() {
  const team = [
    {
      name: "Berna",
      role: "Front-End & System Development",
      image: "src/assets/images/bernaPic.jpg",
    },
    {
      name: "Juvie",
      role: "UI/UX Design & User Experience",
      image: "src/assets/images/juviePic.jpg",
    },
    {
      name: "Kyle",
      role: "Back-End Development & System Logic",
      image: "src/assets/images/kylePic1.jpg",
    },
  ];

  return (
    <section className="about-fullscreen">
      <div className="about-content">
        <SectionHeader
          badge="About WildTeach"
          title="Meet the"
          highlight="Visionaries"
          subtitle="Building better ways for students to learn, together"
          layout="vertical"
        />

        <div className="team-showcase">
          {team.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              imageSrc={member.image}
            />
          ))}
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            WildTeach empowers students through{" "}
            <span className="highlight-text">peer learning</span>. We create a
            space where academic support is accessible, collaborative, and
            student-driven.
          </p>
        </div>
      </div>
    </section>
  );
}
