import { Box, type SxProps, type Theme } from "@mui/material";
import type { ElementType, ReactNode } from "react";

interface PageContainerProps {
  component?: ElementType;
  id?: string;
  sx?: SxProps<Theme>;
  children: ReactNode;
}

const PageContainer = ({ component = "div", id, sx, children }: PageContainerProps) => (
  <Box
    component={component}
    id={id}
    sx={[{ maxWidth: 1280, mx: "auto", px: "clamp(20px, 4vw, 48px)" }, ...(Array.isArray(sx) ? sx : [sx])]}
  >
    {children}
  </Box>
);

export default PageContainer;
