import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Layout, ProtectedLayout } from "./Layout";
import { observer } from "mobx-react-lite";
import { WorksheetsListPage } from "../../pages/worksheetsList";
import { RegistrationPage } from "../../pages/registration";
import { AuthPage } from "../../pages/auth";
import { AuthLayout } from "./AuthLayout";

export const Router = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<AuthLayout />}>
            <Route path="auth" element={<AuthPage />} />
            <Route path="registration" element={<RegistrationPage />} />
          </Route>

          <Route element={<ProtectedLayout />}>
            <Route
              index
              path="worksheetsList"
              element={<WorksheetsListPage />}
            />
          </Route>

          <Route path="/" element={<Navigate to="/worksheetsList" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
