import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Header from "../../Components/Shared/Header";
import Sidebar from "../../Components/Shared/Sidebar";
import { useNavigate } from "react-router-dom";
import menuTutee from "../../RoutesConfig/MenuTutee";
import MyBookingsPanel from "../../Components/Tutee/Panels/MyBookingsPanel";

import "../../Pages/Styles/Shared/CommonComponents.css";
import "../../Pages/Styles/TuteePage/TuteeMyBookings.css";

export default function MyBookings() {
  const navigate = useNavigate();
  const menuItems = menuTutee(navigate);

  useEffect(() => {
    document.body.classList.add("red-theme");
    return () => document.body.classList.remove("red-theme");
  }, []);

  return (
    <Box className="tutee-dashboard">
      <Sidebar menuItems={menuItems} />
      <Box className="tutee-content">
        <Header title="WILDTEACH" />
        <MyBookingsPanel />
      </Box>
    </Box>
  );
}
