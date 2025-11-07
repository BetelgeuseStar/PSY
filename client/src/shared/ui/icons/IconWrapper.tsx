import type { HTMLProps } from "react";
import styled from "styled-components";

export function IconWrapper(props: HTMLProps<HTMLElement>) {
  return (
    <IconWrapperInner role="img" {...props}>
      {props.children}
    </IconWrapperInner>
  );
}

const IconWrapperInner = styled.span`
  line-height: 0;
  vertical-align: -0.125em;
`;
