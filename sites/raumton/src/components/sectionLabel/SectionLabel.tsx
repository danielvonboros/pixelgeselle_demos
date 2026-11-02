import { Typography, type SxProps, type Theme } from "@mui/material";
import type { ElementType, ReactNode } from "react";

interface SectionLabelProps {
  component?: ElementType;
  id?: string;
  sx?: SxProps<Theme>;
  children: ReactNode;
}

const SectionLabel = ({ component = "p", id, sx, children }: SectionLabelProps) => (
  <Typography
    component={component}
    id={id}
    sx={[
      { m: 0, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "text.secondary" },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    {children}
  </Typography>
);

export default SectionLabel;
