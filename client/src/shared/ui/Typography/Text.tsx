import type { CSSProperties, ForwardedRef, PropsWithChildren } from "react";
import { forwardRef } from "react";
import * as Styled from "./styled.ts";

export type TextProps = {
  type?: "secondary" | "success" | "warning" | "danger";
  style?: CSSProperties;
  ellipsis?: boolean;
  strong?: boolean;
  mark?: boolean;
  delete?: boolean;
  keyboard?: boolean;
  id?: string;
};

export const Text = forwardRef(TextInner);

function TextInner(
  props: PropsWithChildren<TextProps>,
  ref: ForwardedRef<HTMLSpanElement>,
) {
  const { children, ...antProps } = props;

  return (
    <Styled.Text {...antProps} ref={ref}>
      {children}
    </Styled.Text>
  );
}
