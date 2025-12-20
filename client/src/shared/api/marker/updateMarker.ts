import { getApi } from "../api.ts";
import type { Marker } from "./types.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import { useMemo } from "react";

export async function updateMarker(updatedMarker: Marker) {
  const response = await getApi().post<Marker>("/updateMarker", updatedMarker);

  return response.data as Marker;
}

export function useUpdateMutationMarker(sourceId: number | null) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateMarker,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["markers", sourceId] });
    },
  });

  const debouncedMutate = useMemo(() => debounce(mutate, 1000), []);

  return {
    mutate: debouncedMutate,
    debouncedMutate,
  };
}
