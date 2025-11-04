import * as Styled from "./styled.ts";
import { Outlet } from "react-router";
import { useAuthContext } from "../../AuthProvider";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

export const Layout = observer(() => {
  const { checkAuth } = useAuthContext();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  return (
    <Styled.Layout>
      <Outlet />
    </Styled.Layout>
  );
});
