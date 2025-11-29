import type { ReactElement } from "react";
import { useState } from "react";
import type { ConfirmModalProps } from "./types.ts";
import { ConfirmModal } from "./ConfirmModal.tsx";

export type ConfirmProps = ConfirmModalProps & {
  onOk: () => void;
};

export type OpenConfirmFunc = (args: ConfirmProps) => void;

export function useConfirmModal(): {
  ModalComponent: ReactElement;
  modal: {
    confirm: OpenConfirmFunc;
  };
} {
  const [isOpen, setIsOpen] = useState(false);
  const [okFunc, setOkFunc] = useState(() => void 0);
  const [modalProps, setModalProps] = useState<ConfirmModalProps>();

  function okHandler() {
    okFunc();
    setIsOpen(false);
  }
  function closeHandler() {
    setIsOpen(false);
  }

  return {
    ModalComponent: (
      <ConfirmModal
        {...modalProps}
        isOpen={isOpen}
        okHandler={okHandler}
        closeHandler={closeHandler}
      />
    ),
    modal: {
      confirm: (args) => {
        const {
          title = "",
          message = "",
          cancelButtonText = "Отмена",
          okButtonText = "Да",
          onOk,
        } = args;

        setModalProps({
          title,
          message,
          okButtonText,
          cancelButtonText,
        });
        setOkFunc(() => onOk);
        setIsOpen(true);
      },
    },
  };
}
