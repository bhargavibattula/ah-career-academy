import axios from "axios";
import { getStoredToken } from "./authService";

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
  const response = await axios.get(API_URL);
  return response.data;
};

export const getCourseById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
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
