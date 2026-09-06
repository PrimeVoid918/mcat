import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#4f8cff",
      light: "#7aaaff",
      dark: "#2563d8",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#8b7cf6",
      light: "#aaa0ff",
      dark: "#6658d6",
      contrastText: "#ffffff",
    },

    background: {
      default: "#0b0e14",
      paper: "#121722",
    },

    text: {
      primary: "#e7e9ee",
      secondary: "#9298a5",
      disabled: "#5f6571",
    },

    divider: "#252b36",

    error: {
      main: "#ef5969",
    },

    warning: {
      main: "#d6a85c",
    },

    success: {
      main: "#55b987",
    },

    info: {
      main: "#4f8cff",
    },

    action: {
      active: "#aeb5c2",
      hover: "rgba(255, 255, 255, 0.06)",
      selected: "rgba(79, 140, 255, 0.14)",
      disabled: "rgba(255, 255, 255, 0.25)",
      disabledBackground: "rgba(255, 255, 255, 0.06)",
    },

    // frontend/src/app/theme/mui.d.ts -> location for custom palletes
    highlight: {
      main: "#c5a35a",
    },
  },

  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    h1: {
      fontWeight: 600,
    },

    h2: {
      fontWeight: 600,
    },

    h3: {
      fontWeight: 600,
    },

    h4: {
      fontWeight: 600,
    },

    h5: {
      fontWeight: 600,
    },

    h6: {
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 6,
  },
});
