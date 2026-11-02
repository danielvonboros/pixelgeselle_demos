import { Box } from "@mui/material";
import { site } from "../../content/site";

const Logo = () => (
  <Box
    component="a"
    href="#top"
    aria-label={site.homeLabel}
    sx={{ color: "inherit", textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1 }}
  >
    <Box component="span" sx={{ fontSize: 24, fontWeight: 400, letterSpacing: "0.12em" }}>
      {site.logo.name}
    </Box>
    <Box component="span" sx={{ fontSize: 10, letterSpacing: "0.32em", mt: 0.5 }}>
      {site.logo.trade}
    </Box>
  </Box>
);

export default Logo;
