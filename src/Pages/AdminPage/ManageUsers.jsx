import React, { useState } from 'react';
import Sidebar from '../../Components/Shared/Sidebar';
import Header from '../../Components/Shared/Header';
import { useNavigate } from 'react-router-dom';
import getAdminMenu from "../../RoutesConfig/menuAdmin";
import { Button, ButtonGroup } from '@mui/material';

import UserTable from '../../Components/Shared/Table'; 
import students from '../../Data/Student';   

import '../Styles/TutorPage.css'; // ✅ Make sure it's imported

export default function ManageUsers() {
  const navigate = useNavigate();
  const menuItems = getAdminMenu(navigate);
  const [view, setView] = useState('students');

  return (
    <div className="tutor-dashboard bright-theme">
      <Sidebar menuItems={menuItems} />
      <div className="content">
        <Header title="WildTeach" />

        <h1 style={{ marginBottom: '24px' }}>User Management</h1>

        <ButtonGroup variant="contained" sx={{ mb: 3 }}>
          <Button
            color={view === 'students' ? 'primary' : 'inherit'}
            onClick={() => setView('students')}
          >
            View Students
          </Button>
          <Button
            color={view === 'tutors' ? 'primary' : 'inherit'}
            onClick={() => setView('tutors')}
          >
            View Tutors
          </Button>
        </ButtonGroup>

        <div className="ManageUsers" style={{ width: '100%' }}>
          {view === 'students' && (
            <div className="ViewStudents">
              <h2>Students</h2>
              <UserTable data={students} roleFilter="tutee" />
            </div>
          )}
          {view === 'tutors' && (
            <div className="ViewTutors">
              <h2>Tutors</h2>
              <UserTable data={students} roleFilter="tutor" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
