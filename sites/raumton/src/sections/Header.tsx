import { Box, Button, Link } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import Logo from "../components/logo/Logo";
import { site } from "../content/site";

interface HeaderProps {
  toneHex: string;
}

const Header = ({ toneHex }: HeaderProps) => (
  <PageContainer
    component="header"
    sx={{ py: 3, display: "flex", flexWrap: "wrap", gap: "16px 32px", alignItems: "center", justifyContent: "space-between" }}
  >
    <Logo color={toneHex} />
    <Box
      component="nav"
      aria-label={site.navLabel}
      sx={{
        order: { xs: 3, md: 0 },
        width: { xs: "100%", md: "auto" },
        display: "flex",
        flexWrap: "wrap",
        gap: { xs: "4px 20px", md: "28px" },
      }}
    >
      {site.nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          underline="none"
          sx={{ color: "text.primary", fontSize: 14, py: 1, "&:hover": { color: "text.secondary" } }}
        >
          {item.label}
        </Link>
      ))}
    </Box>
    <Button href={site.cta.href} variant="contained" sx={{ display: { xs: "none", sm: "inline-flex" }, gap: 1.25 }}>
      {site.cta.label} <span aria-hidden="true">→</span>
    </Button>
  </PageContainer>
);

export default Header;
