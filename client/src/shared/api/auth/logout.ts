import { getApi } from "../api.ts";

export async function logout() {
  const response = await getApi().post("/logout");

  return response.data;
}
