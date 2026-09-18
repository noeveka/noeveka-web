import { Link } from "react-router";

import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import { routesRegistry } from "@/routes/routes-config";

export default function NotFoundPage() {
  return (
    <div className="duration-default bg-page flex min-h-screen w-full flex-col items-center justify-center px-6 text-center transition-colors">
      <div className="border-danger/10 bg-danger/5 text-danger mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border shadow-sm">
        <LucideIcon name={lucideIconRegistry.Close} size={32} />
      </div>
      <h1 className="text-foreground text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
        404 - Page Not Found
      </h1>
      <p className="text-md text-text-secondary mt-4 max-w-md leading-relaxed">
        The page you are looking for doesn't exist or has been moved. Check the
        URL or return to home.
      </p>
      <div className="mt-8">
        <Link
          to={routesRegistry.landing}
          className="btn btn-primary flex h-10 items-center gap-2 px-6 font-semibold"
        >
          <span>Go to Home</span>
          <LucideIcon name={lucideIconRegistry.ArrowRight} size={16} />
        </Link>
      </div>
    </div>
  );
}
