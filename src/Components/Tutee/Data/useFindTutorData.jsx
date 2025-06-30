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
