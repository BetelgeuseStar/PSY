import type { PropsWithChildren } from "react";
import { forwardRef } from "react";
import * as St from "./styled.ts";
import type { InputProps } from "antd";

export const Input = forwardRef(InputInner);

function InputInner(props: PropsWithChildren<InputProps>, ref) {
  const { children, ...antProps } = props;

  return (
    <St.Input {...antProps} ref={ref}>
      {children}
    </St.Input>
  );
}
