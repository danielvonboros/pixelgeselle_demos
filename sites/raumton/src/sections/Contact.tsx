import { Box, Button, Typography } from "@mui/material";
import { InquiryForm, PageContainer, useDemo } from "@pixelgeselle/core";
import { contact } from "../content/contact";
import { colors } from "../theme";

const Contact = () => {
  const { openDialog } = useDemo();

  return (
    <Box component="section" id="kontakt" aria-labelledby="kontakt-titel" sx={{ bgcolor: colors.text, color: colors.background }}>
      <PageContainer sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 10 }, display: "flex", flexDirection: "column", gap: { xs: 5, md: 7 } }}>
        <Typography
          component="h2"
          id="kontakt-titel"
          sx={{ fontWeight: 300, fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: 900 }}
        >
          {contact.title}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          <Box sx={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: 3 }}>
            <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexDirection: "column", gap: 1, fontSize: 15, color: colors.subtle }}>
              {contact.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              <Button onClick={openDialog} sx={{ color: colors.background, border: `1px solid ${colors.subtle}` }}>
                {contact.call}
              </Button>
              <Button onClick={openDialog} sx={{ color: colors.background, border: `1px solid ${colors.subtle}` }}>
                {contact.mail}
              </Button>
            </Box>
          </Box>
          <InquiryForm inverted messagePlaceholder={contact.messagePlaceholder} sx={{ flex: "2 1 420px", minWidth: 0 }} />
        </Box>
      </PageContainer>
    </Box>
  );
};

export default Contact;
