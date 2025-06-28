import React from 'react';
import { Container, Box } from '@mui/material';
import Header from "../../Components/Shared/Header";
import Sidebar from '../../Components/Shared/Sidebar';
import menuTutee from '../../RoutesConfig/MenuTutee';

import { useNavigate } from 'react-router-dom'; // ✅ ADD THIS

import useTuteeProfile from '../../Components/Tutee/Data/useTuteeProfile';
import TuteeProfileAvatar from '../../Components/Tutee/Panels/TuteeProfileAvatar';
import TuteeProfilePersonal from '../../Components/Tutee/Panels/TuteeProfilePersonal';
import TuteeProfileSecurity from '../../Components/Tutee/Panels/TuteeProfileSecurity';
import '../Styles/TuteePage.css';

export default function Profile() {
  const navigate = useNavigate();
  const menuItems = menuTutee(navigate); // ✅ Use the hook here

  const {
    profile,
    editPersonal,
    setEditPersonal,
    editSecurity,
    setEditSecurity,
    handleChange
  } = useTuteeProfile();

  return (
    <Box className="tutee-dashboard bright-theme">
      <Sidebar menuItems={menuItems} /> {/* ✅ FIXED */}
      <div className="tutee-content">
        <Header title="WILDTEACH" />
        <Container maxWidth="md">
          <TuteeProfileAvatar />
          <TuteeProfilePersonal
            profile={profile}
            editPersonal={editPersonal}
            setEditPersonal={setEditPersonal}
            handleChange={handleChange}
          />
          <TuteeProfileSecurity
            profile={profile}
            editSecurity={editSecurity}
            setEditSecurity={setEditSecurity}
            handleChange={handleChange}
          />
        </Container>
      </div>
    </Box>
  );
}
