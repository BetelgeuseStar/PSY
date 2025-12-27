import * as St from "./styled.ts";
import { Outlet } from "react-router";
import { useAuthContext } from "../AuthProvider";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

export const Layout = observer(() => {
  const { checkAuth } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth().finally(() => setIsLoading(false));
  }, []);

  return <St.Layout>{!isLoading && <Outlet />}</St.Layout>;
});
