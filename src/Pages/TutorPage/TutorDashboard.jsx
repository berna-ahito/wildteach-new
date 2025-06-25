import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar';
import menuTutor from './Routes/MenuTutor';
import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WavingHandIcon from '@mui/icons-material/WavingHand';

import Header from '../../Components/Header'; 
import '../Styles/TutorPage.css';

const TutorDashboard = () => {
  const navigate = useNavigate();
  const tutorName = 'Maria';

  const [stats] = useState({ students: 12, earnings: 1250, bookings: 5, sessions: 28 });
  const [schedule] = useState([
    { time: '10:00 AM', student: 'Sarah K.', subject: 'Calculus', status: 'confirmed' },
    { time: '2:00 PM', student: 'Mike J.', subject: 'Statistics', status: 'pending' },
    { time: '4:30 PM', student: 'Emma W.', subject: 'Algebra', status: 'confirmed' },
  ]);
  const [recent] = useState([
    { name: 'Juan Dela Cruz', subject: 'Physics', time: '3:30 PM', status: 'completed', avatar: 'JD' },
    { name: 'Ana R.', subject: 'Chemistry', time: '4:00 PM', status: 'upcoming', avatar: 'AR' },
  ]);

  return (
    <div className="tutor-dashboard bright-theme">
      <Sidebar menuItems={menuTutor(navigate)} />

      <div className="content">
        <Header tutorName={tutorName} /> {/* ✅ Merged Header */}

        <header className="greeting-section">
          <div className="greeting-avatar">
            <WavingHandIcon fontSize="large" />
          </div>
          <div>
            <h1>Hello, {tutorName}!</h1>
            <p>Welcome back to your learning hub! 🌟</p>
          </div>
        </header>

        <div className="stat-grid">
          <div className="stat-block orange">
            <GroupIcon className="stat-icon" />
            <h2>{stats.students}</h2>
            <p>Students</p>
          </div>
          <div className="stat-block purple">
            <MonetizationOnIcon className="stat-icon" />
            <h2>₱{stats.earnings}</h2>
            <p>Earnings</p>
          </div>
          <div className="stat-block yellow">
            <HourglassBottomIcon className="stat-icon" />
            <h2>{stats.bookings}</h2>
            <p>Pending</p>
          </div>
          <div className="stat-block green">
            <CheckCircleIcon className="stat-icon" />
            <h2>{stats.sessions}</h2>
            <p>Sessions</p>
          </div>
        </div>

        <div className="dashboard-panels">
          <div className="panel-card">
            <div className="panel-header">
              <h3>Today's Schedule</h3>
              <button onClick={() => navigate('/tutor/manageSessions')} className="add-btn">+ Add</button>
            </div>
            <ul>
              {schedule.map((s, i) => (
                <li key={i} className="panel-item">
                  <span className="time">{s.time}</span>
                  <div className="info">{s.student} • {s.subject}</div>
                  <span className={`status ${s.status}`}>{s.status}</span>
                  <button className="join-btn">Join</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel-card">
            <div className="panel-header">
              <h3>Recent Activity</h3>
              <button className="seeall-btn" onClick={() => navigate('/tutor/recent')}>See All</button>
            </div>
            <ul>
              {recent.map((r, i) => (
                <li key={i} className="panel-item">
                  <div className="avatar-circle">{r.avatar}</div>
                  <div className="info">
                    <strong>{r.name}</strong> • {r.subject} • {r.time}
                  </div>
                  <span className={`status ${r.status}`}>{r.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;
