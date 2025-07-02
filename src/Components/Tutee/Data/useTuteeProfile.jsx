import { useState, useEffect } from "react";

export default function useTuteeProfile(studentId) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!studentId) return;

    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/student/getById/${studentId}`
        );
        if (!res.ok) throw new Error("Failed to fetch student");

        const data = await res.json();

        const profile = {
          student_id: data.student_id,
          first_name: data.first_name,
          last_name: data.last_name,
          fullname: `${data.first_name} ${data.last_name}`,
          email: data.email,
          phone: data.contact_number,
          dob: data.birth_date,
          address: data.address,
          city: data.city,
          province: data.province,
          home_address: data.address,
          profileImage: data.profileImage || "default.jpg",
        };

        setProfile(profile);
      } catch (err) {
        console.error("[Tutee Profile] Fetch error:", err);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [studentId]);

  return { profile, loading };
}
