export async function loginUser(email, password) {
  console.log("[Login] Starting login process for:", email);

  // ADMIN login attempt
  try {
    const adminRes = await fetch("http://localhost:8080/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    console.log("[Login] Admin login response status:", adminRes.status);

    if (adminRes.ok) {
      const data = await adminRes.json();
      console.log("[Login] Admin login successful:", data);

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "admin");
      localStorage.setItem("admin_id", data.admin_id);
      localStorage.setItem("name", data.name);
      localStorage.setItem("email", data.email);
      return "admin";
    }
  } catch (e) {
    console.error("[Login] Admin login error:", e);
  }

  // STUDENT login attempt
  try {
    const res = await fetch("http://localhost:8080/student/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    console.log("[Login] Student login response status:", res.status);

    if (!res.ok) throw new Error("Unauthorized");

    const data = await res.json();
    const studentId = data.student_id;
    const role = data.role?.toLowerCase(); // "tutee" or "tutor"

    console.log("[Login] Student login successful:", data);
    console.log("[Login] Role from response:", role);

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("student_id", studentId);
    localStorage.setItem("name", data.name ?? "");
    localStorage.setItem("email", email);
    localStorage.setItem("role", role);

    if (role === "tutor") {
      // Optionally get tutor_id if needed
      const checkTutor = await fetch(`http://localhost:8080/student/hasTutorProfile/${studentId}`);
      console.log("[Login] Tutor profile check status:", checkTutor.status);
      if (checkTutor.ok) {
        const tutorCheck = await checkTutor.json();
        console.log("[Login] Tutor profile check result:", tutorCheck);
        if (tutorCheck.tutor_id) {
          localStorage.setItem("tutor_id", tutorCheck.tutor_id);
        }
      }
    }

    console.log("[Login] Role assigned:", role);
    return role;
  } catch (e) {
    console.error("[Login] Student login error:", e);
    throw new Error("Login failed. Please check your email and password.");
  }
}
