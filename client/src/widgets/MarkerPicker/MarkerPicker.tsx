import * as St from "./styled.ts";
import type { MarkerInfo } from "../../shared/types";
import { MarkerBar } from "./components";
import { useState } from "react";

//TODO: В запросе сортировать по рейтингу и по выбранным, но не на клиенте, что бы маркеры не выпрыгивали из под мышки

type Props = { allowEdit?: boolean };
export function MarkerPicker({ allowEdit = false }: Props) {
  const [markersList, setMarkersList] = useState<MarkerInfo[]>([
    {
      id: 1,
      text: "Первый маркер труляля",
      allowEdit: allowEdit ?? false,
      checked: false,
      rating: 1,
      extraInfo: "Лорем ипсум",
    },
    {
      id: 2,
      text: "Втрой маркер траляля",
      allowEdit: allowEdit ?? false,
      checked: false,
      rating: 4,
      extraInfo: "Лорем ипсум",
    },
    {
      id: 3,
      text: "Третий маркер бумчик",
      allowEdit: allowEdit ?? false,
      checked: false,
      rating: 3,
      extraInfo: "Лорем ипсум",
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

  function handleCheck(id: number): (checked: boolean) => void {
    return (checked) => {
      setMarkersList((prev) => {
        return prev.map((marker) => {
          if (marker.id == id) {
            return { ...marker, checked };
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
            onCheck={handleCheck(id)}
          />
        );
      })}
    </St.Wrapper>
  );
}
