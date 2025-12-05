import * as St from "./styled";
import { EditableText, IconButton } from "../../../../shared/ui";
import type { MarkerBarProps } from "../../../../shared/types";
import { DeleteIcon, WorksheetIcon } from "../../../../shared/icons";
import { Rating } from "../../../../entities/Rating";
import { projectColors } from "../../../../shared/utils";

export function MarkerBar({
  value,
  picked,
  onPick,
  allowEdit,
  rating,
  onChangeRating,
  onChangeValue,
  onOpenDescription,
  onDelete,
}: MarkerBarProps) {
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
            <St.ReadonlyText
              style={{
                color:
                  !allowEdit && picked
                    ? projectColors.green
                    : projectColors.white,
              }}
            >
              {value}
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
          rating={rating}
          onChange={onChangeRating}
          readonly={!allowEdit}
        />
      </St.RatingWrapper>
    </St.Wrapper>
  );
}
