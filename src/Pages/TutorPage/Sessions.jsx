import React from 'react';
import menuTutor from "../../RoutesConfig/MenuTutor";
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../Components/Layout/DashboardLayout';
import TutorSessionData from '../../Components/Tutor/Data/TutorSessionData';
import Sidebar from '../../Components/Shared/Sidebar';

export default function Sessions() {
  const navigate = useNavigate();
  return (
    <DashboardLayout title="WILDTEACH" role="tutor">
      <TutorSessionData />
    </DashboardLayout>
  );
}
