import { Box, Typography } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import SectionLabel from "../components/sectionLabel/SectionLabel";
import { prices } from "../content/prices";

const Prices = () => (
  <PageContainer
    component="section"
    id="preise"
    aria-labelledby="preise-titel"
    sx={{ py: { xs: 8, md: 12 }, borderTop: 1, borderColor: "divider", display: "flex", flexWrap: "wrap", gap: 5 }}
  >
    <SectionLabel component="h2" id="preise-titel" sx={{ flex: "1 1 260px", color: "text.primary" }}>
      {prices.label}
    </SectionLabel>
    <Box sx={{ flex: "3 1 560px", minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
      <Typography sx={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.12, letterSpacing: "-0.02em", fontWeight: 300 }}>
        {prices.statement}
      </Typography>
      <Box>
        <Box component="dl" sx={{ m: 0, borderTop: 1, borderColor: "divider" }}>
          {prices.items.map((item) => (
            <Box
              key={item.label}
              sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 1, py: 2.25, borderBottom: 1, borderColor: "divider", fontSize: 15 }}
            >
              <Box component="dt">{item.label}</Box>
              <Box component="dd" sx={{ m: 0, fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>
                {item.value}
              </Box>
            </Box>
          ))}
        </Box>
        <Typography sx={{ mt: 2.5, fontSize: 14, lineHeight: 1.55, color: "text.secondary", maxWidth: 560 }}>{prices.note}</Typography>
      </Box>
    </Box>
  </PageContainer>
);

export default Prices;
