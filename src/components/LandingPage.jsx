import React from 'react';
import '../components/LandingPage.css';
import bgLanding from '../assets/images/bgLanding.jpg';
import MainImage from '../assets/images/Main.jpg';

const LandingPage = () => {
  return (
    <div className="landing-container" style={{ backgroundImage: `url(${bgLanding})` }}>
      <div className="navbar">
        <div className="logo">WILDTEACH</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">What is Wild Teach?</a>
          <a href="#">About us</a>
          <a href="#">Contact Us</a>
        </div>
      </div>

      <div className="content-box">
        <div className="left-side">
          <img src={MainImage} alt="Main visual" className="main-image" />
        </div>
        <div className="right-side">
          <h2>Empower Students</h2>
          <div className="tags">
            <span>Learn</span>
            <span>Teach</span>
            <span>Succeed</span>
            <span>Together</span>
          </div>
          <p>
            Connect students who need academic support with peer tutors on campus.
            Simplify booking, scheduling, and payments, making learning more
            accessible and tutoring more rewarding.
          </p>
          <div className="buttons">
            <button className="login-btn">Login</button>
            <button className="register-btn">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
