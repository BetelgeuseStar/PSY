import { getApi } from "../api.ts";

export async function deleteSource(id: number) {
  const response = await getApi().post(`/deleteSource/${id}`);

  return response.data;
}
