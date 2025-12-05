import axios from "axios";
import { refresh } from "./auth";

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

  instance.interceptors.response.use(
    (config) => {
      return config;
    },
    async (error) => {
      const originalRequest = error.config;

      if (
        error.response?.status == 401 &&
        originalRequest &&
        !originalRequest._isRetry
      ) {
        originalRequest._isRetry = true;
        const authData = await refresh().catch(() =>
          console.log("Пользователь не авторизован"),
        );

        if (!authData) {
          return;
        }

        localStorage.setItem("token", authData.accessToken);
        return getApi().request(originalRequest);
      }

      throw error;
    },
  );

  return instance;
}
