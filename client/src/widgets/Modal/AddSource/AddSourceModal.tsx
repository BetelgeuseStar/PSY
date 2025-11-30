import type { CommonModalProps } from "../useCustomModal.tsx";
import { CloseIcon, ModalHeader, ModalMask, ModalTitle } from "../styled.ts";
import * as St from "./styled.ts";
import type { ConfirmModalProps } from "./useAddSourceModal.tsx";
import { getSourceListByUserId } from "../../../shared/api";
import { useAuthContext } from "../../../app/AuthProvider";

export function AddSourceModal({
  isOpen,
  title = "Выберите источник",
  okButtonText = "Выбрать",
  onOk,
  onClose,
}: ConfirmModalProps & CommonModalProps) {
  const { user } = useAuthContext();

  const sourceList = getSourceListByUserId(user.id);

  return (
    <ModalMask style={{ display: isOpen ? "flex" : "none" }}>
      <St.Wrapper>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseIcon onClick={onClose} />
        </ModalHeader>
        <St.Body>
          <St.Content>Здесь будет список источников на выбор</St.Content>
          <St.ButtonsWrapper>
            <St.AcceptButton onClick={onOk}>{okButtonText}</St.AcceptButton>
            <St.CancelButton onClick={onClose}>Отмена</St.CancelButton>
          </St.ButtonsWrapper>
        </St.Body>
      </St.Wrapper>
    </ModalMask>
  );
}
