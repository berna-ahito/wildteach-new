import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pages/Styles/LandingPage.css';
import bgLanding from '../assets/images/bgLanding.jpg';

import LandingHeader from '../Components/Shared/LandingHeader';
import HomeSection from '../Components/LandingPage/HomeSection';
import WhatIsWildTeach from '../Components/LandingPage/WhatIsWildTeach';
import AboutSection from '../Components/LandingPage/AboutSection';
import ContactSection from '../Components/LandingPage/ContactSection';

const LandingPage = () => {
  const [activePage, setActivePage] = useState('Home');
  const navigate = useNavigate();

  const goToLogin = () => navigate('/login');
  const goToRegister = () => navigate('/register');

  return (
    <div className="landing-container">
      <div className="bg-image" style={{ backgroundImage: `url(${bgLanding})` }}></div>

      <LandingHeader activePage={activePage} setActivePage={setActivePage} />

      <div className="landing-content">
        {activePage === 'Home' && <HomeSection onLogin={goToLogin} onRegister={goToRegister} />}
        {activePage === 'What is WildTeach?' && <WhatIsWildTeach />}
        {activePage === 'About Us' && <AboutSection />}
        {activePage === 'Contact Us' && <ContactSection />}
      </div>
    </div>
  );
};

export default LandingPage;
