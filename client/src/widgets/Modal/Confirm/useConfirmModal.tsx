import { useCustomModal } from "../useCustomModal.tsx";
import { ConfirmModal } from "./ConfirmModal.tsx";

export type ConfirmModalProps = {
  title: string;
  message: string;
  okButtonText?: string;
  cancelButtonText?: string;
};

export function useConfirmModal() {
  const { ModalComponent, modal } =
    useCustomModal<ConfirmModalProps>(ConfirmModal);

  return {
    ModalComponent,
    modal,
  };
}
