import * as Styled from "./styled.ts";
import { forwardRef } from "react";

export const PersonAdder = forwardRef(PersonAdderInner);

function PersonAdderInner(props, ref) {
  return (
    <Styled.AddWrapper ref={ref}>
      <Styled.Icon />
      <Styled.AddText>Добавить персону</Styled.AddText>
    </Styled.AddWrapper>
  );
}
