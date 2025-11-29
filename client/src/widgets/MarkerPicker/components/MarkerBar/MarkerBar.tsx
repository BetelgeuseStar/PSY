import * as St from "./styled";
import { EditableText, IconButton, Text } from "../../../../shared/ui";
import type { MarkerBarProps } from "../../../../shared/types";
import { DeleteIcon, WorksheetIcon } from "../../../../shared/icons";
import { Rating } from "../../../../entities/Rating";

export function MarkerBar({
  value,
  picked,
  onPick,
  allowEdit,
  rating,
  onChangeRating,
  onChangeValue,
  psyFunction,
  psyLevel,
  openModal,
  extraInfo,
  sourceName,
}: MarkerBarProps) {
  function openDescriptionHandler() {
    openModal({
      psyFunction,
      psyLevel,
      value,
      extraInfo,
      rating,
      sourceName,
    });
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
              editorValue={value}
              onValueChange={onChangeValue}
              style={{
                fontSize: 20,
              }}
            />
          ) : (
            <Text
              style={{
                fontSize: 20,
                color: !allowEdit && picked ? "#51B13A" : "white",
              }}
            >
              {value}
            </Text>
          )}
        </St.TextWrapper>
      </St.ActiveZone>
      <IconButton
        style={{ paddingBottom: 2 }}
        icon={<WorksheetIcon />}
        onClick={openDescriptionHandler}
      />
      {allowEdit && <IconButton icon={<DeleteIcon />} />}
      <St.RatingWrapper>
        <Rating rating={rating} onChange={onChangeRating} />
      </St.RatingWrapper>
    </St.Wrapper>
  );
}
