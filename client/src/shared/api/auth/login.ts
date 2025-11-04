import { getApi } from "../api.ts";
import type { AuthResponse } from "./types.ts";

export async function login(email: string, password: string) {
  const response = await getApi().post<AuthResponse>(`/login`, {
    email,
    password,
  });

  return response.data as AuthResponse;
}
