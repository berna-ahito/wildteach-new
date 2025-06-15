import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import { useNavigate } from 'react-router-dom';
import getAdminMenu from './Routes/menuAdmin';
import { Button, ButtonGroup } from '@mui/material';

import UserTable from '../../Components/Table'; 
import students from '../../Data/Student';   

export default function ManageUsers() {
  const navigate = useNavigate();
  const menuItems = getAdminMenu(navigate);
  const [view, setView] = useState('students');

  return (
    <>
      <Header title="WildTeach" />
      <Sidebar menuItems={menuItems} />

      <div style={{ paddingRight: '620px', marginTop: '400px' , marginBottom: '40px' }}>
        <h1>User Management</h1>
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

        <div style ={{width: '180%'}}className="ManageUsers">
          {view === 'students' && (
            <div  className="ViewStudents">
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
    </>
  );
}
