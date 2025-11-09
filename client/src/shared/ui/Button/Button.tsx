import type { PropsWithChildren } from "react";
import { forwardRef } from "react";
import * as St from "./styled.ts";
import type { ButtonProps } from "antd";

export const Button = forwardRef(ButtonInner);

function ButtonInner(props: PropsWithChildren<ButtonProps>, ref) {
  const { children, ...antProps } = props;

  return (
    <St.Button {...antProps} ref={ref}>
      {children}
    </St.Button>
  );
}
