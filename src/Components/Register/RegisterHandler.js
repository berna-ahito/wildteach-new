export async function registerUser(payload) {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  // Make a shallow copy of payload with capitalized gender and role
  const transformedData = {
    ...payload,
    gender: capitalize(payload.gender),
    role: capitalize(payload.role)
  };

  try {
    const response = await fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transformedData),
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.error || "Registration failed." };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Network error" };
  }
}
