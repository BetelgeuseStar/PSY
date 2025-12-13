import * as St from "./styled";
import type { HTMLProps } from "react";
import { forwardRef } from "react";

export const MarkerAdder = forwardRef(MarkerAdderInner);

export function MarkerAdderInner(props: HTMLProps<HTMLDivElement>, ref) {
  return (
    <St.Wrapper {...props} ref={ref}>
      <St.Text>Добавить маркер</St.Text>
    </St.Wrapper>
  );
}
