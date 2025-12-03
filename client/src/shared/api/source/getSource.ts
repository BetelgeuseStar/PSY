import type { Source } from "./types.ts";
import { getApi } from "../api.ts";

export async function getSource(id: number) {
  const response = await getApi().get<Source>(`/source/${id}`);

  return response.data as Source;
}
