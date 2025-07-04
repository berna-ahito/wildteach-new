import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../Panels/LoadingScreen";

export default function LoginForm({ setIsLoggedIn, setUserRole }) {
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

      if (!role) {
        throw new Error("Login failed: no role returned.");
      }

      const user = JSON.parse(localStorage.getItem("user"));
      setIsLoggedIn(true);
      setUserRole(user.role);
      setIsLoading(false);

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

  async function loginUser(email, password) {
    console.log("[Login] Starting login process for:", email);
    const validRoles = ["admin", "tutor", "tutee"];
    let userData = null;

    try {
      const adminRes = await fetch("http://localhost:8080/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const adminData = await adminRes.json();
      console.log("[Login] Admin login response:", adminData);

      if (!adminRes.ok) {
        throw new Error(adminData.message || "Admin login failed.");
      }

      if (adminData.is_active === false) {
        throw new Error("Admin account is deactivated.");
      }

      const role = adminData.role?.toLowerCase() || "admin";
      if (!validRoles.includes(role)) {
        throw new Error("Invalid admin role.");
      }

      userData = {
        isLoggedIn: true,
        role,
        admin_id: adminData.admin_id,
        name: adminData.name,
        email: adminData.email,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      return role;
    } catch (err) {
      console.warn("[Login] Admin login failed, trying student...");
    }

    try {
      const res = await fetch("http://localhost:8080/student/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("[Login] Student login response:", data);

      if (!res.ok) {
        throw new Error(data.message || "Student login failed.");
      }

      if (data.is_active === false) {
        throw new Error("Student account is deactivated.");
      }

      const role = data.role?.toLowerCase();
      const studentId = data.student_id;

      if (!validRoles.includes(role)) {
        throw new Error("Invalid student role.");
      }

      userData = {
        isLoggedIn: true,
        role,
        student_id: studentId,
        name: data.name ?? "",
        email: data.email || email,
      };

      localStorage.setItem("student_id", studentId.toString());

      if (role === "tutor") {
        try {
          const checkTutor = await fetch(`http://localhost:8080/student/hasTutorProfile/${studentId}`);
          const tutorCheck = await checkTutor.json();
          if (tutorCheck.tutor_id) {
            userData.tutor_id = tutorCheck.tutor_id;
            localStorage.setItem("tutor_id", tutorCheck.tutor_id.toString());
          }
        } catch (err) {
          console.warn("[Login] Tutor profile check failed.");
        }
      }

      localStorage.setItem("user", JSON.stringify(userData));
      return role;
    } catch (err) {
      console.error("[Login] Student login error:", err);
      throw new Error(err.message || "Login failed.");
    }
  }

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
