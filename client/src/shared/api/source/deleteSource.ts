import { getApi } from "../api.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function deleteSource(id: number) {
  const response = await getApi().post(`/deleteSource/${id}`);

  return response.data;
}

export function useDeleteMutationSource(sourceId: number | null) {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: deleteSource,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sources"] });
      queryClient.invalidateQueries({ queryKey: ["sources", sourceId] });
    },
  });

  return {
    mutateAsync,
  };
}
