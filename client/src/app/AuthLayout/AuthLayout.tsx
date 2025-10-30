import React from "react";
import * as Styled from "./styled.ts";
import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <Styled.AuthLayout>
      <Outlet />
    </Styled.AuthLayout>
  );
}
