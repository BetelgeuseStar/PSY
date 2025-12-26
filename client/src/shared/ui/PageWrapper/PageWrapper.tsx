import styled from "styled-components";
import type { HTMLProps, PropsWithChildren } from "react";
import { forwardRef } from "react";
import { appConfig } from "../../../config";

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
  padding: calc(30px + ${appConfig.headerHeight}px) 60px 30px 60px;
`;
