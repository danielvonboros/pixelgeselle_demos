import { Box, Button, Link } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import Logo from "../components/logo/Logo";
import { site } from "../content/site";
import { colors, fonts } from "../theme";

const Header = () => (
  <PageContainer
    component="header"
    sx={{ py: 3, display: "flex", flexWrap: "wrap", gap: "16px 32px", alignItems: "center", justifyContent: "space-between", fontFamily: fonts.mono, fontSize: 13 }}
  >
    <Logo />
    <Box
      component="nav"
      aria-label={site.navLabel}
      sx={{ order: { xs: 3, md: 0 }, width: { xs: "100%", md: "auto" }, display: "flex", flexWrap: "wrap", gap: { xs: "4px 20px", md: 3 } }}
    >
      {site.nav.map((item) => (
        <Link key={item.href} href={item.href} underline="none" sx={{ color: colors.text, py: 1, "&:hover": { color: colors.accent } }}>
          {item.label}
        </Link>
      ))}
    </Box>
    <Button href={site.cta.href} variant="outlined" sx={{ fontSize: 13 }}>
      {site.cta.label}
    </Button>
  </PageContainer>
);

export default Header;
