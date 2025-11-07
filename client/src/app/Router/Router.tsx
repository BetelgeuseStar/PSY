import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Layout, ProtectedLayout } from "./Layout";
import { observer } from "mobx-react-lite";
import { PersonsPage } from "../../pages/persons";
import { RegistrationPage } from "../../pages/registration";
import { AuthPage } from "../../pages/auth";
import { AuthLayout } from "./AuthLayout";
import { MarkersPage } from "../../pages/markers";

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
            <Route index path="persons" element={<PersonsPage />} />
            <Route path="markers" element={<MarkersPage />} />
          </Route>

          <Route path="/" element={<Navigate to="/persons" replace />} />
          <Route path="*" element={<Navigate to="/persons" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
