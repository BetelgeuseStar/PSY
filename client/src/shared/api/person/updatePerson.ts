import { getApi } from "../api.ts";
import type { Person } from "./types.ts";
import debounce from "lodash.debounce";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function updatePerson(person: Person) {
  const response = await getApi().post<Person>("/updatePerson", {
    ...person,
  });

  return response.data as Person;
}
export function useUpdateMutationPerson(personId: number | null) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updatePerson,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["persons"] });
      queryClient.invalidateQueries({ queryKey: ["persons", personId] });
    },
  });

  const debouncedMutate = debounce(mutate, 500);

  return {
    mutate,
    debouncedMutate,
  };
}
