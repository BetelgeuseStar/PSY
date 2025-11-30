import type { ReactElement } from "react";
import { useState } from "react";

export type CommonModalProps = {
  onOk?: () => void;
  onClose?: () => void;
};

export type ModalComponent<P> = ReactElement<CommonModalProps & P>;

export type OpenModalFunc<P> = (props: CommonModalProps & P) => void;

export function useCustomModal<P>(Component: ModalComponent<P>): {
  ModalComponent: ModalComponent<P>;
  modal: {
    open: OpenModalFunc<P>;
  };
} {
  const [isOpen, setIsOpen] = useState(false);
  const [onOkFunc, setOnOkFunc] = useState(() => void 0);
  const [onCloseFunc, setOnCloseFunc] = useState(() => void 0);
  const [customProps, setCustomProps] = useState<P>();

  function okHandler() {
    onOkFunc?.();
    setIsOpen(false);
  }
  function closeHandler() {
    onCloseFunc?.();
    setIsOpen(false);
  }

  return {
    ModalComponent: (
      <Component
        {...customProps}
        isOpen={isOpen}
        onOk={okHandler}
        onClose={closeHandler}
      />
    ),
    modal: {
      open: (props) => {
        const { onOk, onClose, ...restProps } = props;

        setCustomProps(restProps);
        setOnOkFunc(() => onOk);
        setOnCloseFunc(() => onClose);
        setIsOpen(true);
      },
    },
  };
}
