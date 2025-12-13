import { getApi } from "../api.ts";
import type { Source } from "./types.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function createSource() {
  const response = await getApi().post<Source>("/createSource");

  return response.data as Source;
}

export function useCreateMutationSource() {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: createSource,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sources"] });
    },
  });

  return {
    mutateAsync,
  };
}
