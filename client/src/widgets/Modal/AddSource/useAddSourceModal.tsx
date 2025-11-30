import { useCustomModal } from "../useCustomModal.tsx";
import { AddSourceModal } from "./AddSourceModal.tsx";

export type AddSourceModalProps = {
  title?: string;
  okButtonText?: string;
};

export function useAddSourceModal() {
  const { ModalComponent, modal } =
    useCustomModal<AddSourceModalProps>(AddSourceModal);

  return {
    ModalComponent,
    modal,
  };
}
