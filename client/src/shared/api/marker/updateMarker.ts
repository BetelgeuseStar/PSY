import { getApi } from "../api.ts";
import type { Marker } from "./types.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import debounce from "lodash.debounce";

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

  const debouncedMutate = debounce(mutate, 500);

  return {
    mutate,
    debouncedMutate,
  };
}
