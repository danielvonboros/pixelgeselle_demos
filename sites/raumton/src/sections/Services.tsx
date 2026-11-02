import { Box, Button, Typography } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import { services } from "../content/services";

const Services = () => (
  <PageContainer
    component="section"
    id="leistungen"
    sx={{ py: { xs: 8, md: 12 }, borderTop: 1, borderColor: "divider", display: "flex", flexWrap: "wrap", gap: 5 }}
  >
    <Box sx={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: 1.5, alignItems: "flex-start" }}>
      <Typography component="h2" sx={{ fontSize: 15, fontWeight: 600 }}>
        {services.title}
      </Typography>
      <Typography sx={{ fontSize: 14, lineHeight: 1.55, color: "text.secondary", maxWidth: 300 }}>{services.text}</Typography>
      <Button href={services.cta.href} variant="contained" sx={{ mt: 2, gap: 1.25 }}>
        {services.cta.label} <span aria-hidden="true">→</span>
      </Button>
    </Box>
    <Box component="ol" sx={{ flex: "3 1 560px", minWidth: 0, listStyle: "none", m: 0, p: 0, borderTop: 1, borderColor: "divider" }}>
      {services.items.map((item) => (
        <Box
          component="li"
          key={item.number}
          sx={{ display: "flex", flexWrap: "wrap", gap: "8px 32px", py: 2.5, borderBottom: 1, borderColor: "divider", fontSize: 15 }}
        >
          <Box component="span" aria-hidden="true" sx={{ width: 48, color: "text.secondary", fontVariantNumeric: "tabular-nums" }}>
            ({item.number})
          </Box>
          <Box component="span" sx={{ flex: "1 1 200px", fontWeight: 500 }}>
            {item.title}
          </Box>
          <Box component="span" sx={{ flex: "2 1 280px", color: "text.secondary" }}>
            {item.text}
          </Box>
        </Box>
      ))}
    </Box>
  </PageContainer>
);

export default Services;
