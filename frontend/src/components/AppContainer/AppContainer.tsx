import React, { ReactNode } from "react";
import { Box, Container } from "@mui/material";

interface AppContainerProps {
  children?: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  disableGutters?: boolean;
}

export default function AppContainer({
  children,
  maxWidth = "lg",
  disableGutters = false,
}: AppContainerProps) {
  return (
    <Container
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        // backgroundColor: "green",
        // Responsive gutter paddings mimicking modern web layouts
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 3, sm: 4, md: 5 },
      }}
    >
      {children}
    </Container>
  );
}
