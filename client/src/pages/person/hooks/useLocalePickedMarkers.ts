import type { PickedMarkers } from "../../../shared/api";
import {
  usePickedMarkers,
  useUpdateMutationPickedMarkers,
} from "../../../shared/api";
import { useEffect, useState } from "react";

export function useLocalePickedMarkers(
  personId: number,
  sourceId: number | null,
) {
  const [localePickedMarkers, setLocalePickedMarkers] =
    useState<PickedMarkers>();

  const {
    pickedIds,
    isLoading: pickedMarkersIsLoading,
    dataUpdatedAt: pickedMarkersDataUpdatedAt,
  } = usePickedMarkers(personId, sourceId);

  const { debouncedMutate: debouncedUpdatePickedMarkers } =
    useUpdateMutationPickedMarkers(personId, sourceId);

  useEffect(() => {
    if (localePickedMarkers?.pickedIds.length) return;

    setLocalePickedMarkers({ pickedIds });
  }, [pickedMarkersDataUpdatedAt]);

  useEffect(() => {
    return () => {
      debouncedUpdatePickedMarkers.flush();
    };
  }, []);

  function updatePickedMarkers(pickedIds: number[]) {
    debouncedUpdatePickedMarkers(pickedIds);

    setLocalePickedMarkers({ pickedIds });
  }

  return {
    pickedIds: localePickedMarkers?.pickedIds ?? [],
    pickedMarkersIsLoading,
    updatePickedMarkers,
  };
}
