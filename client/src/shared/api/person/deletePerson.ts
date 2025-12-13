import { getApi } from "../api.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function deletePerson(id: number) {
  const response = await getApi().post(`/deletePerson/${id}`);

  return response.data;
}

export function useDeleteMutationPerson(personId: number | null) {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: deletePerson,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["persons"] });
      queryClient.invalidateQueries({ queryKey: ["persons", personId] });
    },
  });

  return {
    mutateAsync,
  };
}
