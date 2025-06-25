import React from 'react';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import getAdminMenu from './Routes/menuAdmin';
import Card from '../../Components/Card'; 
import { useNavigate } from 'react-router-dom';  
import "../Styles/TutorPage.css"; 

export default function AdminDashboard() {
  const navigate = useNavigate();
  const menuItems = getAdminMenu(navigate);

  return (
    <div className="tutor-dashboard bright-theme"> 
      <Sidebar menuItems={menuItems} />
      <div className="content"> 
        <Header title="WILDTEACH" />

        <h1 style={{ marginBottom: '32px' }}>Welcome Admin</h1>

        <div className="stat-grid">
          <Card className="stat-card orange" title="Active Tutors" content="9" />
          <Card className="stat-card purple" title="Active Students" content="100" />
          <Card className="stat-card yellow" title="Active Sessions" content="5" />
        </div>

        <hr style={{ width: '100%', margin: '32px 0' }} />

        <Card 
          className="stat-card green"
          title="Announcements"
          content="This is where you can manage announcements."
          style={{ width: '100%', height: '250px' }}
        />
      </div>
    </div>
  );
}
