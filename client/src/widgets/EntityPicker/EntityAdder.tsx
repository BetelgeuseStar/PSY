import * as St from "./styled.ts";
import { forwardRef, HTMLProps } from "react";

type EntityAdderProps = HTMLProps<HTMLDivElement> & {
  text: string;
};

export const EntityAdder = forwardRef(PersonAdderInner);

function PersonAdderInner({ text, ...restProps }: EntityAdderProps, ref) {
  return (
    <St.AddWrapper ref={ref} {...restProps}>
      <St.Icon />
      <St.AddText>{text}</St.AddText>
    </St.AddWrapper>
  );
}
