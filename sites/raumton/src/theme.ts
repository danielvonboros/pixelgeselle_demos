import { createSiteTheme } from "@pixelgeselle/core";

export const colors = {
  background: "#f3f1ec",
  surface: "#ffffff",
  text: "#151515",
  muted: "#5a5852",
  line: "#d6d3cb",
  subtle: "#b9b5ab",
};

const font = '"Inter Tight Variable", system-ui, sans-serif';

export const theme = createSiteTheme({
  colors: { ...colors, accent: colors.text, onAccent: colors.background },
  fonts: { display: font, body: font },
  radius: 0,
});
