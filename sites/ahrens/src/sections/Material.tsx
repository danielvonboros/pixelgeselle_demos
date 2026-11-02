import { Box, Typography } from "@mui/material";
import { PageContainer, Photo } from "@pixelgeselle/core";
import { material, type Wood } from "../content/woods";
import { photo } from "../photos";
import { colors } from "../theme";

interface MaterialProps {
  wood: Wood;
}

const Material = ({ wood }: MaterialProps) => (
  <PageContainer
    component="section"
    aria-label={material.label}
    sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" }, gap: 3 }}
  >
    <Photo
      source={photo("detail")}
      alt={material.detailAlt}
      ratio="3 / 2"
      tone={colors.surface}
      sizes="(min-width: 1280px) 790px, (min-width: 900px) 66vw, 100vw"
    />
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
      <Photo
        source={photo(wood.photo)}
        alt={material.sampleAlt(wood.name)}
        tone={wood.hex}
        sizes="(min-width: 1280px) 390px, (min-width: 900px) 33vw, 100vw"
        sx={{ flex: 1, minHeight: 180, transition: "background-color 0.4s ease" }}
      />
      <Box aria-live="polite">
        <Typography sx={{ fontSize: 12, letterSpacing: "0.2em", color: colors.muted }}>{material.kicker}</Typography>
        <Typography component="h2" sx={{ mt: 0.75, fontSize: 24, fontWeight: 400 }}>
          {wood.name}
        </Typography>
        <Typography sx={{ mt: 1, fontSize: 15, lineHeight: 1.6, color: colors.muted }}>{wood.text}</Typography>
      </Box>
    </Box>
  </PageContainer>
);

export default Material;
