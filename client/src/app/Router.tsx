import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Layout } from "./Layout";
import { AuthPage } from "../pages/auth";
import { RegistrationPage } from "../pages/registration";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/auth" replace />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
