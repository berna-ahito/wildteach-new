import React from "react";

export default function AboutSection() {
  return (
    <section className="about-fullscreen">
      <div className="about-content">
        <div className="about-header">
          <span className="section-badge">About WildTeach</span>
          <h1 className="about-title">
            Meet the <span className="title-highlight">Visionaries</span>
          </h1>
          <p className="about-subtitle">
            Building better ways for students to learn, together
          </p>
        </div>

        <div className="team-showcase">
          <div className="team-member">
            <div className="member-image">
              <img src="src/assets/images/bernaPic.jpg" alt="Berna" />
            </div>
            <h3>Berna</h3>
            <p>Front-End & System Development</p>
          </div>

          <div className="team-member">
            <div className="member-image">
              <img src="src/assets/images/juviePic.jpg" alt="Juvie" />
            </div>
            <h3>Juvie</h3>
            <p>UI/UX Design & User Experience</p>
          </div>

          <div className="team-member">
            <div className="member-image">
              <img src="src/assets/images/kylePic1.jpg" alt="Kyle" />
            </div>
            <h3>Kyle</h3>
            <p>Back-End Development & System Logic</p>
          </div>
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            WildTeach empowers students through <span className="highlight-text">peer learning</span>. 
            We create a space where academic support is accessible, collaborative, and student-driven.
          </p>
        </div>
      </div>
    </section>
  );
}
