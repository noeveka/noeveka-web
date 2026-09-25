// import * as React from "react";
import { Route, Routes } from "react-router";

// import logoUrl from "@/assets/logo/exaannum-logo-fullcolor.svg";
import MainLayout from "@/layouts/main-layout";
import { NotFoundPage } from "@/pages/errors";
import LandingPage from "@/pages/landing/page";
import AboutPage from "@/pages/about/page";
import ServicesPage from "@/pages/services/page";
import ResourcesPage from "@/pages/resources/page";
import ContactPage from "@/pages/contact/page";

// import { ProtectedRoute } from "./protected-route";
// import { PublicOnlyRoute } from "./public-only-route";
import { routesRegistry } from "./routes-config";

export function AppRouter() {
  return (
    <Routes>
      {/* Public pages wrapped in MainLayout (Navbar + Footer) */}
      <Route element={<MainLayout />}>
        <Route path={routesRegistry.landing} element={<LandingPage />} />
        <Route path={routesRegistry.about} element={<AboutPage />} />
        <Route path={routesRegistry.services} element={<ServicesPage />} />
        <Route path={routesRegistry.resources} element={<ResourcesPage />} />
        <Route path={routesRegistry.contact} element={<ContactPage />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
