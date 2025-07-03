import React, { useEffect, useState } from 'react';
import UserTable from '../../Shared/UserTable';
import axios from 'axios';
import '../../../Pages/Styles/Admin.css';

export default function AdminStudent() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/student/all')
      .then((res) => {
        const formatted = res.data.map((s) => {
          const role = (s.role || "Unknown").trim();
          return {
            student_id: s.student_id,
            studentName: `${s.first_name || ""} ${s.last_name || ""}`.trim(),
            course: s.course || "N/A",
            phoneNumber: s.contact_number || "N/A",
            email: s.email || "N/A",
            status: s.is_active ? "Active" : "Inactive",
            role: role.charAt(0).toUpperCase() + role.slice(1).toLowerCase()
          };
        });
        setStudents(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error('❌ Error fetching students:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-6">Loading students...</div>;
  if (students.length === 0) return <div className="p-6 text-red-500">No students found.</div>;

  return (
    <div className="p-6">
      <UserTable data={students} />
    </div>
  );
}
