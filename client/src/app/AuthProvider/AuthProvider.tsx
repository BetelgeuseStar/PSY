import type { PropsWithChildren } from "react";
import { useState } from "react";
import type { User } from "../../shared/api";
import {
  login as loginRequest,
  logout as logoutRequest,
  refresh,
  registration as registrationRequest,
} from "../../shared/api";
import { AuthContext } from "./AuthContext.tsx";

export function AuthContextProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  async function login(email: string, password: string) {
    try {
      const authData = await loginRequest(email, password);
      localStorage.setItem("token", authData.accessToken);
      setUser(authData.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
  async function logout() {
    try {
      await logoutRequest();
      localStorage.removeItem("token");
      setUser(null);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async function registration(login: string, email: string, password: string) {
    try {
      const authData = await registrationRequest(login, email, password);
      localStorage.setItem("token", authData.accessToken);
      setUser(authData.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async function checkAuth() {
    try {
      const authData = await refresh();
      localStorage.setItem("token", authData.accessToken);
      setUser(authData.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, registration, checkAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}
