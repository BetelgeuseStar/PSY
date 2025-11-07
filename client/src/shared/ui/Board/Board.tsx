import type { ForwardedRef, PropsWithChildren } from "react";
import React, { forwardRef } from "react";
import * as Styled from "./styled.tsx";

export const Board = forwardRef(BoardInner);

function BoardInner(
  props: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { children, ...restProps } = props;

  return (
    <Styled.Board ref={ref} {...restProps}>
      {children}
    </Styled.Board>
  );
}
