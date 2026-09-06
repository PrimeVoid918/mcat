import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/RootNavigation";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme/theme";
import { AppNavigationProvider } from "./navigation/AppNavigation/AppNavigationContext";
import { AppNavigation } from "./navigation/AppNavigation/AppNavigation";

const appNavigation = new AppNavigation();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigationProvider navigation={appNavigation}>
        <CssBaseline />
        <RouterProvider router={router} />
      </AppNavigationProvider>
    </ThemeProvider>
  );
}
