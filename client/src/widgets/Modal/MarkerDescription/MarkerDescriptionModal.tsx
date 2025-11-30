import * as St from "./styled.ts";
import type { MarkerModalProps } from "./useMarkerDescriptionModal.tsx";
import { CloseIcon, ModalHeader, ModalMask, ModalTitle } from "../styled.ts";
import { Rating } from "../../../entities/Rating";
import {
  getPsyFunctionColor,
  getPsyFunctionName,
  getPsyLevelName,
} from "../../../shared/utils";

export function MarkerDescriptionModal({
  isOpen,
  onClose,
  value,
  extraInfo,
  rating,
  psyFunction,
  psyLevel,
  sourceName,
}: MarkerModalProps) {
  return (
    <ModalMask style={{ display: isOpen ? "flex" : "none" }}>
      <St.Wrapper>
        <ModalHeader>
          <ModalTitle>Описание маркера</ModalTitle>
          <CloseIcon onClick={onClose} />
        </ModalHeader>
        <St.Body>
          <St.Content>
            <St.TitleWrapper>
              <St.TitleLevel>{getPsyLevelName(psyLevel)}</St.TitleLevel>
              <St.TitleFunction
                style={{ color: getPsyFunctionColor(psyFunction) }}
              >
                {getPsyFunctionName(psyFunction)}
              </St.TitleFunction>
            </St.TitleWrapper>
            <St.Value style={{ color: getPsyFunctionColor(psyFunction) }}>
              {value}
            </St.Value>
            <St.ExtraInfo>{extraInfo}</St.ExtraInfo>
          </St.Content>
          <St.Footer>
            <St.SourceName>{sourceName ?? ""}</St.SourceName>
            <St.RatingWrapper>
              <Rating rating={rating} readonly />
            </St.RatingWrapper>
          </St.Footer>
        </St.Body>
      </St.Wrapper>
    </ModalMask>
  );
}
