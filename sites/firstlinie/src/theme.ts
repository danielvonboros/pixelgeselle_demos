import { createSiteTheme } from "@pixelgeselle/core";

export const colors = {
  background: "#ebebe8",
  surface: "#f4f4f2",
  text: "#262626",
  muted: "#5d5d58",
  line: "#c4c4bf",
  accent: "#8f4a24",
};

export const fonts = {
  sans: '"IBM Plex Sans", system-ui, sans-serif',
  mono: '"IBM Plex Mono", ui-monospace, monospace',
};

export const theme = createSiteTheme(
  {
    colors: { ...colors, accent: colors.text, onAccent: colors.background },
    fonts: { display: fonts.sans, body: fonts.sans },
    radius: 0,
  },
  {
    typography: { button: { fontFamily: fonts.mono, fontWeight: 400, fontSize: 14 } },
    components: {
      MuiButton: { styleOverrides: { outlined: { borderColor: colors.text, color: colors.text } } },
    },
  },
);
