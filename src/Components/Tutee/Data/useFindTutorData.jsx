import { useEffect, useState } from "react";

export default function useFindTutorData() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const [studentsRes, tutorRes] = await Promise.all([
          fetch("http://localhost:8080/student/tutorAccounts"), // All students with role=Tutor
          fetch("http://localhost:8080/tutor/all") // All tutorEntity profiles
        ]);

        const students = await studentsRes.json();
        const tutorsWithProfiles = await tutorRes.json();

        const merged = students.map((student) => {
          const tutorProfile = tutorsWithProfiles.find(
            (t) => t.student.student_id === student.student_id
          );

          return {
            id: student.student_id,
            name: `${student.first_name} ${student.last_name}`,
            status: tutorProfile?.approvalStatus || "Pending",
            subjects: tutorProfile?.subjects_offered || "N/A",
            rate: tutorProfile ? `₱${tutorProfile.rate_per_hour}` : "₱0",
            availability: tutorProfile?.availability || "[]"
          };
        });

        setTutors(merged);
      } catch (error) {
        console.error("Error loading tutors:", error);
      }
    };

    fetchTutors();
  }, []);

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
