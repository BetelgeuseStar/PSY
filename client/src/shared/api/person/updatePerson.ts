import { getApi } from "../api.ts";
import type { Person } from "./types.ts";
import debounce from "lodash.debounce";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";

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

  const debouncedMutate = useMemo(() => debounce(mutate, 1000), []);

  return {
    mutate,
    debouncedMutate,
  };
}
