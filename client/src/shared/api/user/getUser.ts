import { getApi } from "../api.ts";
import type { SafeUser } from "./types.ts";
import { useQuery } from "@tanstack/react-query";

export async function getUser(id: number) {
  const response = await getApi().get<SafeUser>(`/user/${id}`);

  return response.data as SafeUser;
}

export function useUser(id?: number | null) {
  const queryFn = () => {
    if (!id) return null;
    return getUser(id);
  };

  const { data, isFetching, refetch, dataUpdatedAt, isFetched } = useQuery({
    queryFn,
    queryKey: ["getUser", id],
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
