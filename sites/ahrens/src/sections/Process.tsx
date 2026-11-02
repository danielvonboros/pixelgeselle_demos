import { Box, Typography } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import { process } from "../content/process";
import { colors, fonts } from "../theme";

const Process = () => (
  <Box component="section" id="ablauf" aria-label={process.label} sx={{ bgcolor: colors.surface }}>
    <PageContainer
      component="ol"
      sx={{ listStyle: "none", my: 0, py: { xs: 9, md: 14 }, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 5 }}
    >
      {process.steps.map((step) => (
        <Box component="li" key={step.number} sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Box component="span" aria-hidden="true" sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: 40, lineHeight: 1 }}>
            {step.number}
          </Box>
          <Typography component="h3" sx={{ fontSize: 18, fontWeight: 500 }}>
            {step.title}
          </Typography>
          <Typography sx={{ fontSize: 15, lineHeight: 1.6, color: colors.muted }}>{step.text}</Typography>
        </Box>
      ))}
    </PageContainer>
  </Box>
);

export default Process;
