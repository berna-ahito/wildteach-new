import React from 'react';
import SchedulePanel from '../Panels/SchedulePanel';

export default function TutorScheduleData() {
  const schedule = [
    { time: '10:00 AM', student: 'Sarah K.', subject: 'Calculus', status: 'confirmed' },
    { time: '2:00 PM', student: 'Mike J.', subject: 'Statistics', status: 'pending' },
  ];

  return <SchedulePanel schedule={schedule} />;
}
