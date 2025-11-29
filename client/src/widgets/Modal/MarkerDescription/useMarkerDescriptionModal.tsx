import type { ReactElement } from "react";
import { useState } from "react";
import { MarkerDescriptionModal } from "./MarkerDescriptionModal.tsx";
import type { MarkerInfo } from "../../../shared/types";

export type MarkerModalProps = Omit<MarkerInfo, "id" | "picked"> & {
  sourceName?: string;
};

export type OpenModalFunc = (args: MarkerModalProps) => void;

export function useMarkerDescriptionModal(): {
  ModalComponent: ReactElement;
  modal: {
    open: OpenModalFunc;
  };
} {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState<MarkerModalProps>();

  function closeHandler() {
    setIsOpen(false);
  }

  return {
    ModalComponent: (
      <MarkerDescriptionModal
        {...modalProps}
        isOpen={isOpen}
        closeHandler={closeHandler}
      />
    ),
    modal: {
      open: (openModalProps) => {
        setModalProps(openModalProps);
        setIsOpen(true);
      },
    },
  };
}
