import { Navigate, Outlet } from "react-router";

// import { useAuthStore } from "@/features/auth/store/authStore";

import { routesRegistry } from "./routes-config";

export function PublicOnlyRoute() {
  // const isUserAuthenticated = useAuthStore(
  //   (authState) => authState.isUserAuthenticated
  // );
  const isUserAuthenticated = false;

  if (isUserAuthenticated) {
    return <Navigate to={routesRegistry.landing} replace />;
  }

  return <Outlet />;
}
