import type { Person } from "./types.ts";
import { getApi } from "../api.ts";
import { useQuery } from "@tanstack/react-query";

export async function getPerson(id: number) {
  const response = await getApi().get<Person>(`/person/${id}`);

  return response.data as Person;
}

export function usePerson(id: number) {
  const { data, isFetching, refetch, dataUpdatedAt, isFetched, isLoading } =
    useQuery({
      queryFn: () => getPerson(id),
      queryKey: ["persons", id],
    });

  return {
    data,
    isFetching,
    refetch,
    dataUpdatedAt,
    isFetched,
    isLoading,
  };
}
