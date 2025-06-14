import React from 'react';
import Sidebar from '../../Components/Sidebar';
import { useNavigate } from 'react-router-dom';

export default function StudentDashboard() {
  const navigate = useNavigate();

  const menuItems = [
    { text: "Dashboard", onClick: () => navigate('/studentDashboard') },
    { text: "Assignments", onClick: () => navigate('/assignments') },
    { text: "Profile", onClick: () => navigate('/profile') },
    { text: "Logout", onClick: () => {
        localStorage.clear();
        navigate('/login');
      }
    },
  ];

  return (
    <div>
      <Sidebar menuItems={menuItems} buttonLabel="Menu" />
    </div>
  );
}