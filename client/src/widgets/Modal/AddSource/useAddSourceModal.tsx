import { useCustomModal } from "../useCustomModal.tsx";
import { AddSourceModal } from "./AddSourceModal.tsx";

export type AddSourceModalProps = {
  message: string;
  onPickSource: (sourceId: number) => void;
  title?: string;
  okButtonText?: string;
  currentSourceId?: number;
  excludeSourceId?: number;
};

export function useAddSourceModal() {
  const { ModalComponent, modal } =
    useCustomModal<AddSourceModalProps>(AddSourceModal);

  return {
    ModalComponent,
    modal,
  };
}
