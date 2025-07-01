// src/Components/Tutee/Data/useFindTutorData.js
import { useState } from 'react';

export default function useFindTutorData() {
  const [searchTerm, setSearchTerm] = useState('');

  // Static sample tutors (can be replaced with dynamic data later)
  const tutors = [
    { id: 1, name: 'Juan Dela Cruz', status: 'Active', subjects: 'IM2, Calculus', rate: '₱200', availability: 'MWF 9AM - 11AM' },
    { id: 2, name: 'Maria Clara', status: 'Active', subjects: 'Science, English', rate: '₱250', availability: 'TTh 2PM - 4PM' },
    { id: 3, name: 'Jose Rizal', status: 'Active', subjects: 'Science', rate: '₱300', availability: 'TTh 2PM - 4PM' },
  ];

  const filteredTutors = tutors.filter((tutor) =>
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.subjects.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    searchTerm,
    setSearchTerm,
    filteredTutors
  };
}


//MODIFIED CODE | 06-30-25
//Modified version of useFindTutorData.js to fetch data from the tutor
// import { useState, useEffect } from 'react';

// export default function useFindTutorData() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [tutors, setTutors] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8080/tutor/all')
//       .then((res) => res.json())
//       .then((data) => {
//         const formattedTutors = data.map((tutor) => ({
//           id: tutor.tutor_id,
//           name: `${tutor.student?.first_name} ${tutor.student?.last_name}`,
//           status: tutor.status || 'Active',
//           subjects: tutor.subjects || 'N/A',
//           rate: `₱${tutor.hourly_rate || '0'}`,
//           availability: tutor.availability || 'Not set',
//         }));
//         setTutors(formattedTutors);
//       })
//       .catch((err) => {
//         console.error('Error fetching tutors:', err);
//         setTutors([]);
//       });
//   }, []);

//   const filteredTutors = tutors.filter((tutor) =>
//     tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     tutor.subjects.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return {
//     searchTerm,
//     setSearchTerm,
//     filteredTutors
//   };
// }

