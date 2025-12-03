import { getApi } from "../api.ts";

export async function deletePerson(id: number) {
  const response = await getApi().post(`/deletePerson/${id}`);

  return response.data;
}
