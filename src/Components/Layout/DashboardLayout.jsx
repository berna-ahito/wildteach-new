import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import menuTutor from '../../RoutesConfig/MenuTutor';
import '../../Pages/Styles/TutorPage.css';

export default function DashboardLayout({ title, children }) {
  const navigate = useNavigate();
  return (
    <div className="tutor-dashboard bright-theme">
      <Sidebar menuItems={menuTutor(navigate)} />
      <div className="content">
        <Header title={title} />
        {children}
      </div>
    </div>
  );
}
