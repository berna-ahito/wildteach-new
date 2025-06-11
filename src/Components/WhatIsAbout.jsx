import React, { useState } from 'react';
import './Styles/What.css';

const WhatIsAbout = () => {
  const [activePage, setActivePage] = useState('Home');

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  return (
    <div className='what-is-container'>
      <div className='navigation'>
        <nav className='nav-bar'>
          <h1 className='wild-teach'>WILDTEACH</h1>
          <ul className='nav-list'>
            {['Home', 'What Is WildTeach?', 'About Us', 'Contact Us'].map((page) => (
              <li
                key={page}
                className={`nav-item ${activePage === page ? 'active' : ''}`}
                onClick={() => handleNavigation(page)}
              >
                {page}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='overlay'>
        {activePage === 'Home' && (
          <>
            <h1 className='title'>Welcome to WildTeach!</h1>
            <p className='description'>Your hub for peer-powered learning on campus.</p>
          </>
        )}
        {activePage === 'What Is WildTeach?' && (
          <>
            <h1 className='title'>What is WildTeach?</h1>
            <p className='description'>
              <b>Experience the Power of Peer Learning with Wild Teach!</b> Our platform transforms the way 
                  students learn by connecting them with knowledgeable peers. Get personalized academic
                  support to excel in your studies, while peer tutors earn money and reinforce their own 
                  understanding through teaching. Best of all, everything happens right on campus, making 
                  learning more convenient, efficient, and rewarding for everyone!
            </p>
          </>
        )}
        {activePage === 'About Us' && (
          <>
            <h1 className='title'>About Us</h1>
            <p className='description'>We are a team dedicated to making learning social and effective!</p>
          </>
        )}
        {activePage === 'Contact Us' && (
          <>
            <h1 className='title'>Contact Us</h1>
            <p className='description'>Reach out to us at support@wildteach.com</p>
          </>
        )}

        <h2 className='title'>Join the Movement Today! Start Your Journey</h2>
        <button className='button'>Be Part of It</button>
      </div>
    </div>
  );
};

export default WhatIsAbout;
