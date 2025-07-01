// ORIGINAL CODE | 07-01-25
// import { useEffect, useState } from "react";

// export default function useFindTutorData() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [tutors, setTutors] = useState([]);

//   useEffect(() => {
//     const fetchTutors = async () => {
//       try {
//         const [studentsRes, tutorRes] = await Promise.all([
//           fetch("http://localhost:8080/student/tutorAccounts"), 
//           fetch("http://localhost:8080/tutor/all")
//         ]);

//         const students = await studentsRes.json();
//         const tutorsWithProfiles = await tutorRes.json();

//         const merged = students.map((student) => {
//           const tutorProfile = tutorsWithProfiles.find(
//             (t) => t.student.student_id === student.student_id
//           );

//           return {
//             id: student.student_id,
//             tutor_id: tutorProfile?.tutor_id || null,
//             name: `${student.first_name} ${student.last_name}`,
//             status: tutorProfile?.approvalStatus || "Pending",
//             subjects: tutorProfile?.subjects_offered || "N/A",
//             rate: tutorProfile ? `₱${tutorProfile.rate_per_hour}` : "₱0",
//             availability: tutorProfile?.availability || "[]"
//           };
//         });

//         setTutors(merged);
//       } catch (error) {
//         // console.error("Error loading tutors:", error);
//       }
//     };

//     fetchTutors();
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

//WORKING CODE | 07-01-25
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
          .filter(tutor => tutor.student !== null && tutor.student.role === "Tutor") // ✅ Only include actual tutors
          .map(tutor => ({
            id: tutor.student.student_id,
            tutor_id: tutor.tutor_id,
            name: `${tutor.student.first_name} ${tutor.student.last_name}`,
            status: tutor.approvalStatus || "Pending",
            subjects: tutor.subjects_offered || "N/A",
            rate: tutor.rate_per_hour != null ? `₱${tutor.rate_per_hour}` : "₱0",
            availability: tutor.availability || "Not Set",
          }));


        setTutors(mappedTutors);
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
    filteredTutors,
  };
}
