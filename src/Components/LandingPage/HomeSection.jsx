import React from "react";
import "../../Pages/Styles/LandingPage/HomeSection.css";
import SectionHeader from "../Shared/LandingPage/SectionHeader";
import MainImage from "../../assets/images/Main.jpg";
import bgLanding from "../../assets/images/bgLanding.jpg";

export default function HomeSection({ onLogin, onRegister }) {
  const tags = ["Learn", "Teach", "Succeed", "Together"];

  return (
    <div className="home-section">
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${bgLanding})` }}
      ></div>

      <div className="content-box">
        <div className="left-side">
          <img src={MainImage} alt="Main visual" className="main-image" />
        </div>

        <div className="right-side">
          <div className="home-title">
            <SectionHeader
              badge={null}
              title="Empower"
              highlight="Students"
              subtitle={null}
              layout="vertical"
            />
          </div>

          <div className="tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <p className="section-subtitle">
            Connect students who need academic support with peer tutors on
            campus. Simplify booking, scheduling, and payments, making learning
            more accessible and tutoring more rewarding.
          </p>

          <div className="buttons">
            <button className="login-btn" onClick={onLogin}>
              Login
            </button>
            <button className="register-btn" onClick={onRegister}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
