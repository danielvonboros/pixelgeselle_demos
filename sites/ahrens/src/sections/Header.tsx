import { Box, Link } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import { site } from "../content/site";
import { colors } from "../theme";

const Header = () => (
  <PageContainer
    component="header"
    sx={{ py: 3, display: "flex", flexWrap: "wrap", gap: "12px 32px", alignItems: "center", justifyContent: "space-between", fontSize: 13 }}
  >
    <Link href="#top" aria-label={site.homeLabel} underline="none" sx={{ color: colors.text, fontSize: 11, fontWeight: 500, letterSpacing: "0.28em", py: 1 }}>
      {site.name}
    </Link>
    <Box
      component="nav"
      aria-label={site.navLabel}
      sx={{ order: { xs: 3, md: 0 }, width: { xs: "100%", md: "auto" }, display: "flex", flexWrap: "wrap", gap: { xs: "0 20px", md: "28px" } }}
    >
      {site.nav.map((item) => (
        <Link key={item.href} href={item.href} underline="none" sx={{ color: colors.text, py: 1, "&:hover": { color: colors.muted } }}>
          {item.label}
        </Link>
      ))}
    </Box>
    <Link href={site.cta.href} underline="hover" sx={{ color: colors.text, py: 1 }}>
      {site.cta.label} <span aria-hidden="true">→</span>
    </Link>
  </PageContainer>
);

export default Header;
