import { ThemeProvider } from "@/components/theme-provider";
import { AppRouter } from "@/routes/";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
