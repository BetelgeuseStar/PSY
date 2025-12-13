import { getApi } from "../api.ts";
import type { Person } from "./types.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function createPerson() {
  const response = await getApi().post<Person>("/createPerson");

  return response.data as Person;
}

export function useCreateMutationPerson() {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: createPerson,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["persons"] });
    },
  });

  return {
    mutateAsync,
  };
}
