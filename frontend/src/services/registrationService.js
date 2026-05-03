import { getStoredToken } from "./authService";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

/**
 * Fetch wrapper — does NOT throw on success, returns parsed JSON.
 * Only throws on network errors.
 */
const regFetch = async (endpoint, options = {}) => {
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
  return data; // Always return the parsed JSON — caller checks data.success
};

// Submit a new course registration
export const createRegistration = async (registrationData) => {
  return regFetch("/registrations", {
    method: "POST",
    body: JSON.stringify(registrationData),
  });
};

// Check if a user already registered for a course (public)
export const checkRegistration = async (email, courseId) => {
  return regFetch(`/registrations/check?email=${encodeURIComponent(email)}&courseId=${encodeURIComponent(courseId)}`);
};

// Get all registrations for the logged-in user (by email, public)
export const getMyRegistrations = async (email) => {
  return regFetch(`/registrations/my?email=${encodeURIComponent(email)}`);
};

// Admin: get all registrations
export const getAllRegistrations = async (courseId = "") => {
  const query = courseId ? `?courseId=${courseId}` : "";
  return regFetch(`/registrations${query}`);
};

// Admin: update registration status
export const updateRegistrationStatus = async (id, statusData) => {
  return regFetch(`/registrations/${id}`, {
    method: "PATCH",
    body: JSON.stringify(statusData),
  });
};
