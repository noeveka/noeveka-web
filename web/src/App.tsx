import { useEffect } from "react";
import { BrowserRouter } from "react-router";

import { ThemeProvider } from "@/components/theme-provider";
import { AppRouter } from "@/routes";

function App() {
  useEffect(() => {
    const preloader = document.getElementById("noeveka-preloader");
    if (preloader) {
      const dismiss = () => {
        preloader.classList.add("loaded");
        setTimeout(() => {
          preloader.remove();
        }, 550);
      };

      // Let initial React render and fonts settle for 200ms before fading out
      const timer = setTimeout(() => {
        requestAnimationFrame(dismiss);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
