import * as St from "./styled.ts";
import type { PsyType } from "../../shared/types";
import { MarkerAdder, MarkerBar } from "./components";
import type { OpenModalFunc } from "../Modal/useCustomModal.tsx";
import type { ConfirmModalProps, MarkerModalProps } from "../Modal";
import {
  useCreateMutationMarker,
  useDeleteMutationMarker,
  useMarkersList,
} from "../../shared/api";
import type { Marker } from "../../shared/api/marker/types.ts";
import { Loader } from "../../shared/ui";

//TODO: В запросе сортировать по рейтингу и по выбранным, но не на клиенте, что бы маркеры не выпрыгивали из под мышки

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
  const { data: markersList, isFetching } = useMarkersList(sourceId);

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

  const filteredAndSortedMarkerList = markersList
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
      return b.rating - a.rating;
    });

  return (
    <St.Wrapper>
      <Loader isLoading={isFetching} />
      {filteredAndSortedMarkerList.map((marker) => {
        const { id, value = "", rating, ...restMarker } = marker;

        const isPicked = pickedMarkerIds?.includes(id);

        function openDescriptionHandler() {
          openDescriptionModal({
            ...restMarker,
            value,
            rating,
            sourceName,
          });
        }

        return (
          <MarkerBar
            key={id}
            marker={marker}
            onPick={(picked) => pickHandler(id, picked)}
            onOpenDescription={openDescriptionHandler}
            onDelete={() => deleteHandler(id, value ?? "")}
            allowEdit={allowEdit ?? false}
            sourceName={sourceName}
            picked={isPicked}
          />
        );
      })}
      {allowEdit && <MarkerAdder onClick={addMarkerHandler} />}
    </St.Wrapper>
  );
}
