import { Box, Link } from "@mui/material";
import { PageContainer, useDemo } from "@pixelgeselle/core";
import Logo from "../components/logo/Logo";
import Pill from "../components/pill/Pill";
import { site } from "../content/site";
import { colors } from "../theme";

const Header = () => {
  const { openDialog } = useDemo();

  return (
    <Box component="header" sx={{ bgcolor: colors.dark, color: colors.background }}>
      <PageContainer
        sx={{ py: 3, display: "flex", flexWrap: "wrap", gap: "16px 32px", alignItems: "center", justifyContent: "space-between" }}
      >
        <Logo />
        <Box
          component="nav"
          aria-label={site.navLabel}
          sx={{ order: { xs: 3, md: 0 }, width: { xs: "100%", md: "auto" }, display: "flex", flexWrap: "wrap", gap: { xs: "4px 20px", md: 3 } }}
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              underline="none"
              sx={{ color: colors.background, fontSize: 15, py: 1, "&:hover": { color: colors.warm } }}
            >
              {item.label}
            </Link>
          ))}
        </Box>
        <Pill dark onClick={openDialog}>
          <Box component="span" aria-hidden="true" sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: colors.warm }} />
          {site.emergency}
        </Pill>
      </PageContainer>
    </Box>
  );
};

export default Header;
