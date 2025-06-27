export async function registerUser(formData) {
  try {
    const response = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.error || "Registration failed." };
    }

    return { success: true };
  } catch{
    return { success: false, error: "Network error" };
  }
}
