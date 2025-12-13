import { getApi } from "../api.ts";
import type { Source } from "./types.ts";
import debounce from "lodash.debounce";

export async function updateSource(source: Source) {
  const response = await getApi().post<Source>("/updateSource", { ...source });

  return response.data as Source;
}

export const debouncedFetchUpdateSource = debounce(updateSource, 500);
