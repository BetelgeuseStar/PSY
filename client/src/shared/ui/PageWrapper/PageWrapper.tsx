import styled from "styled-components";
import type { HTMLProps, PropsWithChildren } from "react";
import { forwardRef } from "react";

export const PageWrapper = forwardRef(PageWrapperInner);

function PageWrapperInner(
  props: PropsWithChildren<HTMLProps<HTMLDivElement>>,
  ref,
) {
  const { children, ...restProps } = props;

  return (
    <Wrapper {...restProps} ref={ref}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px 60px;
`;
