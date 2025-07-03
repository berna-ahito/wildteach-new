export async function registerUser(payload) {
  const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  // ✅ Validate password strength
  const password = payload.password;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!passwordRegex.test(password)) {
    return {
      success: false,
      error:
        "Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character.",
    };
  }

  // ✅ Check if email already exists
  try {
    const emailCheckRes = await fetch(
      `http://localhost:8080/student/existsByEmail?email=${encodeURIComponent(
        payload.email
      )}`
    );
    const emailData = await emailCheckRes.json();

    if (emailData.exists) {
      return {
        success: false,
        error: "Email is already in use. Please use a different one.",
      };
    }
  } catch (err) {
    console.error("[Email Duplication Check Error]", err);
    return {
      success: false,
      error: "Unable to verify email. Please try again later.",
    };
  }

  // ✅ Proceed with registration
  const transformedData = {
    ...payload,
    gender: capitalize(payload.gender),
    role: capitalize(payload.role),
  };

  try {
    const response = await fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transformedData),
    });

    const studentId = await response.text();

    if (!response.ok) {
      return { success: false, error: "Student registration failed." };
    }

    if (transformedData.role === "Tutor") {
      const tutorPayload = {
        student_id: Number(studentId),
        approval_status: "Pending",
        availability: "[]",
        subjects_offered: payload.subjects || "",
        skills: payload.skills || "",
        rate_per_hour: 0,
      };

      const tutorRes = await fetch("http://localhost:8080/tutor/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tutorPayload),
      });

      if (!tutorRes.ok) {
        return {
          success: false,
          error: "Student created, but tutor profile failed to register.",
        };
      }
    }

    return { success: true };
  } catch (error) {
    console.error("[Register Error]", error);
    return { success: false, error: "Network error or server is down." };
  }
}
