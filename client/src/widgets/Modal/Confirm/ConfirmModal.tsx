import * as St from "./styled.ts";
import type { ConfirmModalProps } from "./types.ts";
import { CloseIcon, ModalHeader, ModalMask, ModalTitle } from "../styled.ts";

type Props = ConfirmModalProps & {
  isOpen: boolean;
  okHandler: () => void;
  closeHandler: () => void;
};

export function ConfirmModal({
  isOpen,
  title,
  message,
  okButtonText,
  cancelButtonText,
  okHandler,
  closeHandler,
}: Props) {
  return (
    <ModalMask style={{ display: isOpen ? "flex" : "none" }}>
      <St.Wrapper>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseIcon onClick={closeHandler} />
        </ModalHeader>
        <St.Body>
          <St.Content>{message}</St.Content>
          <St.ButtonsWrapper>
            <St.AcceptButton onClick={okHandler}>
              {okButtonText}
            </St.AcceptButton>
            <St.CancelButton onClick={closeHandler}>
              {cancelButtonText}
            </St.CancelButton>
          </St.ButtonsWrapper>
        </St.Body>
      </St.Wrapper>
    </ModalMask>
  );
}
