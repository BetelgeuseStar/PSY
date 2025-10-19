import React, { ForwardedRef, forwardRef, PropsWithChildren } from "react";
import * as Styled from "./styled.ts";
import type { InputProps } from "antd";

export const Input = forwardRef(InputInner);

export function InputInner(
  props: PropsWithChildren<InputProps>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const { children, ...antProps } = props;

  return (
    <Styled.Input {...antProps} ref={ref}>
      {children}
    </Styled.Input>
  );
}
