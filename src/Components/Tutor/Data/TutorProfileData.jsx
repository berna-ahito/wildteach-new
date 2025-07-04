import { useState, useEffect } from "react";

export default function useTutorProfile(studentId) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!studentId) return;

    const fetchProfile = async () => {
      try {
        const studentRes = await fetch(
          `http://localhost:8080/student/getById/${studentId}`
        );
        if (!studentRes.ok) throw new Error("Failed to fetch student");

        const student = await studentRes.json();
        const tutorRes = await fetch(
          `http://localhost:8080/tutor/byStudentId/${studentId}`
        );
        const tutor = tutorRes.ok ? await tutorRes.json() : null;

        const fullProfile = {
          student_id: student.student_id,
          first_name: student.first_name,
          last_name: student.last_name,
          fullname: `${student.first_name} ${student.last_name}`,
          email: student.email,
          phone: student.contact_number,
          dob: student.birth_date,
          address: student.address,
          city: student.city,
          province: student.province,
          home_address: student.address,
          profileImage: student.profileImage
            ? `http://localhost:8080/uploads/profile/${student.profileImage}`
            : "http://localhost:8080/uploads/profile/default.jpg",

          // From tutor_entity
          tutor_id: tutor?.tutor_id || null,
          availability: tutor?.availability || "",
          rate_per_hour: tutor?.rate_per_hour || "",
          subjects_offered: tutor?.subjects_offered || "",
        };

        setProfile(fullProfile);
      } catch (err) {
        console.error("[Profile] Fetch error:", err);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [studentId]);

  return { profile, loading };
}
