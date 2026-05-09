import { getStoredToken } from "./authService";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const kidsRegFetch = async (endpoint, options = {}) => {
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
  
  if (!response.ok) {
    const error = new Error(data.message || "Something went wrong.");
    error.response = { data };
    throw error;
  }
  
  return data;
};

// Public: Submit a new kids registration
export const createKidsRegistration = async (registrationData) => {
  return kidsRegFetch("/kids-registrations", {
    method: "POST",
    body: JSON.stringify(registrationData),
  });
};

// Admin: Get all kids registrations
export const getAllKidsRegistrations = async () => {
  return kidsRegFetch("/kids-registrations");
};

// Admin: Update kids registration status
export const updateKidsRegistrationStatus = async (id, statusData) => {
  return kidsRegFetch(`/kids-registrations/${id}`, {
    method: "PATCH",
    body: JSON.stringify(statusData),
  });
};
