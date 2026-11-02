import { createSiteTheme } from "@pixelgeselle/core";

export const colors = {
  background: "#ece6dc",
  surface: "#e3dbcf",
  text: "#2a2622",
  muted: "#625950",
  line: "#d6cbb8",
  highlight: "#f6f2ea",
};

export const fonts = {
  body: '"Hanken Grotesk Variable", system-ui, sans-serif',
  display: '"Syne Variable", system-ui, sans-serif',
};

export const theme = createSiteTheme({
  colors: { ...colors, accent: colors.text, onAccent: colors.background },
  fonts: { display: fonts.body, body: fonts.body },
  radius: 0,
  buttonRadius: 999,
});
