import { Navigate, Route, Routes } from "react-router";

import MainLayout from "@/layouts/main-layout";
import { NotFoundPage } from "@/pages/errors";
import LandingPage from "@/pages/landing/page";
import AboutPage from "@/pages/about/page";
import ServicesPage from "@/pages/services/page";
import ServiceDetailPage from "@/pages/services/service-detail-page";
import ResourcesPage from "@/pages/resources/page";
import ContactPage from "@/pages/contact/page";
import PrivacyPolicyPage from "@/pages/privacy-policy/page";
import TermsPage from "@/pages/terms/page";

import { routesRegistry } from "./routes-config";

export function AppRouter() {
  return (
    <Routes>
      {/* Public pages wrapped in MainLayout (Navbar + Footer) */}
      <Route element={<MainLayout />}>
        <Route path={routesRegistry.landing} element={<LandingPage />} />
        <Route path={routesRegistry.about} element={<AboutPage />} />
        <Route path={routesRegistry.services} element={<ServicesPage />} />
        <Route path={routesRegistry.serviceDetail} element={<ServiceDetailPage />} />
        <Route path={routesRegistry.resources} element={<ResourcesPage />} />
        <Route path={routesRegistry.contact} element={<ContactPage />} />
        <Route path={routesRegistry.privacyPolicy} element={<PrivacyPolicyPage />} />
        <Route path="/privacy" element={<Navigate to={routesRegistry.privacyPolicy} replace />} />
        <Route path={routesRegistry.terms} element={<TermsPage />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
