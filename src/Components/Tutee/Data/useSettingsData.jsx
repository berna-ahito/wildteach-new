// // src/Components/Tutee/Data/useTuteeSettingsData.js
// import { useEffect, useState } from 'react';

// export default function useSettingsData() {
//   const [emailNotif, setEmailNotif] = useState(false);
//   const [sessionAlert, setSessionAlert] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [tutorData, setTutorData] = useState({
//     tutor_id: '',
//     approvalStatus: '',
//     availability: [],
//     rate_per_hour: '',
//     subjects_offered: '',
//     student: { student_id: '' }
//   });

//   const tutorId = localStorage.getItem('tutor_id');

//   useEffect(() => {
//     if (!tutorId) return;

//     const fetchTutorData = async () => {
//       try {
//         const res = await fetch(`http://localhost:8080/tutor/getById/${tutorId}`);
//         const data = await res.json();

//         const availability = Array.isArray(data.availability)
//           ? data.availability.filter(day => ['M', 'T', 'W', 'TH', 'F'].includes(day))
//           : [data.availability];

//         setTutorData({
//           tutor_id: data.tutor_id || '',
//           approvalStatus: data.approvalStatus || '',
//           availability,
//           rate_per_hour: data.rate_per_hour || '',
//           subjects_offered: data.subjects_offered || '',
//           student: { student_id: data.student?.student_id || '' }
//         });
//       } catch (err) {
//         console.error("Fetch error:", err);
//       }
//     };

//     fetchTutorData();
//   }, [tutorId]);

//   const toggleDay = (day) => {
//     setTutorData((prev) => {
//       const availability = Array.isArray(prev.availability) ? prev.availability : [];
//       const updated = availability.includes(day)
//         ? availability.filter(d => d !== day)
//         : [...availability, day];
//       return { ...prev, availability: updated };
//     });
//   };

//   const savePreferences = async () => {
//     try {
//       const payload = {
//         tutor_id: parseInt(tutorData.tutor_id),
//         approvalStatus: tutorData.approvalStatus,
//         availability: tutorData.availability.join(','),
//         rate_per_hour: parseFloat(tutorData.rate_per_hour),
//         subjects_offered: tutorData.subjects_offered,
//         student: {
//           student_id: parseInt(tutorData.student.student_id)
//         }
//       };

//       const res = await fetch(`http://localhost:8080/tutor/update/${tutorId}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });

//       if (!res.ok) throw new Error('Failed to update preferences');
//       alert('Preferences updated successfully!');
//     } catch (err) {
//       alert(`Error updating preferences: ${err.message}`);
//     }
//   };

//   return {
//     emailNotif, setEmailNotif,
//     sessionAlert, setSessionAlert,
//     showModal, setShowModal,
//     tutorData, setTutorData,
//     toggleDay, savePreferences
//   };
// }


import { useState } from 'react';

export default function useSettingsData() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [sessionAlert, setSessionAlert] = useState(false);
  const [preferredSubjects, setPreferredSubjects] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning');

  const saveSettings = () => {
    const data = {
      emailNotif,
      sessionAlert,
      preferredSubjects,
      preferredTime,
    };
    console.log('Saved settings:', data);
    alert("Preferences saved successfully!");
  };

  return {
    emailNotif,
    setEmailNotif,
    sessionAlert,
    setSessionAlert,
    preferredSubjects,
    setPreferredSubjects,
    preferredTime,
    setPreferredTime,
    saveSettings,
  };
}

