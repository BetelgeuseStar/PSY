import { getApi } from "../api.ts";
import type { Marker } from "./types.ts";
import { useQuery } from "@tanstack/react-query";

export async function getMarkerList(sourceId: number) {
  const response = await getApi().get<Marker[]>(`/markers/${sourceId}`);

  return response.data as Marker[];
}

export function useMarkersList(sourceId: number | null) {
  const queryFn = () => {
    if (!sourceId) return null;
    return getMarkerList(sourceId);
  };

  const { data, isFetching, refetch, dataUpdatedAt, isFetched, isLoading } =
    useQuery({
      queryFn,
      queryKey: ["markers", sourceId],
      enabled: Boolean(sourceId ?? false),
    });

  return {
    data: data ?? [],
    isFetching,
    refetch,
    dataUpdatedAt,
    isFetched,
    isLoading,
  };
}
