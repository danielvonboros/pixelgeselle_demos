import { Box, Typography } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import { values } from "../content/services";

const Values = () => (
  <PageContainer
    component="section"
    aria-label="Arbeitsweise"
    sx={{ py: { xs: 9, md: 14 }, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 5 }}
  >
    {values.map((value) => (
      <Box key={value.title} sx={{ display: "flex", flexDirection: "column", gap: 1.5, borderTop: 1, borderColor: "divider", pt: 2.5 }}>
        <Typography component="h3" sx={{ fontSize: 20, fontWeight: 500 }}>
          {value.title}
        </Typography>
        <Typography sx={{ fontSize: 15, lineHeight: 1.6, color: "text.secondary" }}>{value.text}</Typography>
      </Box>
    ))}
  </PageContainer>
);

export default Values;
