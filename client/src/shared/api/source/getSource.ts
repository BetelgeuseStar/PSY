import type { Source } from "./types.ts";
import { getApi } from "../api.ts";
import { useQuery } from "@tanstack/react-query";

export async function getSource(id: number) {
  const response = await getApi().get<Source>(`/source/${id}`);

  return response.data as Source;
}

export function useSource(id?: number | null) {
  const queryFn = () => {
    if (!id) return null;
    return getSource(id);
  };

  const { data, isFetching, refetch, dataUpdatedAt, isFetched } = useQuery({
    queryFn,
    queryKey: ["getSource", id],
    enabled: Boolean(id ?? false),
  });

  return {
    data,
    isFetching,
    refetch,
    dataUpdatedAt,
    isFetched,
  };
}
