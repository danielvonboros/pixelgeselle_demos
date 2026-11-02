import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { colors, fonts } from "../../theme";

interface DrawingProps {
  title: string;
  caption: string;
  children: ReactNode;
}

const Drawing = ({ title, caption, children }: DrawingProps) => (
  <Box
    component="figure"
    sx={{ m: 0, aspectRatio: "4 / 3", bgcolor: colors.surface, border: `1px solid ${colors.line}`, p: 1.25, display: "flex", flexDirection: "column", gap: 0.5 }}
  >
    <svg
      viewBox="0 0 320 210"
      role="img"
      aria-label={title}
      fill="none"
      stroke={colors.text}
      strokeWidth="1.2"
      strokeLinejoin="round"
      style={{ width: "100%", flex: 1, minHeight: 0 }}
    >
      {children}
    </svg>
    <Box component="figcaption" sx={{ fontFamily: fonts.mono, fontSize: 11, color: colors.muted }}>
      {caption}
    </Box>
  </Box>
);

export default Drawing;
