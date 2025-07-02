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

    const adminData = await adminRes.json();

    if (!adminRes.ok) {
      throw new Error(adminData.message || "Admin login failed.");
    }

    // Optional: Check if admin is active (if backend supports it)
    if (adminData.is_active === false) {
      throw new Error("Account is deactivated. Contact administrator.");
    }

    const userData = {
      isLoggedIn: true,
      role: adminData.role?.toLowerCase() || "admin",
      admin_id: adminData.admin_id,
      name: adminData.name,
      email: adminData.email,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    return userData.role;
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

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Student login failed.");
    }

    // ✅ Check if student account is active
    if (data.is_active === false) {
      throw new Error("Account is deactivated. Contact administrator.");
    }

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

    // ✅ Optional: Check if tutor profile exists
    if (role === "tutor") {
      const checkTutor = await fetch(`http://localhost:8080/student/hasTutorProfile/${studentId}`);
      if (checkTutor.ok) {
        const tutorCheck = await checkTutor.json();
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
    // Show deactivation or default message
    throw new Error(e.message || "Login failed. Please check your email and password.");
  }
}
