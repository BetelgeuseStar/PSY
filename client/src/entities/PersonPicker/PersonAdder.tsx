import * as St from "./styled.ts";
import { forwardRef } from "react";

export const PersonAdder = forwardRef(PersonAdderInner);

function PersonAdderInner(props, ref) {
  return (
    <St.AddWrapper ref={ref}>
      <St.Icon />
      <St.AddText>Добавить персону</St.AddText>
    </St.AddWrapper>
  );
}
