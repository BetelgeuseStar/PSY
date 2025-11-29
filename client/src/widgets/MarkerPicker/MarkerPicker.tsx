import * as St from "./styled.ts";
import type { MarkerInfo, PsyType } from "../../shared/types";
import { PsyFunctions } from "../../shared/types";
import { MarkerBar } from "./components";
import { useState } from "react";
import type { OpenModalFunc } from "../Modal";

//TODO: В запросе сортировать по рейтингу и по выбранным, но не на клиенте, что бы маркеры не выпрыгивали из под мышки

type Props = {
  allowEdit?: boolean;
  openModal: OpenModalFunc;
  sourceId?: number;
  pickerState: PsyType;
};
export function MarkerPicker({
  allowEdit = false,
  openModal,
  pickerState,
  sourceId,
}: Props) {
  const sourceName = "???";

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

  function handleChangeRating(id: number): (rating: number) => void {
    return (rating) => {
      setMarkersList((prev) => {
        return prev.map((marker) => {
          if (marker.id == id) {
            return { ...marker, rating };
          }
          return marker;
        });
      });
    };
  }

  function handleChangeValue(id: number): (value: string) => void {
    return (value) => {
      setMarkersList((prev) => {
        return prev.map((marker) => {
          if (marker.id == id) {
            return { ...marker, value };
          }
          return marker;
        });
      });
    };
  }

  function handleCheck(id: number): (checked: boolean) => void {
    return (checked) => {
      setMarkersList((prev) => {
        return prev.map((marker) => {
          if (marker.id == id) {
            return { ...marker, picked: checked };
          }
          return marker;
        });
      });
    };
  }

  return (
    <St.Wrapper>
      {markersList.map((marker) => {
        const { id } = marker;

        return (
          <MarkerBar
            {...marker}
            key={id}
            onChangeRating={handleChangeRating(id)}
            onPick={handleCheck(id)}
            onChangeValue={handleChangeValue(id)}
            allowEdit={allowEdit ?? false}
            openModal={openModal}
            sourceName={sourceName}
          />
        );
      })}
    </St.Wrapper>
  );
}
