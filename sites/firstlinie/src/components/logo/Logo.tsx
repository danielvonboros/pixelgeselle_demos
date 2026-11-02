import { Box } from "@mui/material";
import { site } from "../../content/site";
import { colors, fonts } from "../../theme";

const Logo = () => (
  <Box
    component="a"
    href="#top"
    aria-label={site.homeLabel}
    sx={{ display: "flex", alignItems: "center", gap: 1.25, color: "text.primary", textDecoration: "none", fontFamily: fonts.sans, fontSize: 18, letterSpacing: "0.02em" }}
  >
    <svg width="28" height="18" viewBox="0 0 28 18" aria-hidden="true">
      <path d="M1 17 L14 2 L27 17" fill="none" stroke={colors.accent} strokeWidth="2" />
    </svg>
    <span>
      {site.logo.first}
      <Box component="span" sx={{ fontWeight: 500 }}>
        {site.logo.second}
      </Box>
    </span>
  </Box>
);

export default Logo;
