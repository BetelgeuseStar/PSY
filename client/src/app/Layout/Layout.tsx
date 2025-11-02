import * as Styled from "./styled.ts";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <Styled.Layout>
      <Outlet />
    </Styled.Layout>
  );
}
