import { getApi } from "../api.ts";
import type { PickedMarkers } from "./types.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import debounce from "lodash.debounce";

export async function updatePickedMarkers(
  pickedIds: number[],
  type: number[],
  personId: number,
  sourceId: number,
) {
  const response = await getApi().post<PickedMarkers>("/updatePickedMarkers", {
    pickedIds,
    type,
    personId,
    sourceId,
  });

  return response.data as PickedMarkers;
}

export function useUpdateMutationPickedMarkers(
  personId: number,
  sourceId: number | null,
) {
  const queryClient = useQueryClient();

  async function mutationFn({ pickedIds, type }: PickedMarkers) {
    if (!sourceId) return null;
    return updatePickedMarkers(pickedIds, type, personId, sourceId);
  }

  const { mutate } = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["pickedMarkers", personId, sourceId],
      });
    },
  });

  const debouncedMutate = debounce(mutate, 500);

  return {
    mutate,
    debouncedMutate,
  };
}
