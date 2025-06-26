import React, { useState } from 'react';
import SessionList from '../Panels/SessionList';

export default function TutorSessionData() {
  const [sessions] = useState([
    {
      name: 'Juan Dela Cruz',
      subject: 'Math',
      date: 'July 1, 2025',
      duration: '1 hr',
      month: 'July',
      year: '2025',
    },
    {
      name: 'Maria Clara',
      subject: 'English',
      date: 'July 2, 2025',
      duration: '2 hrs',
      month: 'July',
      year: '2025',
    },
  ]);

  return <SessionList sessions={sessions} />;
}
