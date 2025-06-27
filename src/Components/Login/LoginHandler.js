export async function loginUser(email, password) {
  const response = await fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Login failed. Please check your credentials.");
  }

  const { token } = data;
  const decoded = JSON.parse(atob(token.split('.')[1]));
  const role = decoded.role;

  localStorage.setItem("token", token);
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("role", role);

  return role;
}
