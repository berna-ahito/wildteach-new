export async function loginUser(email, password) {
  console.log("[Login] Starting login process for:", email);

  // === ADMIN LOGIN ATTEMPT ===
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

      const userData = {
        isLoggedIn: true,
        role: data.role?.toLowerCase() || "admin",
        admin_id: data.admin_id,
        name: data.name,
        email: data.email,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      return userData.role;
    }
  } catch (e) {
    console.error("[Login] Admin login error:", e);
  }

  // === STUDENT LOGIN ATTEMPT (TUTEE or TUTOR) ===
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
    const role = data.role?.toLowerCase();

    const userData = {
      isLoggedIn: true,
      role,
      student_id: studentId,
      name: data.name ?? "",
      email: data.email || email,
    };

    localStorage.setItem("student_id", studentId.toString());

    if (role === "tutor") {
      const checkTutor = await fetch(`http://localhost:8080/student/hasTutorProfile/${studentId}`);
      if (checkTutor.ok) {
        const tutorCheck = await checkTutor.json();
        console.log("[Login] Tutor profile check result:", tutorCheck);
        if (tutorCheck.tutor_id) {
          userData.tutor_id = tutorCheck.tutor_id;
          localStorage.setItem("tutor_id", tutorCheck.tutor_id.toString());
        }
      }
    }

    localStorage.setItem("user", JSON.stringify(userData));
    return role;
  } catch (e) {
    console.error("[Login] Student login error:", e);
    throw new Error("Login failed. Please check your email and password.");
  }
}
