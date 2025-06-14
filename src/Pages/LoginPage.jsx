import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Login.css";

function LoginPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Dummy accounts for all user roles
  const dummyAccounts = [
    { email: "admin@example.com", password: "admin123", role: "admin" },
    { email: "tutor@example.com", password: "tutor123", role: "tutor" },
    { email: "tutee@example.com", password: "tutee123", role: "tutee" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const foundUser = dummyAccounts.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      setError("Invalid email or password.");
      return;
    }

    const { role } = foundUser;
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("role", role);

    // Redirect based on role
    if (role === "admin") {
      navigate("/adminDashboard");
    } else if (role === "tutor") {
      navigate("/tutorDashboard");
    } else {
      navigate("/studentDashboard");
    }
  };

  return (
    <>
      <div className="bg-image"> </div>
      <div className="login-container">
        <h1>Login</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>Use these test accounts:</p>
        <ul>
          <li>Admin: admin@example.com / admin123</li>
          <li>Tutor: tutor@example.com / tutor123</li>
          <li>Student: tutee@example.com / tutee123</li>
        </ul>
      </div>
    </>
  );
}

export default LoginPage;