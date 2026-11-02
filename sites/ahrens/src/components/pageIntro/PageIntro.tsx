import { Box, Typography } from "@mui/material";
import { Breadcrumbs, PageContainer, Photo, type Crumb } from "@pixelgeselle/core";
import { photo } from "../../photos";
import { colors } from "../../theme";

interface PageIntroProps {
  crumbs: Crumb[];
  kicker: string;
  title: string;
  lead: string;
  image?: string;
  alt?: string;
}

const PageIntro = ({ crumbs, kicker, title, lead, image, alt = "" }: PageIntroProps) => (
  <PageContainer component="section" id="top" aria-labelledby="seite-titel" sx={{ pt: "clamp(24px, 5vw, 64px)", pb: { xs: 6, md: 10 } }}>
    <Breadcrumbs items={crumbs} sx={{ mb: { xs: 5, md: 8 }, fontSize: 12, color: colors.muted }} />
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "24px 48px", alignItems: "flex-end" }}>
      <Box sx={{ flex: "3 1 520px", minWidth: 0, display: "flex", flexDirection: "column", gap: 2.5 }}>
        <Typography sx={{ fontSize: 12, letterSpacing: "0.2em", color: colors.muted }}>{kicker}</Typography>
        <Typography
          component="h1"
          id="seite-titel"
          sx={{ fontWeight: 300, fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.06, letterSpacing: "-0.02em" }}
        >
          {title}
        </Typography>
      </Box>
      <Typography sx={{ flex: "2 1 300px", fontSize: 16, lineHeight: 1.65, color: colors.muted }}>{lead}</Typography>
    </Box>
    {image && (
      <Photo
        source={photo(image)}
        alt={alt}
        ratio="21 / 9"
        tone={colors.surface}
        priority
        sizes="(min-width: 1280px) 1184px, 100vw"
        sx={{ mt: { xs: 6, md: 9 } }}
      />
    )}
  </PageContainer>
);

export default PageIntro;
