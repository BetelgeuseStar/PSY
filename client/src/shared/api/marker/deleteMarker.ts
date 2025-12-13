import { getApi } from "../api.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function deleteMarker(id: number) {
  const response = await getApi().post(`/deleteMarker/${id}`);

  return response.data;
}

export function useDeleteMutationMarker(sourceId: number | null) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteMarker,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["markers", sourceId] });
    },
  });

  return {
    mutate,
  };
}
