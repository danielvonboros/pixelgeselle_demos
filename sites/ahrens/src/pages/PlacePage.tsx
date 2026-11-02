import { Box, Typography } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import PageIntro from "../components/pageIntro/PageIntro";
import ProjectGrid from "../components/projectGrid/ProjectGrid";
import ServiceCards from "../components/serviceCards/ServiceCards";
import { places, type Place } from "../content/places";
import { projects } from "../content/projects";
import { site } from "../content/site";
import Contact from "../sections/Contact";
import { colors } from "../theme";

interface PlacePageProps {
  place: Place;
}

const sectionTitle = { mb: 5, fontWeight: 300, fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.1 };

const PlacePage = ({ place }: PlacePageProps) => {
  const selected = place.projects.flatMap((id) => projects.items.filter((project) => project.photo === id));

  return (
    <>
      <PageIntro
        crumbs={[{ label: site.crumbHome, href: site.homeHref }, { label: places.label }, { label: place.name }]}
        kicker={places.kicker}
        title={places.title(place.name)}
        lead={place.lead}
      />
      <PageContainer component="section" aria-label={places.label} sx={{ pb: { xs: 6, md: 10 } }}>
        <Box component="dl" sx={{ m: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 3 }}>
          {places.facts(place.drive).map((fact) => (
            <Box key={fact.label} sx={{ pt: 2, borderTop: `1px solid ${colors.text}`, display: "flex", flexDirection: "column", gap: 0.75 }}>
              <Box component="dt" sx={{ fontSize: 12, letterSpacing: "0.12em", color: colors.muted }}>
                {fact.label}
              </Box>
              <Box component="dd" sx={{ m: 0, fontSize: 20, fontWeight: 300 }}>
                {fact.value}
              </Box>
            </Box>
          ))}
        </Box>
      </PageContainer>
      <PageContainer component="section" aria-labelledby="leistungen-ort-titel" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography component="h2" id="leistungen-ort-titel" sx={sectionTitle}>
          {places.servicesTitle(place.name)}
        </Typography>
        <ServiceCards />
      </PageContainer>
      <PageContainer component="section" aria-labelledby="projekte-ort-titel" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography component="h2" id="projekte-ort-titel" sx={sectionTitle}>
          {places.projectsTitle}
        </Typography>
        <ProjectGrid items={selected} />
      </PageContainer>
      <Contact messagePlaceholder={place.placeholder} />
    </>
  );
};

export default PlacePage;
