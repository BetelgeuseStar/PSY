import { getApi } from "../api.ts";
import { useQuery } from "@tanstack/react-query";

export async function getFile(url?: string) {
  if (!url) return;
  const response = await getApi().post<File>(
    `/download`,
    {
      url,
    },
    { responseType: "blob" },
  );

  return response.data as File;
}

export function useGetFile(url?: string | null) {
  const queryFn = () => {
    if (!url) return;
    return getFile(url);
  };

  const { data, isFetching, refetch, dataUpdatedAt } = useQuery({
    queryFn,
    queryKey: ["getFile", url],
  });

  return {
    data,
    isFetching,
    refetch,
    dataUpdatedAt,
  };
}
