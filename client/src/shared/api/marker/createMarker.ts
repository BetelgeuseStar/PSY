import { getApi } from "../api.ts";
import type { Marker, MarkerData } from "./types.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function createMarker(newMarker: MarkerData) {
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

export function useCreateMutationMarkerBatch(sourceId: number | null) {
  const queryClient = useQueryClient();

  async function createBatch(markerList: MarkerData[]) {
    return Promise.all(
      markerList.map((marker) => {
        return createMarker(marker);
      }),
    );
  }

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createBatch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["markers", sourceId] });
    },
  });

  return {
    mutateAsync,
    isPending,
  };
}
