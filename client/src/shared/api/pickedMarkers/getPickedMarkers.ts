import { getApi } from "../api.ts";
import type { PickedMarkers } from "./types.ts";
import { useQuery } from "@tanstack/react-query";

export async function getPickedMarkers(personId: number, sourceId: number) {
  const response = await getApi().post<PickedMarkers>("/getPickedMarkers", {
    personId,
    sourceId,
  });

  return response.data as PickedMarkers;
}

export function usePickedMarkers(personId: number, sourceId: number | null) {
  async function queryFn() {
    if (!sourceId) return null;
    return getPickedMarkers(personId, sourceId);
  }

  const { data, isFetching, refetch, dataUpdatedAt, isFetched, isLoading } =
    useQuery({
      queryFn,
      queryKey: ["pickedMarkers", personId, sourceId],
    });

  return {
    data,
    isFetching,
    isLoading,
    refetch,
    dataUpdatedAt,
    isFetched,
  };
}
