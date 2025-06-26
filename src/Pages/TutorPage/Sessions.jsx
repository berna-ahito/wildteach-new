import React from 'react';
import DashboardLayout from '../../Components/Layout/DashboardLayout';
import TutorSessionData from '../../Components/Tutor/Data/TutorSessionData';

export default function Sessions() {
  return (
    <DashboardLayout title="WILDTEACH">
      <TutorSessionData />
    </DashboardLayout>
  );
}
