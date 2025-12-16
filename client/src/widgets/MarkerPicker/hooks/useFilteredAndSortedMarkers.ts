import { useMarkersList } from "../../../shared/api";
import type { PsyType } from "../../../shared/types";
import { useEffect, useState } from "react";
import type { Marker } from "../../../shared/api/marker/types.ts";

export function useFilteredAndSortedMarkers(
  sourceId: number | null,
  pickerState: PsyType,
  pickedMarkerIds: number[],
) {
  const { data: markersList, isFetching } = useMarkersList(sourceId);
  const [filteredAndSortedMarkerList, setFilteredAndSortedMarkerList] =
    useState<Marker[]>([]);

  useEffect(() => {
    if (!markersList.length) return;
    setFilteredAndSortedMarkerList(
      filterAndSortMarkerList(markersList, pickerState, pickedMarkerIds),
    );
  }, [pickerState.psyLevel, pickerState.psyFunction, markersList.length]);

  return {
    markersList: filteredAndSortedMarkerList,
    isFetching,
  };
}

function filterAndSortMarkerList(
  markersList: Marker[],
  pickerState: PsyType,
  pickedMarkerIds: number[],
) {
  return markersList
    .filter(
      (marker) =>
        marker.psyLevel === pickerState.psyLevel &&
        marker.psyFunction === pickerState.psyFunction,
    )
    .sort((a, b) => {
      const aIsPicked = pickedMarkerIds?.includes(a.id);
      const bIsPicked = pickedMarkerIds?.includes(b.id);

      if (aIsPicked && bIsPicked) return b.rating - a.rating;
      if (aIsPicked) return -1;
      if (bIsPicked) return 1;
      if (b.rating !== a.rating) return b.rating - a.rating;
      return a.id - b.id;
    });
}
