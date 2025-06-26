import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Login.css";

function LoginPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed. Please check your credentials.");
        return;
      }

      // Save token and extract role
      const { token } = data;
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const role = decodedToken.role;

      localStorage.setItem("token", token);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", role);
      setIsLoggedIn(true);

      // Redirect based on role
      switch (role) {
        case "admin":
          navigate("/adminDashboard");
          break;
        case "tutor":
          navigate("/tutorDashboard");
          break;
        default:
          navigate("/tuteeDashboard");
          break;
      }

    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="bg-image"></div>
      <main className="login-container" role="main" aria-label="Login Form">
        <h1>Welcome Back</h1>

        {error && <p className="error-message" role="alert">{error}</p>}

        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="email" className="field-label">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="login-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="field-label">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="login-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="register-link">
          Don’t have an account?{" "}
          <span
            className="clickable"
            onClick={() => navigate("/register")}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate("/register")}
          >
            Register here
          </span>
        </p>
      </main>
    </>
  );
}

export default LoginPage;
