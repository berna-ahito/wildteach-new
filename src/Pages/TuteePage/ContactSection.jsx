// import React from "react";
// import { useNavigate } from 'react-router-dom';
// import Header from "../../Components/Shared/Header";
// import Sidebar from "../../Components/Shared/Sidebar";
// import menuTutee from "../../RoutesConfig/MenuTutee";
// import bgImage from '../../assets/images/bgLanding.jpg'; 
// import '../../Pages/Styles/TuteePage.css';

// export default function ContactSection() {
//   const navigate = useNavigate();
//   const menuItems = menuTutee(navigate);

//   return (
//     <div
//       className="contact-background"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className="tutee-dashboard bright-theme contact-overlay">
//         <Sidebar menuItems={menuItems} />
//         <div className="tutee-content">
//           <Header title="WILDTEACH" />
//           <div className="contact-card">
//             <h1 className="contact-title">Contact Us</h1>
//             <p className="contact-description">
//               Reach out to us at <strong>support@wildteach.com</strong>
//             </p>
//             <button className="contact-button">Send Message</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../../Components/Shared/Header";
// import Sidebar from "../../Components/Shared/Sidebar";
// import menuTutee from "../../RoutesConfig/MenuTutee";
// import SectionHeader from "../../Components/Shared/LandingPage/SectionHeader";
// import "../../Pages/Styles/TuteePage.css";

// export default function ContactSection() {
//   const navigate = useNavigate();
//   const menuItems = menuTutee(navigate);

//   return (
//     <div className="tutee-dashboard bright-theme contact-overlay">
//       <Sidebar menuItems={menuItems} />
//       <div className="tutee-content">
//         <Header title="WILDTEACH" />
//         <div className="contact-fullscreen">
//           <div className="contact-content">
//             <div className="contact-inner">
//               <SectionHeader
//                 badge="Contact Us"
//                 title="Contact"
//                 highlight="WildTeach"
//                 subtitle="Ready to transform your learning experience? We'd love to hear from you."
//                 layout="vertical"
//               />

//               <div className="contact-card">
//                 {/* <h1 className="contact-title">Contact Us</h1> */}
//                 <p className="contact-description">
//                   Reach out to us at{" "}
//                   <strong>support@wildteach.com</strong>
//                 </p>
//                 <button className="contact-button">Send Message</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../../Components/Shared/Header";
// import Sidebar from "../../Components/Shared/Sidebar";
// import menuTutee from "../../RoutesConfig/MenuTutee";
// import ContactSection from "../../Components/LandingPage/ContactSection";


// export default function Contact() {
//   const navigate = useNavigate();
//   const menuItems = menuTutee(navigate);

//   return (
//     <div className="tutee-dashboard bright-theme">
//       <Sidebar menuItems={menuItems} />
//       <div className="tutee-content">
//         <Header title="WILDTEACH" />
//         <ContactSection />
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../../Components/Shared/Header";
// import Sidebar from "../../Components/Shared/Sidebar";
// import menuTutee from "../../RoutesConfig/MenuTutee";
// import ContactSection from "../../Components/LandingPage/ContactSection";

// export default function Contact() {
//   const navigate = useNavigate();
//   const menuItems = menuTutee(navigate);

//   return (
//     <div className="dashboard bright-theme">
//       <Sidebar menuItems={menuItems} />
//       <div className="content">
//         <Header title="WILDTEACH" />

//         {/* 🔽 Directly render ContactSection with landing style */}
//         <ContactSection />
//       </div>
//     </div>
//   );
// }


// src/Pages/Tutee/Contact.jsx
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
    <div className="tutee-dashboard bright-theme" style={{ height: '100vh', overflow: 'hidden' }}>
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

