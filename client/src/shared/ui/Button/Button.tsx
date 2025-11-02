import type { PropsWithChildren } from "react";
import { forwardRef } from "react";
import * as Styled from "./styled.ts";
import type { ButtonProps } from "antd";

export const Button = forwardRef(ButtonInner);

export function ButtonInner(props: PropsWithChildren<ButtonProps>, ref) {
  const { children, ...antProps } = props;

  return (
    <Styled.Button {...antProps} ref={ref}>
      {children}
    </Styled.Button>
  );
}
