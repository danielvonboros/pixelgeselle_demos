import { Box, Typography } from "@mui/material";
import { InquiryForm, PageContainer, useDemo } from "@pixelgeselle/core";
import Pill from "../components/pill/Pill";
import { contact } from "../content/contact";
import { colors } from "../theme";

interface ContactProps {
  messagePlaceholder?: string;
}

const Contact = ({ messagePlaceholder = contact.messagePlaceholder }: ContactProps) => {
  const { openDialog } = useDemo();

  return (
    <Box component="section" id="kontakt" aria-labelledby="kontakt-titel" sx={{ bgcolor: colors.text, color: colors.background }}>
      <PageContainer sx={{ pt: { xs: 9, md: 14 }, pb: { xs: 8, md: 9 }, display: "flex", flexWrap: "wrap", gap: 6, alignItems: "flex-start" }}>
        <Box sx={{ flex: "2 1 400px", minWidth: 0, display: "flex", flexDirection: "column", gap: 4 }}>
          <Typography component="h2" id="kontakt-titel" sx={{ fontWeight: 300, fontSize: "clamp(36px, 4.6vw, 64px)", lineHeight: 1.08 }}>
            {contact.title}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 2 }}>
            <Pill dark onClick={openDialog}>
              <Box component="span" aria-hidden="true" sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: colors.warm }} />
              {contact.emergencyCta}
            </Pill>
            <Typography sx={{ fontSize: 14, color: colors.darkMuted }}>{contact.emergencyText}</Typography>
          </Box>
        </Box>
        <InquiryForm inverted withPhotos messagePlaceholder={messagePlaceholder} sx={{ flex: "2 1 400px", minWidth: 0 }} />
      </PageContainer>
    </Box>
  );
};

export default Contact;
