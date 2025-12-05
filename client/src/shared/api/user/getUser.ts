import { getApi } from "../api.ts";
import type { SafeUser } from "./types.ts";

export async function getUser(id: number) {
  const response = await getApi().get<SafeUser>(`/user/${id}`);

  return response.data as SafeUser;
}
