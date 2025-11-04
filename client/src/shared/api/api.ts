import axios from "axios";

export const API_URL = "http://localhost:5000/api";

export function getApi(withToken = true) {
  const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
  });

  if (withToken) {
    instance.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      return config;
    });
  }

  return instance;
}
