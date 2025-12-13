import { getApi } from "../api.ts";
import type { Person } from "./types.ts";
import { useQuery } from "@tanstack/react-query";

export async function getPersonsList() {
  const response = await getApi().get<Person[]>("/persons");

  return response.data as Person[];
}

export function usePersonsList() {
  const { data, isFetching, refetch, dataUpdatedAt, isFetched } = useQuery({
    queryFn: getPersonsList,
    queryKey: ["persons"],
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
