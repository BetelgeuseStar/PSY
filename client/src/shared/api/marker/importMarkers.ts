import { getMarkerList } from "./getMarkerList.ts";
import { useCreateMutationMarkerBatch } from "./createMarker.ts";

export function useImportMarkers(sourceImportToId: number) {
  const { mutateAsync: createMarkerBatch, isPending } =
    useCreateMutationMarkerBatch(sourceImportToId);

  async function importMarkers(sourceImportFromId: number) {
    const importedMarkers = await getMarkerList(sourceImportFromId);

    const markersDataList = importedMarkers.map(
      ({ id, rating, ...restImportedMarker }) => {
        return {
          ...restImportedMarker,
          sourceId: sourceImportToId,
        };
      },
    );

    await createMarkerBatch(markersDataList);
  }

  return {
    importMarkers,
    isPending,
  };
}
