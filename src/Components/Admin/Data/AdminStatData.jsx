import React from 'react';
import StatCards from '../../Shared/StatCards';
import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';    
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SchoolIcon from '@mui/icons-material/School';
import AnnouncementIcon from '@mui/icons-material/Announcement';

export default function AdminStatData() {
    const stats = [
        {label : 'Active Tutors', value: 9, icon: GroupIcon, color: 'orange'},
        {label : 'Active Students', value: 100, icon: SchoolIcon, color: 'purple'},
        {label : 'Active Sessions', value: 5, icon: PlayCircleOutlineIcon, color: 'yellow'},
        {label : 'Total Revenue', value: '₱25,000', icon: MonetizationOnIcon, color: 'green'}
    ];
    return <StatCards stats={stats} />;
}