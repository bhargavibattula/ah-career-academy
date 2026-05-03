// All API calls use credentials: "include" to send HTTP-only cookies automatically

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

/**
 * Generic fetch wrapper with consistent error handling
 */
const apiFetch = async (endpoint, options = {}) => {
  const config = {
    credentials: "include", // Send cookies with every request
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(`${API_BASE}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    // Throw error with server message
    throw new Error(data.message || "Something went wrong. Please try again.");
  }

  return data;
};

// ─── Auth APIs ────────────────────────────────────────────────────────────────

export const registerUser = async ({ name, email, password }) => {
  return apiFetch("/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    // NEVER send role — backend ignores it and hardcodes "user"
  });
};

export const loginUser = async ({ email, password }) => {
  return apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

export const logoutUser = async () => {
  return apiFetch("/auth/logout", { method: "POST" });
};

export const getMe = async () => {
  return apiFetch("/auth/me");
};

// ─── Admin APIs ───────────────────────────────────────────────────────────────

export const getAdminUsers = async ({ page = 1, limit = 20, search = "" } = {}) => {
  const params = new URLSearchParams({ page, limit, ...(search && { search }) });
  return apiFetch(`/admin/users?${params}`);
};

export const getAdminStats = async () => {
  return apiFetch("/admin/stats");
};

export const deleteAdminUser = async (userId) => {
  return apiFetch(`/admin/user/${userId}`, { method: "DELETE" });
};

export const toggleAdminUserStatus = async (userId) => {
  return apiFetch(`/admin/user/${userId}/toggle`, { method: "PATCH" });
};
