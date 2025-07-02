import React from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/Styles/LandingPage/LandingPage.css";

import LandingHeader from "../Components/Shared/LandingHeader";
import HomeSection from "../Components/LandingPage/HomeSection";
import WhatIsWildTeach from "../Components/LandingPage/WhatIsWildTeach";
import AboutSection from "../Components/LandingPage/AboutSection";
import ContactSection from "../Components/LandingPage/ContactSection";

const LandingPage = ({ section }) => {
  const navigate = useNavigate();

  const goToLogin = () => navigate("/login");
  const goToRegister = () => navigate("/register");

  return (
    <div className="landing-container">
      <LandingHeader />
      <div className="landing-switch">
        {section === "home" && (
          <HomeSection onLogin={goToLogin} onRegister={goToRegister} />
        )}
        {section === "what-is-wildteach" && <WhatIsWildTeach />}
        {section === "about-us" && <AboutSection />}
        {section === "contact-us" && <ContactSection />}
      </div>
    </div>
  );
};

export default LandingPage;
