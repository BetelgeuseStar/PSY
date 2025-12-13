import { getApi } from "../api.ts";
import type { Marker } from "./types.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function createMarker(newMarker: Omit<Marker, "id" | "rating">) {
  const response = await getApi().post<Marker>("/createMarker", newMarker);

  return response.data as Marker;
}

export function useCreateMutationMarker(sourceId: number | null) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createMarker,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["markers", sourceId] });
    },
  });

  return {
    mutate,
  };
}
