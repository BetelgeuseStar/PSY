import { MarkerDescriptionModal } from "./MarkerDescriptionModal.tsx";
import type { MarkerInfo } from "../../../shared/types";
import type { CommonModalProps } from "../useCustomModal.tsx";
import { useCustomModal } from "../useCustomModal.tsx";

export type MarkerModalProps = Omit<MarkerInfo, "id" | "picked"> & {
  sourceName?: string;
} & CommonModalProps;

export function useMarkerDescriptionModal() {
  const { ModalComponent, modal } = useCustomModal<MarkerModalProps>(
    MarkerDescriptionModal,
  );

  return {
    ModalComponent,
    modal,
  };
}
