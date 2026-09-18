// import * as React from "react";
import { Route, Routes } from "react-router";

// import logoUrl from "@/assets/logo/exaannum-logo-fullcolor.svg";
import { NotFoundPage } from "@/pages/errors";

// import LandingPage from "@/pages/landing/page";

// import { ProtectedRoute } from "./protected-route";
// import { PublicOnlyRoute } from "./public-only-route";
// import { routesRegistry } from "./routes-config";

export function AppRouter() {
  //   const [checkingSession, setCheckingSession] = React.useState(true);

  // Check auth session on application mount
  //   React.useEffect(() => {
  //     authService.checkAuth().finally(() => {
  //       setCheckingSession(false);
  //     });
  //   }, []);

  //   if (checkingSession) {
  //     return (
  //       <div className="duration-default bg-page flex h-screen w-screen items-center justify-center transition-colors">
  //         <div className="flex flex-col items-center gap-4">
  //           {/* Spinning pulse logo */}
  //           <div className="shadow-brand/10 flex h-12 w-12 animate-pulse items-center justify-center rounded-xl shadow-lg">
  //             <img
  //               src={logoUrl}
  //               alt="Exaannum Logo"
  //               className="h-full w-full rounded-xl"
  //             />
  //           </div>
  //           <span className="text-text-muted animate-pulse text-xs font-semibold tracking-widest uppercase">
  //             Loading Exaannum
  //           </span>
  //         </div>
  //       </div>
  //     );
  //   }

  return (
    <Routes>
      {/* Public landing page */}
      {/* <Route path={routesRegistry.landing} element={<LandingPage />} /> */}

      {/* Catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
