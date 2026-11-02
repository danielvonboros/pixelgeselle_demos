import { Box, Link, Typography } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import { serviceHref, services } from "../content/services";

const Services = () => (
  <PageContainer component="section" id="leistungen" aria-labelledby="leistungen-titel" sx={{ py: { xs: 9, md: 14 } }}>
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
      <Box sx={{ flex: "1 1 240px", fontSize: 14, lineHeight: 1.6, color: "text.secondary" }}>
        <Typography component="h2" id="leistungen-titel" sx={{ mb: 1, fontSize: 14, color: "text.primary", fontWeight: 600 }}>
          {services.label}
        </Typography>
        <Typography sx={{ fontSize: 14, lineHeight: 1.6 }}>{services.intro}</Typography>
      </Box>
      <Typography sx={{ flex: "3 1 560px", minWidth: 0, fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.4 }}>
        {services.statement}
      </Typography>
    </Box>
    <Box
      component="ul"
      sx={{ listStyle: "none", m: 0, mt: { xs: 7, md: 10 }, p: 0, display: "grid", gap: "0 40px", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}
    >
      {services.items.map((item) => (
        <Box
          component="li"
          key={item.slug}
          sx={{ display: "flex", flexWrap: "wrap", gap: "4px 24px", py: 2.5, borderTop: 1, borderColor: "divider" }}
        >
          <Link
            href={serviceHref(item.slug)}
            underline="hover"
            sx={{ flex: "0 0 180px", fontSize: 17, fontWeight: 600, color: "text.primary", "&:hover": { color: "text.secondary" } }}
          >
            {item.title} <span aria-hidden="true">→</span>
          </Link>
          <Box component="span" sx={{ flex: "1 1 220px", fontSize: 15, lineHeight: 1.6, color: "text.secondary" }}>
            {item.text}
          </Box>
        </Box>
      ))}
    </Box>
  </PageContainer>
);

export default Services;
