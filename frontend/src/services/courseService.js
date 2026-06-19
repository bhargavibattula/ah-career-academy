import axios from "axios";
import { getStoredToken } from "./authService";
import { courses as localCourses } from "../data/courses";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const API_URL = `${API_BASE}/courses`;

const getAuthConfig = () => {
  const token = getStoredToken();
  return {
    withCredentials: true,
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };
};

export const getCourses = async () => {
  try {
    const response = await axios.get(API_URL);
    if (response.data && response.data.success) {
      const backendCourses = response.data.data || [];
      const backendIds = backendCourses.map(c => c.id);
      const uniqueLocal = localCourses.filter(c => !backendIds.includes(c.id));
      return { success: true, data: [...backendCourses, ...uniqueLocal] };
    }
    return { success: true, data: localCourses };
  } catch (error) {
    return { success: true, data: localCourses };
  }
};

export const getCourseById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    if (response.data && response.data.success && response.data.data) {
      return response.data;
    }
  } catch (error) {
    // Proceed to fallback
  }

  const localCourse = localCourses.find(c => c.id === id);
  if (localCourse) {
    return { success: true, data: localCourse };
  }

  return { success: false, message: "Course not found" };
};

export const createCourse = async (courseData) => {
  const response = await axios.post(API_URL, courseData, getAuthConfig());
  return response.data;
};

export const updateCourse = async (id, courseData) => {
  const response = await axios.put(`${API_URL}/${id}`, courseData, getAuthConfig());
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`, getAuthConfig());
  return response.data;
};
