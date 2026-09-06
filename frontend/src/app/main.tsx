import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";
import { theme } from "./theme/theme";
import { RouterProvider } from "react-router-dom";
// import RootNavigation from "./navigation/RootNavigation";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App></App>
    {/* <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={RootNavigation()} />
    </ThemeProvider> */}
  </React.StrictMode>,
);
