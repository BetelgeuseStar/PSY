import * as St from "./styled";
import { IconButton, Text } from "../../../../shared/ui";
import type { MarkerBarProps } from "../../../../shared/types";
import {
  DeleteIcon,
  EditIcon,
  WorksheetIcon,
} from "../../../../shared/ui/icons";
import { Rating } from "../../../../entities/Rating";

export function MarkerBar({
  text,
  checked,
  onCheck,
  allowEdit,
  rating,
  onChangeRating,
}: MarkerBarProps) {
  return (
    <St.Wrapper>
      <St.ActiveZone $disabled={allowEdit} onClick={() => onCheck(!checked)}>
        <St.CheckboxWrapper style={{ display: allowEdit ? "none" : "flex" }}>
          <St.Checkbox>
            <St.CheckIcon style={{ display: checked ? "block" : "none" }} />
          </St.Checkbox>
        </St.CheckboxWrapper>
        <St.TextWrapper>
          <Text
            style={{
              fontSize: 20,
              color: !allowEdit && checked ? "#51B13A" : "white",
            }}
          >
            {text}
          </Text>
        </St.TextWrapper>
      </St.ActiveZone>
      <IconButton style={{ paddingBottom: 2 }} icon={<WorksheetIcon />} />
      {allowEdit && <IconButton icon={<EditIcon />} />}
      {allowEdit && <IconButton icon={<DeleteIcon />} />}
      <St.RatingWrapper>
        <Rating rating={rating} onChange={onChangeRating} />
      </St.RatingWrapper>
    </St.Wrapper>
  );
}
