import { getApi } from "../api.ts";
import type { AuthResponse } from "./types.ts";

export async function registration(
  login: string,
  email: string,
  password: string,
) {
  const response = await getApi().post<AuthResponse>(`/registration`, {
    login,
    email,
    password,
  });

  return response.data as AuthResponse;
}
