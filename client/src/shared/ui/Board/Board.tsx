import type { ForwardedRef, PropsWithChildren } from "react";
import React, { forwardRef } from "react";
import * as St from "./styled.tsx";

export const Board = forwardRef(BoardInner);

function BoardInner(
  props: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { children, ...restProps } = props;

  return (
    <St.Board ref={ref} {...restProps}>
      {children}
    </St.Board>
  );
}
