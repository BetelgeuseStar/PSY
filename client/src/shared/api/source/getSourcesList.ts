import { getApi } from "../api.ts";
import type { Source } from "./types.ts";
import { useQuery } from "@tanstack/react-query";

export async function getSourcesList() {
  const response = await getApi().get<Source[]>("/sources");

  return response.data as Source[];
}

export function useSourcesList() {
  const { data, isFetching, refetch, dataUpdatedAt, isFetched } = useQuery({
    queryFn: getSourcesList,
    queryKey: ["getSourcesList"],
    staleTime: 0,
  });

  return {
    data,
    isFetching,
    refetch,
    dataUpdatedAt,
    isFetched,
  };
}
