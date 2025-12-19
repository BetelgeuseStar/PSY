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
    data: fetchedPickedMarkers,
    isLoading: pickedMarkersIsLoading,
    dataUpdatedAt: pickedMarkersDataUpdatedAt,
  } = usePickedMarkers(personId, sourceId);

  const { debouncedMutate: debouncedUpdatePickedMarkers } =
    useUpdateMutationPickedMarkers(personId, sourceId);

  useEffect(() => {
    if (localePickedMarkers) return;
    setLocalePickedMarkers(fetchedPickedMarkers);
  }, [pickedMarkersDataUpdatedAt]);

  useEffect(() => {
    return () => {
      debouncedUpdatePickedMarkers.flush();
    };
  }, []);

  function setPickerMarkersParamClosure<P extends keyof PickedMarkers>(
    param: P,
  ): (value: PickedMarkers[P]) => void {
    return (value) => {
      setLocalePickedMarkers((prev) => {
        const newPickerMarkersData: PickedMarkers = {
          ...prev!,
          [param]: value,
        };

        debouncedUpdatePickedMarkers(newPickerMarkersData);

        return newPickerMarkersData;
      });
    };
  }

  return {
    pickedMarkers: localePickedMarkers,
    pickedMarkersIsLoading,
    setPickerMarkersParamClosure,
  };
}
