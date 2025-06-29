import React from "react";
import { FaUserFriends, FaMoneyBillWave, FaUniversity } from "react-icons/fa";

export default function WhatIsWildTeach() {
  return (
    <div className="wildteach-fullscreen">
      <div className="wildteach-content">
        <div className="wildteach-inner">
          <div className="wildteach-hero">
            <div className="section-badge">
              <span>🎓 PEER LEARNING REVOLUTION</span>
            </div>

            <h1 className="wildteach-title">
              What is <span className="title-highlight">WildTeach</span>?
            </h1>

            <p className="wildteach-subtitle">
              Transform Your Learning Experience
            </p>

            <p className="wildteach-description-text">
              Connect with knowledgeable peers for personalized academic support
            </p>
          </div>

            <div className="wildteach-description">
              <p>At WildTeach, learning feels less like a chore and more like a team effort. 
                We match you with fellow students who truly get the subject, 
                so you can ask questions, learn faster, and feel supported every step of the way.</p>
                
              <p className="highlight-text">
                Whether you're getting help or giving it, everything happens right on campus making learning easier, 
                more meaningful, and even more fun!
                </p>
            </div>


          <div className="features-showcase">
            <div className="feature-card">
              <div className="feature-icon">
                <FaUserFriends />
              </div>
              <h3>Peer Learning</h3>
              <p>Connect with knowledgeable students</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaMoneyBillWave />
              </div>
              <h3>Earn Money</h3>
              <p>Tutors get rewarded for teaching</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaUniversity />
              </div>
              <h3>On Campus</h3>
              <p>Convenient campus-based learning</p>
            </div>
          </div>

          <div className="cta-section">
            <h2 className="cta-title">Join the Movement Today!</h2>
            <p className="cta-subtitle">Start Your Learning Journey</p>
            <button className="cta-btn">
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
