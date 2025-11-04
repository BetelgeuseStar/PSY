import { createContext, useContext } from "react";
import type { User } from "../../shared/api";

interface IAuthContext {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  registration: (
    login: string,
    email: string,
    password: string,
  ) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  login: () => void 0,
  logout: () => void 0,
  registration: () => void 0,
  checkAuth: () => void 0,
});

export function useAuthContext() {
  return useContext(AuthContext);
}
