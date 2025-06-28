import React from 'react';
import { Box } from '@mui/material';
import Header from '../../Components/Shared/Header';
import Sidebar from '../../Components/Shared/Sidebar';
import { useNavigate } from 'react-router-dom';
import menuTutee from '../../RoutesConfig/MenuTutee';
import MyBookingsPanel from '../../Components/Tutee/Panels/MyBookingsPanel';
import '../Styles/TuteePage.css';

export default function MyBookings() {
  const navigate = useNavigate();
  const menuItems = menuTutee(navigate);

  return (
    <Box className="tutee-dashboard bright-theme">
      <Sidebar menuItems={menuItems} />
      <Box className="tutee-content">
        <Header title="WILDTEACH" />
        <MyBookingsPanel />
      </Box>
    </Box>
  );
}
