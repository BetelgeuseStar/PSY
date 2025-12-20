import { getApi } from "../api.ts";
import type { Source } from "./types.ts";
import debounce from "lodash.debounce";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";

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

  const debouncedMutate = useMemo(() => debounce(mutate, 1000), []);

  return {
    mutate,
    debouncedMutate,
  };
}
