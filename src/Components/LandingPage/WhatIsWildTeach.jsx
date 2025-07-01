import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserFriends, FaMoneyBillWave, FaUniversity } from "react-icons/fa";
import FeatureCard from "../Shared/LandingPage/FeatureCard";


export default function WhatIsWildTeach() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaUserFriends />,
      title: "Peer Learning",
      description: "Connect with knowledgeable students",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Earn Money",
      description: "Tutors get rewarded for teaching",
    },
    {
      icon: <FaUniversity />,
      title: "On Campus",
      description: "Convenient campus-based learning",
    },
  ];

  return (
    <div className="wildteach-fullscreen">
      <div className="wildteach-content">
        <div className="wildteach-inner">
          {/* HERO */}
          <div className="wildteach-hero">
            <div className="section-badge">🎓 PEER LEARNING REVOLUTION</div>
            <h1 className="wildteach-title">
              What is <span className="title-highlight">WildTeach</span>?
            </h1>
            <p className="wildteach-subtitle">Transform Your Learning Experience</p>
            <p className="wildteach-description-text">
              Connect with knowledgeable peers for personalized academic support
            </p>
          </div>

          {/* DESCRIPTION */}
          <div className="wildteach-description">
            <p>
              At WildTeach, learning feels less like a chore and more like a team effort. We match
              you with fellow students who truly get the subject, so you can ask questions, learn
              faster, and feel supported every step of the way.
            </p>
            <p className="highlight-text">
              Whether you're getting help or giving it, everything happens right on campus making
              learning easier, more meaningful, and even more fun!
            </p>
          </div>

          {/* FEATURES */}
          <div className="features-showcase">
            {features.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>

          {/* CTA */}
          <div className="cta-section">
            <h2 className="cta-title">Join the Movement Today!</h2>
            <p className="cta-subtitle">Start Your Learning Journey</p>
            <button className="cta-btn" onClick={() => navigate("/login")}>
              <span>BE PART OF IT</span>
              <div className="btn-shine"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="wildteach-decorations">
        <div className="deco-circle"></div>
        <div className="deco-square"></div>
        <div className="deco-triangle"></div>
      </div>
    </div>
  );
}
