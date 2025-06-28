import React from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../../Components/Shared/Header";
import Sidebar from "../../Components/Shared/Sidebar";
import menuTutee from "../../RoutesConfig/MenuTutee";
import bgImage from '../../assets/images/bgLanding.jpg'; // ✅ Ensure this path is correct
import '../../Pages/Styles/TuteePage.css';

export default function ContactSection() {
  const navigate = useNavigate();
  const menuItems = menuTutee(navigate);

  return (
    <div
      className="contact-background"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="tutee-dashboard bright-theme contact-overlay">
        <Sidebar menuItems={menuItems} />
        <div className="tutee-content">
          <Header title="WILDTEACH" />
          <div className="contact-card">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
              Reach out to us at <strong>support@wildteach.com</strong>
            </p>
            <button className="contact-button">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
