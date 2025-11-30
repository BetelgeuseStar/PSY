import { useCustomModal } from "../useCustomModal.tsx";
import { AddSourceModal } from "./AddSourceModal.tsx";

export type AddSourceModalProps = {
  message: string;
  title?: string;
  okButtonText?: string;
  onPickSource: (sourceId: number) => void;
};

export function useAddSourceModal() {
  const { ModalComponent, modal } =
    useCustomModal<AddSourceModalProps>(AddSourceModal);

  return {
    ModalComponent,
    modal,
  };
}
