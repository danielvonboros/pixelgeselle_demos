import { createSiteTheme } from "@pixelgeselle/core";

export const colors = {
  background: "#f5f3ed",
  surface: "#ebe8df",
  text: "#1d2740",
  muted: "#545c6e",
  line: "#c9c6bc",
  dark: "#24252b",
  darkRaised: "#3a3b42",
  darkLine: "#6b6d78",
  darkMuted: "#c9cbd3",
  contactLine: "#3a4560",
  warm: "#ffcf8a",
};

const font = '"Manrope Variable", system-ui, sans-serif';

export const theme = createSiteTheme({
  colors: { ...colors, accent: colors.text, onAccent: colors.background },
  fonts: { display: font, body: font },
  radius: 0,
  buttonRadius: 999,
});
