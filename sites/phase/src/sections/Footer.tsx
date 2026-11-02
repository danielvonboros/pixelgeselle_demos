import { Box } from "@mui/material";
import { DemoLegalLinks, DemoNotice, PageContainer } from "@pixelgeselle/core";
import { colors } from "../theme";

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: colors.text, color: colors.darkMuted }}>
    <PageContainer
      sx={{ py: 3, borderTop: `1px solid ${colors.contactLine}`, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 1.5, fontSize: 12 }}
    >
      <DemoNotice />
      <DemoLegalLinks />
    </PageContainer>
  </Box>
);

export default Footer;
