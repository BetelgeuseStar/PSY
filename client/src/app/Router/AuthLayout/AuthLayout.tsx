import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../../AuthProvider";

export function AuthLayout() {
  const { user } = useAuthContext();

  console.log("Check user in AuthLayout", user);

  if (user) {
    return <Navigate to="/persons" />;
  } else {
    return <Outlet />;
  }
}
