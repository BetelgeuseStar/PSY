import type { PropsWithChildren } from "react";
import { forwardRef } from "react";
import * as St from "./styled.ts";
import type { SelectProps } from "antd";

export const Select = forwardRef(SelectInner);

function SelectInner(props: PropsWithChildren<SelectProps>, ref) {
  const { children, ...antProps } = props;

  return (
    <St.Select
      {...antProps}
      ref={ref}
      styles={{
        popup: {
          root: {
            borderRadius: "4px",
            fontSize: 18,
            fontFamily: '"Roboto", sans-serif',
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "19px",
            color: " #414141",
          },
        },
      }}
    >
      {children}
    </St.Select>
  );
}
