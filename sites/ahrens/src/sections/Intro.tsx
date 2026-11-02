import { Box, Link, Typography } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import { intro } from "../content/woods";
import { colors } from "../theme";

const Intro = () => (
  <PageContainer
    component="section"
    id="werkstatt"
    aria-labelledby="werkstatt-titel"
    sx={{ pt: { xs: 6, md: 9 }, pb: { xs: 6, md: 12 }, display: "flex", flexWrap: "wrap", gap: 5, alignItems: "flex-end" }}
  >
    <Box sx={{ flex: "3 1 560px", minWidth: 0, display: "flex", flexDirection: "column", gap: 2.5 }}>
      <Typography sx={{ fontSize: 12, letterSpacing: "0.2em", color: colors.muted }}>{intro.kicker}</Typography>
      <Typography
        component="h1"
        id="werkstatt-titel"
        sx={{ fontWeight: 300, fontSize: "clamp(34px, 4.6vw, 64px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
      >
        {intro.title}
      </Typography>
    </Box>
    <Box sx={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: 2, fontSize: 15, lineHeight: 1.6, color: colors.muted }}>
      <Typography sx={{ fontSize: 15, lineHeight: 1.6 }}>{intro.text}</Typography>
      <Link href={intro.link.href} sx={{ color: colors.text, fontWeight: 500, alignSelf: "flex-start" }}>
        {intro.link.label} <span aria-hidden="true">→</span>
      </Link>
    </Box>
  </PageContainer>
);

export default Intro;
