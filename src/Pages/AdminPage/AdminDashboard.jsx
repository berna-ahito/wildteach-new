import React from 'react';
import Sidebar from '../../Components/Shared/Sidebar';
import Header from '../../Components/Shared/Header';
import getAdminMenu from "../../RoutesConfig/menuAdmin";
import Card from "../../Components/Shared/Card"; 
import { useNavigate } from 'react-router-dom';  
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import "../Styles/TutorPage.css"; 

export default function AdminDashboard() {
  const navigate = useNavigate();
  const menuItems = getAdminMenu(navigate);

  return (
    <div className="tutor-dashboard bright-theme"> 
      <Sidebar menuItems={menuItems} />
      <div className="content"> 
        <Header title="WILDTEACH" />

        <div className="greeting-section">
          <div className="greeting-avatar">
            <GroupIcon fontSize="large" />
          </div>
          <div>
            <h1>Welcome Admin</h1>
            <p>Manage your platform from here!</p>
          </div>
        </div>

        <div className="stat-grid">
          <Card className="stat-card orange" icon = {<GroupIcon className="stat-icon"/>} title="Active Tutors" content="9"></Card>
          <Card className="stat-card purple" icon = {<SchoolIcon className="stat-icon" />} title="Active Students" content="100"></Card>
          <Card className="stat-card yellow" icon ={<PlayCircleOutlineIcon className="stat-icon" />}title="Active Sessions" content="5"></Card>
          <Card className="stat-card green" icon ={<AnnouncementIcon className="stat-icon" />}title="Total Revenue" content="₱25,000"></Card>
        </div>

        <div className="dashboard-panels">
          <div className="panel-card">
            <div className="panel-header">
              <h3>Recent Activities</h3>
              <button className="seeall-btn">View All</button>
            </div>
            <ul>
              <li className="panel-item">
                <div className="avatar-circle">JD</div>
                <div className="info">
                  <strong>New tutor registered</strong> • Juan Dela Cruz • 2 hours ago
                </div>
                <span className="status completed">new</span>
              </li>
              <li className="panel-item">
                <div className="avatar-circle">AR</div>
                <div className="info">
                  <strong>Session completed</strong> • Ana Rodriguez • 3 hours ago
                </div>
                <span className="status completed">completed</span>
              </li>
              <li className="panel-item">
                <div className="avatar-circle">MK</div>
                <div className="info">
                  <strong>Payment processed</strong> • Mike Kim • 5 hours ago
                </div>
                <span className="status confirmed">paid</span>
              </li>
            </ul>
          </div>

          <div className="panel-card">
            <div className="panel-header">
              <h3>System Announcements</h3>
              <button className="add-btn">+ Add</button>
            </div>
            <div style={{ padding: '10px 0' }}>
              <p style={{ fontSize: '14px', color: '#5c393b', lineHeight: '1.5' }}>
                This is where you can manage platform announcements. Create new announcements to notify tutors and students about important updates, maintenance schedules, or new features.
              </p>
              <br />
              <button 
                className="add-btn" 
                style={{ marginTop: '10px' }}
                onClick={() => navigate('/admin/announcements')}
              >
                Manage Announcements
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}