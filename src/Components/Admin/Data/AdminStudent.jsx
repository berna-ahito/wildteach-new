import React, { useEffect, useState } from 'react';
import UserTable from '../../Shared/UserTable';
import axios from 'axios';
import "../../../Pages/Styles/Admin/Admin.css"; 

export default function AdminStudent({ onRefresh }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
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
            is_active: s.is_active,
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
  };

  const handleToggleStatus = async (studentId, newIsActive) => {
    try {
      await axios.put(`http://localhost:8080/student/updateStatus/${studentId}?is_active=${newIsActive}`);
      
      if (onRefresh) onRefresh(); // ✅ Trigger refresh of stat cards
      fetchStudents();            // ✅ Refresh table too
      return true;
    } catch (err) {
      console.error('Failed to update student status:', err);
      return false;
    }
  };

  if (loading) return <div className="p-6">Loading students...</div>;
  if (students.length === 0) return <div className="p-6 text-red-500">No students found.</div>;

  return (
    <div className="p-6">
      <UserTable
        data={students}
        onToggleStatus={handleToggleStatus}
        onRefresh={onRefresh} // ✅ Pass it down
      />
    </div>
  );
}
