import axios from "axios";

const API_URL = "http://localhost:5000/api/jobs";

// Set withCredentials to true for cookie-based auth
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const getJobs = async () => {
  const response = await api.get("/");
  return response.data;
};

export const createJob = async (jobData) => {
  const response = await api.post("/", jobData);
  return response.data;
};

export const updateJob = async (id, jobData) => {
  const response = await api.put(`/${id}`, jobData);
  return response.data;
};

export const deleteJob = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};
