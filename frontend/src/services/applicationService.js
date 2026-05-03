import { getStoredToken } from "./authService";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const appFetch = async (endpoint, options = {}) => {
  const token = getStoredToken();
  const config = {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };
  const response = await fetch(`${API_BASE}${endpoint}`, config);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Request failed");
  return data;
};

export const submitApplication = async (applicationData) => {
  return appFetch("/applications/apply", {
    method: "POST",
    body: JSON.stringify(applicationData),
  });
};

export const getAllApplications = async () => {
  return appFetch("/applications/admin/all");
};

export const updateApplicationStatus = async (id, statusData) => {
  return appFetch(`/applications/admin/${id}`, {
    method: "PATCH",
    body: JSON.stringify(statusData),
  });
};
