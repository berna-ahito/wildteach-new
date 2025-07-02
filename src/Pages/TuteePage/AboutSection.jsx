import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Shared/Header";
import Sidebar from "../../Components/Shared/Sidebar";
import menuTutee from "../../RoutesConfig/MenuTutee";
import AboutSection from "../../Components/LandingPage/AboutSection";

export default function About() {
  const navigate = useNavigate();
  const menuItems = menuTutee(navigate);

  return (
    <div className="tutee-dashboard bright-theme">
      <Sidebar menuItems={menuItems} />
      <div className="tutee-content">
        <Header title="WILDTEACH" />
        <AboutSection />
      </div>
    </div>
  );
}
