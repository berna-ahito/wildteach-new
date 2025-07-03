import { useState, useEffect } from "react";

export default function useTuteeProfile(studentId) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!studentId) return;

    const fetchProfile = async () => {
      try {
        const res = await fetch(`http://localhost:8080/student/getById/${studentId}`);
        if (!res.ok) throw new Error("Failed to fetch tutee profile");

        const student = await res.json();

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
          profileImage: student.profileImage || "default.jpg",
        };

        setProfile(fullProfile);
      } catch (err) {
        console.error("[TuteeProfile] Error fetching profile:", err);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [studentId]);

  return { profile, loading };
}
