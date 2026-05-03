import { getStoredToken } from "./authService";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

/**
 * Job API fetch wrapper — always sends auth token as Bearer header
 */
const apiFetch = async (endpoint, options = {}) => {
  const token = getStoredToken();

  const config = {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(`${API_BASE}/jobs${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data.message || "Request failed");
    error.response = { data, status: response.status };
    throw error;
  }

  return data;
};

// ─── Public ───────────────────────────────────────────────────────────────────

export const getJobs = async () => {
  return apiFetch("/");
};

export const getJobDetails = async (idOrSlug) => {
  return apiFetch(`/${idOrSlug}`);
};

// ─── Admin (requires auth) ────────────────────────────────────────────────────

export const createJob = async (jobData) => {
  return apiFetch("/", {
    method: "POST",
    body: JSON.stringify(jobData),
  });
};

export const updateJob = async (id, jobData) => {
  return apiFetch(`/${id}`, {
    method: "PUT",
    body: JSON.stringify(jobData),
  });
};

export const deleteJob = async (id) => {
  return apiFetch(`/${id}`, {
    method: "DELETE",
  });
};
