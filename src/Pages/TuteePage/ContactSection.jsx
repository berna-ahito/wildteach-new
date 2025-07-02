import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Shared/Header";
import Sidebar from "../../Components/Shared/Sidebar";
import menuTutee from "../../RoutesConfig/MenuTutee";
import ContactSection from "../../Components/LandingPage/ContactSection"; // <-- reuse this

export default function Contact() {
  const navigate = useNavigate();
  const menuItems = menuTutee(navigate);

  return (
    <div
      className="tutee-dashboard bright-theme"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <Sidebar menuItems={menuItems} />
      <div className="tutee-content no-padding">
        <Header title="WILDTEACH" />
        <div className="tutee-contact-wrapper">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
