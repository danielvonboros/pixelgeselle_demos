import { createTheme, type ThemeOptions } from "@mui/material";

export interface SiteTokens {
  colors: {
    background: string;
    surface: string;
    text: string;
    muted: string;
    line: string;
    accent: string;
    onAccent: string;
  };
  fonts: {
    display: string;
    body: string;
  };
  radius: number;
  buttonRadius?: number;
}

export const createSiteTheme = (tokens: SiteTokens, overrides: ThemeOptions = {}) =>
  createTheme(
    {
      palette: {
        mode: "light",
        primary: { main: tokens.colors.accent, contrastText: tokens.colors.onAccent },
        background: { default: tokens.colors.background, paper: tokens.colors.surface },
        text: { primary: tokens.colors.text, secondary: tokens.colors.muted },
        divider: tokens.colors.line,
      },
      shape: { borderRadius: tokens.radius },
      typography: {
        fontFamily: tokens.fonts.body,
        h1: { fontFamily: tokens.fonts.display },
        h2: { fontFamily: tokens.fonts.display },
        h3: { fontFamily: tokens.fonts.display },
        button: { textTransform: "none", fontWeight: 500, fontSize: 14 },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            html: { scrollBehavior: "smooth", "@media (prefers-reduced-motion: reduce)": { scrollBehavior: "auto" } },
            body: { WebkitFontSmoothing: "antialiased" },
            "*:focus-visible": { outline: "2px solid currentColor", outlineOffset: 3 },
            "h1, h2, h3, p": { overflowWrap: "break-word" },
          },
        },
        MuiButton: {
          defaultProps: { disableElevation: true },
          styleOverrides: {
            root: { minHeight: 44, paddingInline: 20, borderRadius: tokens.buttonRadius ?? tokens.radius },
          },
        },
        MuiButtonBase: { defaultProps: { disableRipple: true } },
      },
    },
    overrides,
  );
