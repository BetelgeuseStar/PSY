import * as St from "./styled.ts";
import { forwardRef } from "react";

type EntityAdderProps = {
  text: string;
};

export const EntityAdder = forwardRef(PersonAdderInner);

function PersonAdderInner({ text }: EntityAdderProps, ref) {
  return (
    <St.AddWrapper ref={ref}>
      <St.Icon />
      <St.AddText>{text}</St.AddText>
    </St.AddWrapper>
  );
}
