export async function loginUser(email, password) {
  console.log("[Login] Starting login process for:", email);

  const validRoles = ["admin", "tutor", "tutee"];
  let userData = null;

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

    if (adminData.is_active === false) {
      throw new Error("Admin account is deactivated. Contact administrator.");
    }

    const role = adminData.role?.toLowerCase() || "admin";

    if (!validRoles.includes(role)) {
      throw new Error("Invalid role detected for admin.");
    }

    userData = {
      isLoggedIn: true,
      role,
      admin_id: adminData.admin_id,
      name: adminData.name,
      email: adminData.email,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    console.log("[Login] Admin saved to localStorage:", userData);

    return role;
  } catch (e) {
    console.warn("[Login] Admin login failed, falling back to student login.");
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

    if (data.is_active === false) {
      throw new Error("Student account is deactivated. Contact administrator.");
    }

    const role = data.role?.toLowerCase();
    const studentId = data.student_id;

    if (!validRoles.includes(role)) {
      throw new Error("Invalid role detected for student.");
    }

    userData = {
      isLoggedIn: true,
      role,
      student_id: studentId,
      name: data.name ?? "",
      email: data.email || email,
    };

    localStorage.setItem("student_id", studentId.toString());

    // Optional: Check if tutor has a profile
    if (role === "tutor") {
      try {
        const checkTutor = await fetch(`http://localhost:8080/student/hasTutorProfile/${studentId}`);
        if (checkTutor.ok) {
          const tutorCheck = await checkTutor.json();
          if (tutorCheck.tutor_id) {
            userData.tutor_id = tutorCheck.tutor_id;
            localStorage.setItem("tutor_id", tutorCheck.tutor_id.toString());
          }
        }
      } catch (e) {
        console.warn("[Login] Tutor profile check failed:", e.message);
      }
    }

    localStorage.setItem("user", JSON.stringify(userData));
    console.log("[Login] Student saved to localStorage:", userData);

    return role;
  } catch (e) {
    console.error("[Login] Student login error:", e.message);
    throw new Error(e.message || "Login failed. Please check your email and password.");
  }
}
