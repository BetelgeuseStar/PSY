import { getApi } from "../api.ts";
import { debounce } from "../../utils";
import type { Source } from "./types.ts";

export async function updateSource(source: Source) {
  const response = await getApi().post<Source>("/updateSource", { ...source });

  return response.data as Source;
}

export const debouncedFetchUpdateSource = debounce(updateSource, 1500);
