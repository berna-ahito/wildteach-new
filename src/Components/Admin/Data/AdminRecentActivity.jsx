import RecentActivity from '../../Panels/RecentActivity';
import { useState } from 'react';
export default function AdminRecentActivity() {
    const [recent] = useState([
        {avatar: 'JD', content: 'New tutor registered',name: 'Juan Dela Cruz', time: '2 hours ago', status: 'new'},
        {avatar: 'AR', content: 'Session Completed', name: 'Ana R.', time: '1 hour ago', status: 'Completed'},
    ]);
return <RecentActivity recent={recent} role='admin'/>;
}