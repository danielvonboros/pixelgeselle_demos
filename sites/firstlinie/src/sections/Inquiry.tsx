import { Box, Typography } from "@mui/material";
import { InquiryForm, PageContainer } from "@pixelgeselle/core";
import { contact } from "../content/contact";
import { colors, fonts } from "../theme";

const Inquiry = () => (
  <PageContainer
    component="section"
    id="kontakt"
    aria-labelledby="kontakt-titel"
    sx={{ py: { xs: 8, md: 12 }, borderTop: `1px solid ${colors.line}`, display: "flex", flexWrap: "wrap", gap: 6 }}
  >
    <Box sx={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: 2.5 }}>
      <Box sx={{ fontFamily: fonts.mono, fontSize: 13 }}>{contact.tag}</Box>
      <Typography component="h2" id="kontakt-titel" sx={{ fontWeight: 300, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.08 }}>
        {contact.title}
      </Typography>
      <Typography sx={{ fontSize: 16, lineHeight: 1.55, color: colors.muted, maxWidth: 420 }}>{contact.text}</Typography>
    </Box>
    <InquiryForm withPhotos messagePlaceholder={contact.messagePlaceholder} submitLabel={contact.submit} sx={{ flex: "2 1 480px", minWidth: 0 }} />
  </PageContainer>
);

export default Inquiry;
