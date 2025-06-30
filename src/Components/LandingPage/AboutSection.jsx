import React from "react";
 
export default function AboutSection() {
  return (
    <div className="about-fullscreen">
      {/* Floating Brand Elements */}
      <div className="brand-float brand-float-1">W</div>
      <div className="brand-float brand-float-2">T</div>
     
      {/* Main Content */}
      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <div className="section-badge">Meet Our Team</div>
          <h1 className="about-title">
            The Minds Behind <span className="title-highlight">WildTeach</span>
          </h1>
          <p className="about-subtitle">
            Passionate educators and innovators dedicated to revolutionizing peer-to-peer learning
          </p>
        </div>
 
        {/* Team Grid */}
        <div className="team-grid">
          <div className="team-member member-primary">
            <div className="member-image-container">
              <img src="src/assets/images/bernaPic.jpg" alt="Berna" className="member-image" />
              <div className="member-overlay">
                <div className="member-role">Lead Developer</div>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Berna</h3>
              <p className="member-description">
                Full-stack developer with a passion for creating intuitive educational platforms
              </p>
            </div>
          </div>
 
          <div className="team-member member-secondary">
            <div className="member-image-container">
              <img src="src/assets/images/juviePic.jpg" alt="Juvie" className="member-image" />
              <div className="member-overlay">
                <div className="member-role">UX Designer</div>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Juvie</h3>
              <p className="member-description">
                Designer focused on creating seamless user experiences for learners
              </p>
            </div>
          </div>
 
          <div className="team-member member-tertiary">
            <div className="member-image-container">
              <img src="src/assets/images/kylePic1.jpg" alt="Kyle" className="member-image" />
              <div className="member-overlay">
                <div className="member-role">Product Manager</div>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Kyle</h3>
              <p className="member-description">
                Strategic thinker ensuring WildTeach meets real educational needs
              </p>
            </div>
          </div>
        </div>
 
        {/* Mission Statement */}
        <div className="mission-section">
          <div className="mission-content">
            <div className="mission-icon">🎯</div>
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-text">
              We believe that the best learning happens when students help students. Our platform
              connects learners with peer tutors, making education more accessible, affordable,
              and effective for everyone.
            </p>
          </div>
         
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h4>Collaboration</h4>
              <p>Building bridges between learners</p>
            </div>
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>Pioneering new ways to learn</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌟</div>
              <h4>Excellence</h4>
              <p>Committed to quality education</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
 