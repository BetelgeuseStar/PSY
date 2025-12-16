import * as St from "./styled.ts";
import type { PsyType } from "../../shared/types";
import { MarkerAdder, MarkerBar } from "./components";
import type {
  ConfirmModalProps,
  MarkerModalProps,
  OpenModalFunc,
} from "../Modal";
import {
  useCreateMutationMarker,
  useDeleteMutationMarker,
} from "../../shared/api";
import type { Marker } from "../../shared/api/marker/types.ts";
import { Loader } from "../../shared/ui";
import { useFilteredAndSortedMarkers } from "./hooks";

type Props = {
  allowEdit?: boolean;
  openDescriptionModal: OpenModalFunc<MarkerModalProps>;
  openConfirmModal: OpenModalFunc<ConfirmModalProps>;
  sourceId: number | null;
  pickerState: PsyType;
  sourceName?: string;
  pickedMarkerIds?: number[];
  onChangePickedMarkerIds?: (pickedMarkerIds?: number[]) => void;
};
export function MarkerPicker({
  allowEdit = false,
  openDescriptionModal,
  openConfirmModal,
  pickerState,
  sourceId,
  sourceName,
  pickedMarkerIds = [],
  onChangePickedMarkerIds,
}: Props) {
  const { markersList, isFetching } = useFilteredAndSortedMarkers(
    sourceId,
    pickerState,
    pickedMarkerIds ?? [],
  );

  const { mutate: createMarker } = useCreateMutationMarker(sourceId);
  const { mutate: deleteMarker } = useDeleteMutationMarker(sourceId);

  function deleteHandler(id: number, value: string) {
    openConfirmModal({
      title: "Удалить маркер?",
      message: `Вы уверены что хотите удалить маркер: "${value}" из источника: "${sourceName}"?`,
      okButtonText: "Удалить",
      onOk: () => deleteMarker(id),
    });
  }

  function pickHandler(id: number, needToPick: boolean) {
    const indexOfIdInArray = pickedMarkerIds?.indexOf(id);
    const alreadyPicked = indexOfIdInArray >= 0;

    if (needToPick && !alreadyPicked) {
      onChangePickedMarkerIds?.([...pickedMarkerIds, id]);
    }

    if (!needToPick && alreadyPicked) {
      const newPickedMarkerIds = pickedMarkerIds!.filter(
        (pickedId) => pickedId !== id,
      );
      onChangePickedMarkerIds?.(newPickedMarkerIds);
    }
  }

  async function addMarkerHandler() {
    if (!sourceId) return;

    const newMarkerData: Omit<Marker, "id" | "rating"> = {
      sourceId,
      psyFunction: pickerState.psyFunction,
      psyLevel: pickerState.psyLevel,
      value: "",
      info: "",
    };

    createMarker(newMarkerData);
  }

  return (
    <St.Wrapper>
      <Loader isLoading={isFetching} />
      {markersList.map((marker) => {
        const { id, value = "" } = marker;

        const isPicked = pickedMarkerIds?.includes(id);

        return (
          <MarkerBar
            key={id}
            marker={marker}
            onPick={(picked) => pickHandler(id, picked)}
            openDescriptionModal={openDescriptionModal}
            onDelete={() => deleteHandler(id, value ?? "")}
            allowEdit={allowEdit ?? false}
            sourceName={sourceName ?? ""}
            picked={isPicked}
          />
        );
      })}
      {allowEdit && <MarkerAdder onClick={addMarkerHandler} />}
    </St.Wrapper>
  );
}
