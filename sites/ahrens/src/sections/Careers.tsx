import { Box, Button, Typography } from "@mui/material";
import { PageContainer, Photo, useDemo } from "@pixelgeselle/core";
import { careers } from "../content/process";
import { photo } from "../photos";
import { colors } from "../theme";

const Careers = () => {
  const { openDialog } = useDemo();

  return (
    <PageContainer
      component="section"
      id="karriere"
      aria-labelledby="karriere-titel"
      sx={{ py: { xs: 9, md: 14 }, display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}
    >
      <Photo
        source={photo("workshop")}
        alt={careers.photoAlt}
        ratio="16 / 9"
        tone={colors.surface}
        sizes="(min-width: 1280px) 680px, (min-width: 900px) 55vw, 100vw"
        sx={{ flex: "3 1 480px", minWidth: 0 }}
      />
      <Box sx={{ flex: "2 1 320px", display: "flex", flexDirection: "column", gap: 2.5, alignItems: "flex-start" }}>
        <Typography sx={{ fontSize: 12, letterSpacing: "0.2em", color: colors.muted }}>{careers.kicker}</Typography>
        <Typography component="h2" id="karriere-titel" sx={{ fontWeight: 300, fontSize: "clamp(30px, 3.4vw, 44px)", lineHeight: 1.1 }}>
          {careers.title}
        </Typography>
        <Typography sx={{ fontSize: 15, lineHeight: 1.6, color: colors.muted }}>{careers.text}</Typography>
        <Box component="ul" sx={{ m: 0, pl: 2.5, fontSize: 15, lineHeight: 1.8 }}>
          {careers.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 2, mt: 1 }}>
          <Button variant="contained" onClick={openDialog}>
            {careers.cta} <Box component="span" aria-hidden="true" sx={{ ml: 1 }}>→</Box>
          </Button>
          <Typography sx={{ fontSize: 13, color: colors.muted }}>{careers.note}</Typography>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Careers;
