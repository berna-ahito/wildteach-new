import { useEffect, useState } from "react";

export default function useFindTutorData() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await fetch("http://localhost:8080/tutor/all");
        const data = await res.json();

        const mappedTutors = data
          .filter(
            (tutor) => tutor.student !== null && tutor.student.role === "Tutor"
          )
          .map((tutor) => ({
            id: tutor.student.student_id,
            tutor_id: tutor.tutor_id,
            name: `${tutor.student.first_name} ${tutor.student.last_name}`,
            status: tutor.approvalStatus || "Pending",
            subjects: tutor.subjects_offered || "N/A",
            rate:
              tutor.rate_per_hour != null ? `₱${tutor.rate_per_hour}` : "₱0",
            availability: tutor.availability || "Not Set",
          }));

        setTutors(mappedTutors);
      } catch (error) {
        console.error("Error loading tutors:", error);
      }
    };

    fetchTutors();
  }, []);

  const filteredTutors = tutors.filter(
    (tutor) =>
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.subjects.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    searchTerm,
    setSearchTerm,
    filteredTutors,
  };
}
