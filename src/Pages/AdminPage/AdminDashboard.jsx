import React from 'react';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import getAdminMenu from './Routes/menuAdmin';
import Card from '../../Components/Card'; 
import { useNavigate } from 'react-router-dom';  
import "../Styles/Admin.css"
import "../Styles/TutorPage.css"

export default function AdminDashboard() {
  const navigate = useNavigate();
  const menuItems = getAdminMenu(navigate);

  return (
    <>
      <Header title="WildTeach" />
      <Sidebar menuItems={menuItems} />
      <div style={{ marginTop: '10px', paddingRight: '800px' }}>
        <h1 style={{ marginBottom: '32px' }}>Welcome Admin</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <Card className= "stat-card orange" title="Active Tutors" content="9" />
          <Card className= "stat-card purple" title="Active Students" content="100" />
          <Card className= "stat-card yellow" title="Active Sessions" content="5" />
        </div>
      </div>
      <hr style={{ width: '100%', margin: '32px 0' }} />
      <Card 
        title="Announcements"
        content="This is where you can manage announcements."
        style={{ width:'50%', height: '250px', margin: '0 16px' }}>
        </Card>
    </>
  );
}