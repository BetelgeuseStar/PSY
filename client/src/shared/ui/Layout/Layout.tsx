import type { PropsWithChildren } from "react";

import * as St from "./styled.ts";
import { Header } from "../../../widgets/Header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <St.Layout>
      <Header />
      <St.Layout>
        <St.Sider collapsed={true} collapsedWidth={0}>
          Side Bar
        </St.Sider>
        <St.Content>{children}</St.Content>
      </St.Layout>
    </St.Layout>
  );
}
