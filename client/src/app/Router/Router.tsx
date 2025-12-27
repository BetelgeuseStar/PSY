import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Layout, ProtectedLayout } from "../Layout";
import { observer } from "mobx-react-lite";
import { RegistrationPage } from "../../pages/registration";
import { AuthPage } from "../../pages/auth";
import { SourcePage } from "../../pages/source";
import { PersonPage } from "../../pages/person";
import { PersonsListPage } from "../../pages/personsList/PersonsListPage.tsx";
import { SourcesListPage } from "../../pages/sourcesList";

export const Router = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="auth" element={<AuthPage />} />
          <Route path="registration" element={<RegistrationPage />} />

          <Route element={<ProtectedLayout />}>
            <Route index path="persons" element={<PersonsListPage />} />
            <Route path="persons/:personId" element={<PersonPage />} />
            <Route path="sources" element={<SourcesListPage />} />
            <Route path="sources/:sourceId" element={<SourcePage />} />
          </Route>

          <Route path="/" element={<Navigate to="/persons" replace />} />
          <Route path="*" element={<Navigate to="/persons" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
