import { useState } from 'react';

export default function useTuteeProfile() {
  const [editPersonal, setEditPersonal] = useState(false);
  const [editSecurity, setEditSecurity] = useState(false);

  const [profile, setProfile] = useState({
    dob: '2001-05-20',
    phone: '09123456789',
    address: '123 Main St, Metro Manila',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (field) => (e) => {
    setProfile({ ...profile, [field]: e.target.value });
  };

  return {
    profile,
    editPersonal,
    setEditPersonal,
    editSecurity,
    setEditSecurity,
    handleChange
  };
}
