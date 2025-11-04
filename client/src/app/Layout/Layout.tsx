import type { PropsWithChildren } from "react";

import * as Styled from "./styled.ts";
import { Header } from "../../widgets/Header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <Styled.Layout>
      <Header />
      <Styled.Layout>
        <Styled.Sider collapsed={true} collapsedWidth={0}>
          Side Bar
        </Styled.Sider>
        <Styled.Content>{children}</Styled.Content>
      </Styled.Layout>
    </Styled.Layout>
  );
}
