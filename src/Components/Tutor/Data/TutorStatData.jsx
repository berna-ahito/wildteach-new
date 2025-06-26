import React from 'react';
import StatCards from '../../Shared/StatCards';
import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function TutorStatData() {
  const stats = [
    { label: 'Students', value: 12, icon: GroupIcon, color: 'orange' },
    { label: 'Earnings', value: '₱1250', icon: MonetizationOnIcon, color: 'purple' },
    { label: 'Pending', value: 5, icon: HourglassBottomIcon, color: 'yellow' },
    { label: 'Sessions', value: 28, icon: CheckCircleIcon, color: 'green' },
  ];

  return <StatCards stats={stats} />;
}
