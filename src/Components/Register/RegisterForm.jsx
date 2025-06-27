// ✅ File: src/Components/Register/RegisterForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./RegisterHandler";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    lastName: "", firstName: "", middleName: "",
    birthMonth: "", birthDay: "", birthYear: "",
    gender: "", town: "", barangay: "", houseNumber: "",
    email: "", course: "", role: "", yearLevel: "",
    password: "", confirmPassword: "", bio: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const result = await registerUser(formData);
      if (result.success) navigate("/login");
      else setError(result.error);
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="form-section">
          <label className="field-label">Full name</label>
          <div className="triple-input">
            <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <input name="middleName" placeholder="Middle Name (Optional)" value={formData.middleName} onChange={handleChange} />
          </div>
        </div>

        {/* Birthdate and Gender */}
        <div className="form-section">
          <div className="birth-gender-row">
            <div className="birth-section">
              <label className="field-label">Birth Date</label>
              <div className="birth-inputs">
                <input name="birthMonth" placeholder="Month" value={formData.birthMonth} onChange={handleChange} required />
                <input name="birthDay" placeholder="Day" value={formData.birthDay} onChange={handleChange} required />
                <input name="birthYear" placeholder="Year" value={formData.birthYear} onChange={handleChange} required />
              </div>
            </div>
            <div className="gender-section">
              <label className="field-label">Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="" disabled>Please select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>
        </div>

        {/* Email and Contact */}
        <div className="form-section">
          <div className="double-input">
            <div>
              <label className="field-label">Email</label>
              <input name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label className="field-label">Contact number</label>
              <input name="course" placeholder="63+ xxx xxx xxxx" value={formData.course} onChange={handleChange} required />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="form-section">
          <label className="field-label">Address</label>
          <div className="triple-input">
            <input name="town" placeholder="Town" value={formData.town} onChange={handleChange} required />
            <input name="barangay" placeholder="Barangay" value={formData.barangay} onChange={handleChange} required />
            <input name="houseNumber" placeholder="House number" value={formData.houseNumber} onChange={handleChange} required />
          </div>
        </div>

        {/* Role and Year Level */}
        <div className="form-section">
          <div className="role-year-row">
            <div className="role-section">
              <label className="field-label">Role</label>
              <select name="role" value={formData.role} onChange={handleChange} required>
                <option value="" disabled>Select Role</option>
                <option value="tutee">Tutee</option>
                <option value="tutor">Tutor</option>
              </select>
            </div>
            <div className="year-section">
              <label className="field-label">Year Level</label>
              <input name="yearLevel" placeholder="Year Level" value={formData.yearLevel} onChange={handleChange} required />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="form-section">
          <label className="field-label">Bio</label>
          <div className="single-input">
            <textarea name="bio" placeholder="Tell us about yourself" value={formData.bio} onChange={handleChange} rows={3} />
          </div>
        </div>

        {/* Password */}
        <div className="form-section">
          <label className="field-label">Password</label>
          <div className="single-input">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="form-section">
          <label className="field-label">Confirm Password</label>
          <div className="single-input">
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit">Register</button>
      </form>
      <a href="/login">Already have an account?</a>
    </div>
  );
}
