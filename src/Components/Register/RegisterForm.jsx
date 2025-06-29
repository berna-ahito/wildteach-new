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
    email: "", contactNumber: "", yearLevel: "",
    password: "", confirmPassword: "", role: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const birth_date = `${formData.birthYear}-${formData.birthMonth.padStart(2, '0')}-${formData.birthDay.padStart(2, '0')}`;

    const payload = {
      last_name: formData.lastName,
      first_name: formData.firstName,
      middle_name: formData.middleName || null,
      birth_date,
      gender: formData.gender,
      email: formData.email,
      contact_number: formData.contactNumber,
      address: `${formData.houseNumber}, ${formData.barangay}, ${formData.town}`,
      username: formData.email.split("@")[0],
      course: "BSCS",
      year_level: parseInt(formData.yearLevel),
      profileImage: "default.jpg",
      role: formData.role,
      password: formData.password,
      is_active: true
    };

    console.log("Submitting payload:", payload);

    try {
      const result = await registerUser(payload);
      if (result.success) {
        navigate("/login");
      } else {
        setError(result.error);
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-section">
          <label className="field-label">Full Name</label>
          <div className="triple-input">
            <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <input name="middleName" placeholder="Middle Name (Optional)" value={formData.middleName} onChange={handleChange} />
          </div>
        </div>

        {/* Birthdate + Gender */}
        <div className="form-section">
          <div className="birth-gender-row">
            <div className="birth-section">
              <label className="field-label">Birth Date</label>
              <div className="birth-inputs">
                <select name="birthMonth" value={formData.birthMonth} onChange={handleChange} required>
                  <option value="">Month</option>
                  {[...Array(12)].map((_, i) => {
                    const month = (i + 1).toString().padStart(2, "0");
                    return <option key={month} value={month}>{month}</option>;
                  })}
                </select>
                <select name="birthDay" value={formData.birthDay} onChange={handleChange} required>
                  <option value="">Day</option>
                  {[...Array(31)].map((_, i) => {
                    const day = (i + 1).toString().padStart(2, "0");
                    return <option key={day} value={day}>{day}</option>;
                  })}
                </select>
                <select name="birthYear" value={formData.birthYear} onChange={handleChange} required>
                  <option value="">Year</option>
                  {Array.from({ length: 30 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return <option key={year} value={year}>{year}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="gender-section">
              <label className="field-label">Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Email + Contact */}
        <div className="form-section">
          <div className="double-input">
            <div>
              <label className="field-label">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
            </div>
            <div>
              <label className="field-label">Contact Number</label>
              <input name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="63+ xxx xxx xxxx" required />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="form-section">
          <label className="field-label">Address</label>
          <div className="triple-input">
            <input name="town" placeholder="Town" value={formData.town} onChange={handleChange} required />
            <input name="barangay" placeholder="Barangay" value={formData.barangay} onChange={handleChange} required />
            <input name="houseNumber" placeholder="House Number" value={formData.houseNumber} onChange={handleChange} required />
          </div>
        </div>

        {/* Role + Year */}
        <div className="form-section">
          <div className="role-year-row">
            <div className="role-section">
              <label className="field-label">Role</label>
              <select name="role" value={formData.role} onChange={handleChange} required>
                <option value="">Select Role</option>
                <option value="Tutee">Tutee</option>
                <option value="Tutor">Tutor</option>
              </select>
            </div>
            <div className="year-section">
              <label className="field-label">Year Level</label>
              <input name="yearLevel" placeholder="e.g. 1" value={formData.yearLevel} onChange={handleChange} required />
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="form-section">
          <label className="field-label">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        </div>

        {/* Confirm Password */}
        <div className="form-section">
          <label className="field-label">Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
        </div>

        {/* Error message */}
        {error && <div className="error-message">{error}</div>}

        <button type="submit">Register</button>
      </form>

      <a href="/login">Already have an account?</a>
    </div>
  );
}
