import { MarkerDescriptionModal } from "./MarkerDescriptionModal.tsx";
import type { CommonModalProps } from "../useCustomModal.tsx";
import { useCustomModal } from "../useCustomModal.tsx";
import type { Marker } from "../../../shared/api/marker/types.ts";

export type MarkerModalProps = Omit<Marker, "id"> & {
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
