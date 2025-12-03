import * as St from "./styled.ts";
import type { MarkerInfo, PsyType } from "../../shared/types";
import { PsyFunctions } from "../../shared/types";
import { MarkerBar } from "./components";
import { useState } from "react";
import type { OpenModalFunc } from "../Modal/useCustomModal.tsx";
import type { ConfirmModalProps, MarkerModalProps } from "../Modal";

//TODO: В запросе сортировать по рейтингу и по выбранным, но не на клиенте, что бы маркеры не выпрыгивали из под мышки

type Props = {
  allowEdit?: boolean;
  openDescriptionModal: OpenModalFunc<MarkerModalProps>;
  openConfirmModal: OpenModalFunc<ConfirmModalProps>;
  sourceId: number | null;
  sourceName?: string;
  pickerState: PsyType;
};
export function MarkerPicker({
  allowEdit = false,
  openDescriptionModal,
  openConfirmModal,
  pickerState,
  sourceId,
  sourceName,
}: Props) {
  const [markersList, setMarkersList] = useState<MarkerInfo[]>([
    {
      id: 1,
      value: "Первый маркер труляля",
      picked: false,
      rating: 1,
      extraInfo:
        "Лорем ипсум Лорем ипсум Лорем ипсум Лорем ипсум Лорем ипсум Лорем ипсум Лорем ипсум",
      psyFunction: PsyFunctions.Will,
      psyLevel: 1,
    },
    {
      id: 2,
      value: "Втрой маркер траляля",
      picked: false,
      rating: 4,
      extraInfo:
        "Лорем ипсум Лорем ипсум Лорем ипсум Лорем ипсум Лорем ипсум Лорем ипсум Лорем ипсум",
      psyFunction: PsyFunctions.Will,
      psyLevel: 1,
    },
    {
      id: 3,
      value: "Третий маркер бумчик",
      picked: false,
      rating: 3,
      extraInfo:
        "Лорем ипсум Лорем ипсум Лорем ипсум Лорем ипсум Лорем ипсум Лорем ипсум Лорем ипсум",
      psyFunction: PsyFunctions.Will,
      psyLevel: 1,
    },
  ]);

  function setMarkerParam<P extends keyof MarkerInfo>(
    id: number,
    param: P,
  ): (value: MarkerInfo[P]) => void {
    return (value) => {
      setMarkersList((prev) => {
        return prev.map((marker) => {
          if (marker.id == id) {
            return { ...marker, [param]: value };
          }
          return marker;
        });
      });
    };
  }

  function deleteHandler(id: number, value: string) {
    openConfirmModal({
      title: "Удалить маркер?",
      message: `Вы уверены что хотите удалить маркер: "${value}" из источника: "${sourceName}"?`,
      okButtonText: "Удалить",
      //TODO: функция удаления маркера
      onOk: () => void 0,
    });
  }

  return (
    <St.Wrapper>
      {markersList.map((marker) => {
        const { id, value, rating, picked, ...restMarker } = marker;

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
            onChangeRating={setMarkerParam(id, "rating")}
            onPick={setMarkerParam(id, "picked")}
            onChangeValue={setMarkerParam(id, "value")}
            onOpenDescription={openDescriptionHandler}
            onDelete={() => deleteHandler(id, value)}
            allowEdit={allowEdit ?? false}
            sourceName={sourceName}
            value={value}
            rating={rating}
            picked={picked}
          />
        );
      })}
    </St.Wrapper>
  );
}
