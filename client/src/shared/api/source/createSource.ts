import { getApi } from "../api.ts";
import type { Source } from "./types.ts";

export async function createSource() {
  const response = await getApi().post<Source>("/createSource");

  return response.data as Source;
}
