import type { CommonModalProps } from "../useCustomModal.tsx";
import { CloseIcon, ModalHeader, ModalMask, ModalTitle } from "../styled.ts";
import * as St from "./styled.ts";
import type { AddSourceModalProps } from "./useAddSourceModal.tsx";
import type { Source } from "../../../shared/api";
import { getSourceListByUserId } from "../../../shared/api";
import { useAuthContext } from "../../../app/AuthProvider";
import { useState } from "react";

export function AddSourceModal({
  isOpen,
  title = "Выберите источник",
  okButtonText = "Выбрать",
  onOk,
  onClose,
  message,
  onPickSource,
}: AddSourceModalProps & CommonModalProps) {
  const { user } = useAuthContext();

  const [pickedSourceId, setPickedSourceId] = useState<number>();

  function okHandler() {
    if (pickedSourceId) onPickSource(pickedSourceId);
    onOk?.();
  }

  const sourceList = getSourceListByUserId(user.id);
  const tempSourceList: Source[] = [
    {
      id: 1,
      title: "Первый источник",
      isPublic: false,
      info: "Инфа",
    },
    {
      id: 2,
      title: "Второй источник",
      isPublic: false,
      info: "Инфа",
    },
    {
      id: 3,
      title: "Третий источник",
      isPublic: false,
      info: "Инфа",
    },
  ];

  return (
    <ModalMask style={{ display: isOpen ? "flex" : "none" }}>
      <St.Wrapper>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseIcon onClick={onClose} />
        </ModalHeader>
        <St.Body>
          <St.Content>{message}</St.Content>
          <St.Select
            onChange={setPickedSourceId}
            options={tempSourceList.map((source) => ({
              value: source.id,
              label: source.title,
            }))}
          />
          <St.ButtonsWrapper>
            <St.AcceptButton onClick={okHandler}>
              {okButtonText}
            </St.AcceptButton>
            <St.CancelButton onClick={onClose}>Отмена</St.CancelButton>
          </St.ButtonsWrapper>
        </St.Body>
      </St.Wrapper>
    </ModalMask>
  );
}
