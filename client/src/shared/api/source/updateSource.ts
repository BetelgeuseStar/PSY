import { getApi } from "../api.ts";
import type { Source } from "./types.ts";
import debounce from "lodash.debounce";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function updateSource(source: Source) {
  const response = await getApi().post<Source>("/updateSource", { ...source });

  return response.data as Source;
}

export function useUpdateMutationSource(sourceId: number | null) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateSource,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sources"] });
      queryClient.invalidateQueries({ queryKey: ["sources", sourceId] });
    },
  });

  const debouncedMutate = debounce(mutate, 500);

  return {
    mutate,
    debouncedMutate,
  };
}
