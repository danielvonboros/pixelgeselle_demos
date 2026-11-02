import { Box } from "@mui/material";
import { DemoLegalLinks, DemoNotice, PageContainer } from "@pixelgeselle/core";
import { contact } from "../content/process";
import { colors } from "../theme";

const Footer = () => (
  <PageContainer component="footer" sx={{ pb: 5 }}>
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
