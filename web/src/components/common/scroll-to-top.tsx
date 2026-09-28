import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Scrolls the window to the top on every route change.
 * Place this once inside <BrowserRouter> so it runs for all navigations.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
