import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Pages/Styles/LandingPage.css';

import LandingHeader from '../Components/Shared/LandingHeader';
import HomeSection from '../Components/LandingPage/HomeSection';
import WhatIsWildTeach from '../Components/LandingPage/WhatIsWildTeach';
import AboutSection from '../Components/LandingPage/AboutSection';
import ContactSection from '../Components/LandingPage/ContactSection';

const LandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('Home');

  useEffect(() => {
    const pageFromState = location.state?.scrollTo;
    if (pageFromState) {
      setActivePage(pageFromState);
      navigate(location.pathname, { replace: true, state: {} }); // Clear state
    }
  }, [location, navigate]);

  const goToLogin = () => navigate('/login');
  const goToRegister = () => navigate('/register');

  return (
    <div className="landing-container">
      <LandingHeader />
      <div className="landing-switch">
        {activePage === 'Home' && <HomeSection onLogin={goToLogin} onRegister={goToRegister} />}
        {activePage === 'What is WildTeach?' && <WhatIsWildTeach />}
        {activePage === 'About Us' && <AboutSection />}
        {activePage === 'Contact Us' && <ContactSection />}
      </div>
    </div>
  );
};

export default LandingPage;
