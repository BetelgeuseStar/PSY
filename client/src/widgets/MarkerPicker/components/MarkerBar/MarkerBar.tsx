import * as St from "./styled";
import { EditableText, IconButton } from "../../../../shared/ui";
import type { MarkerBarProps } from "../../../../shared/types";
import { DeleteIcon, WorksheetIcon } from "../../../../shared/icons";
import { Rating } from "../../../../entities/Rating";
import { projectColors } from "../../../../shared/utils";
import { useUpdateMutationMarker } from "../../../../shared/api";
import { useState } from "react";
import type { Marker } from "../../../../shared/api/marker/types.ts";

export function MarkerBar({
  marker,
  picked,
  onPick,
  allowEdit,
  onOpenDescription,
  onDelete,
}: MarkerBarProps) {
  const [localMarker, setLocalMarker] = useState(marker);

  const { debouncedMutate: debouncedUpdateMarker } = useUpdateMutationMarker(
    localMarker.sourceId,
  );

  function setMarkerParamClosure<P extends keyof Marker>(
    param: P,
  ): (value: Marker[P]) => void {
    return (value) => {
      setLocalMarker((prev) => {
        const newMarkerData: Marker = {
          ...prev,
          [param]: value,
        };

        debouncedUpdateMarker(newMarkerData);

        return newMarkerData;
      });
    };
  }

  return (
    <St.Wrapper>
      <St.ActiveZone $disabled={allowEdit} onClick={() => onPick(!picked)}>
        <St.CheckboxWrapper style={{ display: allowEdit ? "none" : "flex" }}>
          <St.Checkbox>
            <St.CheckIcon style={{ display: picked ? "block" : "none" }} />
          </St.Checkbox>
        </St.CheckboxWrapper>
        <St.TextWrapper>
          {allowEdit ? (
            <EditableText
              placeholder="Введите заголовок маркера"
              editorValue={localMarker.value ?? ""}
              onValueChange={setMarkerParamClosure("value")}
              style={{
                fontSize: 20,
              }}
            />
          ) : (
            <St.ReadonlyText
              style={{
                color:
                  !allowEdit && picked
                    ? projectColors.green
                    : projectColors.white,
              }}
            >
              {localMarker.value}
            </St.ReadonlyText>
          )}
        </St.TextWrapper>
      </St.ActiveZone>
      <IconButton
        style={{ paddingBottom: 2 }}
        icon={<WorksheetIcon />}
        onClick={onOpenDescription}
      />
      {allowEdit && <IconButton icon={<DeleteIcon />} onClick={onDelete} />}
      <St.RatingWrapper>
        <Rating
          rating={localMarker.rating}
          onChange={setMarkerParamClosure("rating")}
          readonly={!allowEdit}
        />
      </St.RatingWrapper>
    </St.Wrapper>
  );
}
