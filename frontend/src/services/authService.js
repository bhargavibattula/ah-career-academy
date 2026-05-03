// Token helpers — stored in localStorage for cross-origin dev environments
const TOKEN_KEY = "ah_career_token";

export const getStoredToken = () => localStorage.getItem(TOKEN_KEY);
export const setStoredToken = (token) => {
  if (token) localStorage.setItem(TOKEN_KEY, token);
  else localStorage.removeItem(TOKEN_KEY);
};

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

/**
 * Generic fetch wrapper:
 * - Sends cookies for same-origin (production)
 * - Sends Authorization: Bearer for cross-origin (local dev)
 */
const apiFetch = async (endpoint, options = {}) => {
  const token = getStoredToken();

  const config = {
    credentials: "include", // Still send cookies (works in production)
    headers: {
      "Content-Type": "application/json",
      // Also send token as Bearer header (works in cross-origin dev)
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(`${API_BASE}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data.message || "Something went wrong. Please try again.");
    error.response = { data, status: response.status };
    throw error;
  }

  return data;
};

// ─── Auth APIs ────────────────────────────────────────────────────────────────

export const registerUser = async ({ name, email, password }) => {
  const data = await apiFetch("/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
  // Store token from response
  if (data.token) setStoredToken(data.token);
  return data;
};

export const loginUser = async ({ email, password }) => {
  const data = await apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  // Store token from response
  if (data.token) setStoredToken(data.token);
  return data;
};

export const logoutUser = async () => {
  setStoredToken(null); // Clear token immediately
  try {
    return await apiFetch("/auth/logout", { method: "POST" });
  } catch {
    // Ignore server errors on logout
    return { success: true };
  }
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
