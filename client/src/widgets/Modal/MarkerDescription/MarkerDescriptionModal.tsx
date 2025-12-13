import * as St from "./styled.ts";
import type { MarkerModalProps } from "./useMarkerDescriptionModal.tsx";
import { CloseIcon, ModalHeader, ModalMask, ModalTitle } from "../styled.ts";
import { Rating } from "../../../entities/Rating";
import {
  getPsyFunctionColor,
  getPsyFunctionName,
  getPsyLevelName,
} from "../../../shared/utils";
import { EditableText } from "../../../shared/ui";
import { useEffect, useState } from "react";

export function MarkerDescriptionModal({
  isOpen,
  onClose,
  value,
  info,
  rating,
  psyFunction,
  psyLevel,
  sourceName,
  allowEdit,
  onChangeInfo,
}: MarkerModalProps) {
  const [localInfo, setLocalInfo] = useState(info);

  useEffect(() => {
    setLocalInfo(info);
  }, [info]);

  function changeInfoHandler(info: string) {
    onChangeInfo?.(info);
    setLocalInfo(info);
  }

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
            <EditableText
              onValueChange={changeInfoHandler}
              editorValue={localInfo ?? ""}
              placeholder="Введите описание"
              isTextArea
              style={{ height: "162px" }}
              isReadOnly={!allowEdit}
            />
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
