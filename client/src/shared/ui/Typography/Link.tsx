import type { ForwardedRef, PropsWithChildren } from "react";
import { forwardRef } from "react";
import * as Styled from "./styled.ts";
import type { LinkProps } from "antd/es/typography/Link";

export const Link = forwardRef(LinkInner);

function LinkInner(
  props: PropsWithChildren<LinkProps>,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  const { children, ...antProps } = props;

  return (
    <Styled.Link {...antProps} ref={ref}>
      {children}
    </Styled.Link>
  );
}
