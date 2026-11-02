import { Box, Typography } from "@mui/material";
import { PageContainer, Photo } from "@pixelgeselle/core";
import Pill from "../components/pill/Pill";
import { serviceHref, services } from "../content/services";
import { hero } from "../content/site";
import { photo } from "../photos";
import { colors } from "../theme";

const Hero = () => (
  <Box component="section" id="top" aria-labelledby="hero-titel" sx={{ bgcolor: colors.dark, color: colors.background }}>
    <PageContainer
      sx={{ pt: "clamp(40px, 8vw, 120px)", pb: { xs: 8, md: 9 }, display: "flex", flexWrap: "wrap", gap: 6, alignItems: "flex-end" }}
    >
      <Box sx={{ flex: "3 1 560px", minWidth: 0, display: "flex", flexDirection: "column", gap: 4 }}>
        <Photo source={photo("electrician")} alt={hero.workAlt} ratio="4 / 3" tone={colors.darkRaised} sizes="220px" sx={{ width: 220 }} />
        <Typography
          component="h1"
          id="hero-titel"
          sx={{ fontWeight: 300, fontSize: "clamp(40px, 5.6vw, 76px)", lineHeight: 1.06, letterSpacing: "-0.02em" }}
        >
          {hero.title}
        </Typography>
        <Box component="ul" aria-label={hero.servicesLabel} sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexWrap: "wrap", gap: 1.25 }}>
          {services.items.map((service) => (
            <li key={service.slug}>
              <Pill dark href={serviceHref(service.slug)}>
                {service.title}
              </Pill>
            </li>
          ))}
        </Box>
      </Box>
      <Photo
        source={photo("evening")}
        alt={hero.roomAlt}
        ratio="3 / 4"
        tone={colors.darkRaised}
        priority
        sizes="(min-width: 1280px) 470px, (min-width: 900px) 40vw, 100vw"
        sx={{ flex: "2 1 320px", minWidth: 0 }}
      />
    </PageContainer>
  </Box>
);

export default Hero;
