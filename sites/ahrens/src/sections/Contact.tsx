import { Box, Typography } from "@mui/material";
import { InquiryForm, PageContainer } from "@pixelgeselle/core";
import { contact } from "../content/process";
import { colors } from "../theme";

interface ContactProps {
  messagePlaceholder?: string;
}

const Contact = ({ messagePlaceholder = contact.messagePlaceholder }: ContactProps) => (
  <Box component="section" id="kontakt" aria-labelledby="kontakt-titel" sx={{ borderTop: `1px solid ${colors.line}` }}>
    <PageContainer sx={{ pt: { xs: 9, md: 12 }, pb: { xs: 8, md: 10 }, display: "flex", flexWrap: "wrap", gap: 6 }}>
      <Typography
        component="h2"
        id="kontakt-titel"
        sx={{ flex: "1 1 360px", fontWeight: 300, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1 }}
      >
        {contact.title}
      </Typography>
      <InquiryForm withPhotos messagePlaceholder={messagePlaceholder} sx={{ flex: "1 1 420px", minWidth: 0 }} />
    </PageContainer>
  </Box>
);

export default Contact;
