export async function registerUser(payload) {
  const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

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
        rate_per_hour: 0
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
