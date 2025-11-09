import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Layout, ProtectedLayout } from "./Layout";
import { observer } from "mobx-react-lite";
import { RegistrationPage } from "../../pages/registration";
import { AuthPage } from "../../pages/auth";
import { AuthLayout } from "./AuthLayout";
import { MarkersPage } from "../../pages/markers";
import { PersonPage } from "../../pages/person";
import { PersonsListPage } from "../../pages/personsList/PersonsListPage.tsx";

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
            <Route index path="persons" element={<PersonsListPage />} />
            <Route path="persons/:personId" element={<PersonPage />} />
            <Route path="markers" element={<MarkersPage />} />
          </Route>

          <Route path="/" element={<Navigate to="/persons" replace />} />
          <Route path="*" element={<Navigate to="/persons" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
