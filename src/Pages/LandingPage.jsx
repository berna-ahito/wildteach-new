import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/LandingPage.css';
import bgLanding from '../assets/images/bgLanding.jpg';
import MainImage from '../assets/images/Main.jpg';

const LandingPage = () => {
  const [activePage, setActivePage] = useState('Home');
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="landing-container">
      {/* Blurred Background Layer */}
      <div className="background-blur" style={{ backgroundImage: `url(${bgLanding})` }}></div>

      {/* Main Content */}
      <div className="landing-content">
        {/* Navbar */}
        <div className="navbar">
          <div className="logo">WILDTEACH</div>
          <div className="nav-links">
            {['Home', 'What is WildTeach?', 'About Us', 'Contact Us'].map((page) => (
              <a
                key={page}
                href="#"
                onClick={() => handleNavigation(page)}
                style={{
                  fontWeight: activePage === page ? 'bold' : 'normal',
                  borderBottom: activePage === page ? '2px solid #8d2f2f' : 'none',
                }}
              >
                {page}
              </a>
            ))}
          </div>
        </div>

        {/* Page Sections */}
        {activePage === 'Home' && (
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
                <button className="login-btn" onClick={goToLogin}>Login</button>
                <button className="register-btn">Register</button>
              </div>
            </div>
          </div>
        )}

        {activePage === 'What is WildTeach?' && (
          <div className="overlay">
            <h1 className="title">What is WildTeach?</h1>
            <p className="description">
              <b>Experience the Power of Peer Learning with Wild Teach!</b> Our platform transforms the way 
              students learn by connecting them with knowledgeable peers. Get personalized academic
              support to excel in your studies, while peer tutors earn money and reinforce their own 
              understanding through teaching. Best of all, everything happens right on campus, making 
              learning more convenient, efficient, and rewarding for everyone!
            </p>
              <h2 className="title">Join the Movement Today! Start Your Journey</h2>
              <button className="button">Be Part of It</button>
          </div>
        )}

        {activePage === 'About Us' && (
          <div className="overlay">
            <h1 className="title">About Us</h1>
            <p className="description">We are a team dedicated to making learning social and effective!</p>
          </div>
        )}

        {activePage === 'Contact Us' && (
          <div className="overlay">
            <h1 className="title">Contact Us</h1>
            <p className="description">Reach out to us at support@wildteach.com</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
