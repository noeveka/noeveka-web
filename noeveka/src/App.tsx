import { BrowserRouter } from "react-router";

import { ThemeProvider } from "@/components/theme-provider";
import { AppRouter } from "@/routes";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
