import "@fontsource-variable/hanken-grotesk";
import "@fontsource-variable/syne";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DemoProvider, type DemoInfo } from "@pixelgeselle/core";
import App from "./App";
import demo from "./demo.json";
import { theme } from "./theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DemoProvider info={demo as DemoInfo}>
        <App />
      </DemoProvider>
    </ThemeProvider>
  </StrictMode>,
);
