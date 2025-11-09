import * as St from "./styled.ts";
import type { PropsWithChildren } from "react";
import { forwardRef } from "react";
import type { DropdownProps } from "antd";

export const Dropdown = forwardRef(DropdownInner);

function DropdownInner(props: PropsWithChildren<DropdownProps>, ref) {
  const { children, ...antProps } = props;

  return (
    <St.Dropdown {...antProps} ref={ref} overlayStyle={{ borderRadius: "0px" }}>
      {children}
    </St.Dropdown>
  );
}
