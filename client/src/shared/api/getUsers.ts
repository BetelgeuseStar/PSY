import { getApi } from "./api.ts";
import type { User } from "./auth";

export async function getUsers() {
  const response = await getApi().get<User[]>("/users");

  return response.data as User[];
}
