import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./LoginHandler";
import LoadingScreen from "../Panels/LoadingScreen";

export default function LoginForm({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const role = await loginUser(email, password);
      console.log("[LoginForm] Final role after login:", role);

      setIsLoggedIn(true);
      setIsLoading(false);

      if (!role) {
        throw new Error("Login failed: no role returned.");
      }

      switch (role) {
        case "admin":
          console.log("[LoginForm] Navigating to /adminDashboard");
          navigate("/adminDashboard");
          break;
        case "tutor":
          console.log("[LoginForm] Navigating to /tutorDashboard");
          navigate("/tutorDashboard");
          break;
        default:
          console.log("[LoginForm] Navigating to /tuteeDashboard");
          navigate("/tuteeDashboard");
          break;
      }
    } catch (err) {
      console.error("[LoginForm] Login error:", err);
      setIsLoading(false);
      setError(err.message || "Login failed.");
    }
  };

  return (
    <>
      {isLoading && <LoadingScreen />}

      <main className="login-container">
        <h1>
          <span className="highlight-red">Welcome</span>{" "}
          <span className="highlight-gold">Back</span>
        </h1>

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
