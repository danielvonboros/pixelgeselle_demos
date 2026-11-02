import { Box } from "@mui/material";
import { DemoLegalLinks, DemoNotice, PageContainer } from "@pixelgeselle/core";
import { colors } from "../theme";

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: colors.text, color: colors.subtle }}>
    <PageContainer
      sx={{ py: 3, borderTop: "1px solid #333", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 1.5, fontSize: 12 }}
    >
      <DemoNotice />
      <DemoLegalLinks />
    </PageContainer>
  </Box>
);

export default Footer;
