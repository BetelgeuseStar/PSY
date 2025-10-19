import { Typography } from "antd";
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from "react";
import * as Styled from "./styled.ts";

const { Text: AntText } = Typography;

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

export function TextInner(
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
