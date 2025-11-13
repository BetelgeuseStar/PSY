import type { PropsWithChildren } from "react";
import { forwardRef } from "react";
import * as St from "./styled.ts";
import type { ButtonProps } from "antd";

export const IconButton = forwardRef(IconButtonInner);

function IconButtonInner(props: PropsWithChildren<ButtonProps>, ref) {
  const { children, ...antProps } = props;

  return (
    <St.IconButton {...antProps} ref={ref}>
      {children}
    </St.IconButton>
  );
}
