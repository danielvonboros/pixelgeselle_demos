import { Box } from "@mui/material";
import { site } from "../../content/site";

interface LogoProps {
  color: string;
}

const Logo = ({ color }: LogoProps) => (
  <Box
    component="a"
    href="#top"
    aria-label={site.homeLabel}
    sx={{ display: "flex", alignItems: "stretch", gap: 1.25, color: "text.primary", textDecoration: "none" }}
  >
    <Box aria-hidden="true" sx={{ width: 10, bgcolor: color, transition: "background-color 0.45s ease" }} />
    <Box sx={{ display: "flex", flexDirection: "column", fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", lineHeight: 1.15 }}>
      <span>{site.logo.top}</span>
      <span>{site.logo.bottom}</span>
    </Box>
    <Box
      sx={{ alignSelf: "center", pl: 1.75, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", lineHeight: 1.3, color: "text.secondary" }}
    >
      {site.logo.trade}
      <br />
      {site.logo.city}
    </Box>
  </Box>
);

export default Logo;
