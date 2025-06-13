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
     
      const roleRaw = await roleRes.text();
      const role = roleRaw.trim().toLowerCase();

      let endpoint = "";
      let requestBody = { email, password };

      switch (role) {
        case "admin":
          endpoint = "admin/login";
          break;
        case "tutee":
          endpoint = "student/login";
          break;
        case "tutor":
          endpoint = "tutor/login";
          break;
        default:
          setError("Unknown role or role not assigned.");
          return;
      }

      if (!loginRes.ok) {
        const errorText = await loginRes.text();
        setError(`Login failed: ${errorText}`);
        return;
      }

      const responseData = await loginRes.json()
    
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("role", role);
      navigate(`/${role}/home`);
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <>
      <div className="bg-image"></div>
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
        <p><a href="/register">New user? Register here</a></p>
      </div>
    </>
  );
}

export default LoginPage;
