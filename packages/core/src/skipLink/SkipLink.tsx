import { Box } from "@mui/material";
import { demoContent } from "../content/demo";

const SkipLink = () => (
  <Box
    component="a"
    href="#main"
    sx={{
      position: "absolute",
      left: 16,
      top: -64,
      zIndex: 10,
      px: 2,
      py: 1.5,
      bgcolor: "text.primary",
      color: "background.default",
      textDecoration: "none",
      "&:focus": { top: 16 },
    }}
  >
    {demoContent.skipLink}
  </Box>
);

export default SkipLink;
