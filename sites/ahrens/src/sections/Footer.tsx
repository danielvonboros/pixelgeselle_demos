import { Box, Link } from "@mui/material";
import { DemoLegalLinks, DemoNotice, PageContainer } from "@pixelgeselle/core";
import { placeHref, places } from "../content/places";
import { contact } from "../content/process";
import { colors } from "../theme";

const Footer = () => (
  <PageContainer component="footer" sx={{ pb: 5 }}>
    <Box component="nav" aria-label={places.label} sx={{ py: 2.5, borderTop: `1px solid ${colors.line}`, display: "flex", flexWrap: "wrap", gap: "4px 16px", fontSize: 13 }}>
      <Box component="span" sx={{ color: colors.muted }}>
        {places.label}
      </Box>
      <Link href={places.home.href} underline="hover" sx={{ color: colors.text }}>
        {places.home.name}
      </Link>
      {places.items.map((place) => (
        <Link key={place.slug} href={placeHref(place.slug)} underline="hover" sx={{ color: colors.text }}>
          {place.name}
        </Link>
      ))}
    </Box>
    <Box
      sx={{ pt: 2.5, borderTop: `1px solid ${colors.line}`, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 2, fontSize: 12, color: colors.muted }}
    >
      <span>{contact.location}</span>
      <DemoLegalLinks />
      <DemoNotice />
    </Box>
  </PageContainer>
);

export default Footer;
