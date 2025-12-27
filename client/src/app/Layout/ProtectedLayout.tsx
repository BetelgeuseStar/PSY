import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../AuthProvider";
import { Layout as UILayout } from "../../shared/ui/Layout";

export const ProtectedLayout = () => {
  const { user } = useAuthContext();

  console.log("Check user in protectedLayout", user);

  if (user) {
    return (
      <UILayout>
        <Outlet />
      </UILayout>
    );
  } else {
    return <Navigate to="/auth" />;
  }
};
