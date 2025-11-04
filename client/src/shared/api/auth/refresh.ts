import { getApi } from "../api.ts";
import type { AuthResponse } from "./types.ts";

export async function refresh() {
  const response = await getApi(false).get<AuthResponse>(`/refresh`);

  return response.data as AuthResponse;
}
