import { getApi } from "../api.ts";
import type { Source } from "./types.ts";

export async function getSourcesList() {
  const response = await getApi().get<Source[]>("/sources");

  return response.data as Source[];
}
