import { Box, Typography } from "@mui/material";
import { Breadcrumbs, PageContainer, Photo } from "@pixelgeselle/core";
import Pill from "../components/pill/Pill";
import { projects } from "../content/projects";
import { serviceHref, servicePage, services, type Service } from "../content/services";
import { site } from "../content/site";
import { photo } from "../photos";
import Contact from "../sections/Contact";
import Light from "../sections/Light";
import { colors } from "../theme";

interface ServicePageProps {
  service: Service;
}

const heading = { mb: 3, fontSize: 14, fontWeight: 600 };
const row = { py: 2.25, borderTop: 1, borderColor: "divider" };

const ServicePage = ({ service }: ServicePageProps) => {
  const project = projects.items.find((item) => item.service === service.slug);
  const others = services.items.filter((item) => item.slug !== service.slug);

  return (
    <>
      <Box component="section" id="top" aria-labelledby="leistung-titel" sx={{ bgcolor: colors.dark, color: colors.background }}>
        <PageContainer sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 10 }, display: "flex", flexDirection: "column", gap: { xs: 5, md: 8 } }}>
          <Breadcrumbs
            items={[
              { label: site.breadcrumbs.home, href: site.homeHref },
              { label: site.breadcrumbs.services, href: site.breadcrumbs.servicesHref },
              { label: service.title },
            ]}
            sx={{ color: colors.darkMuted }}
          />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "flex-end" }}>
            <Box sx={{ flex: "3 1 520px", minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 3 }}>
              <Typography sx={{ fontSize: 14, color: colors.warm }}>{servicePage.kicker}</Typography>
              <Typography
                component="h1"
                id="leistung-titel"
                sx={{ fontWeight: 300, fontSize: "clamp(40px, 5.6vw, 76px)", lineHeight: 1.06, letterSpacing: "-0.02em" }}
              >
                {servicePage.title(service.title)}
              </Typography>
              <Typography sx={{ maxWidth: 620, fontSize: "clamp(17px, 1.5vw, 20px)", lineHeight: 1.6, color: colors.darkMuted }}>
                {service.lead}
              </Typography>
              <Pill dark href="#kontakt">
                <Box component="span" aria-hidden="true" sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: colors.warm }} />
                {servicePage.cta}
              </Pill>
            </Box>
            <Photo
              source={photo(service.photo)}
              alt={service.alt}
              ratio="4 / 5"
              tone={colors.darkRaised}
              priority
              sizes="(min-width: 1280px) 440px, (min-width: 900px) 36vw, 100vw"
              sx={{ flex: "2 1 300px", minWidth: 0 }}
            />
          </Box>
        </PageContainer>
      </Box>
      <PageContainer
        component="section"
        aria-label={servicePage.scopeTitle}
        sx={{ py: { xs: 9, md: 14 }, display: "grid", gap: { xs: 7, md: 10 }, gridTemplateColumns: { xs: "1fr", md: "3fr 2fr" } }}
      >
        <Box>
          <Typography component="h2" sx={heading}>
            {servicePage.scopeTitle}
          </Typography>
          <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
            {service.scope.map((item) => (
              <Box component="li" key={item} sx={{ ...row, fontSize: "clamp(18px, 1.6vw, 22px)", lineHeight: 1.4 }}>
                {item}
              </Box>
            ))}
          </Box>
        </Box>
        <Box>
          <Typography component="h2" sx={heading}>
            {servicePage.factsTitle}
          </Typography>
          <Box component="dl" sx={{ m: 0 }}>
            {service.facts.map((fact) => (
              <Box key={fact.label} sx={{ ...row, display: "flex", flexDirection: "column", gap: 0.5 }}>
                <Box component="dt" sx={{ fontSize: 13, color: "text.secondary" }}>
                  {fact.label}
                </Box>
                <Box component="dd" sx={{ m: 0, fontSize: 17, fontWeight: 500, lineHeight: 1.45 }}>
                  {fact.value}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </PageContainer>
      {service.lightPreview && <Light />}
      {project && (
        <PageContainer
          component="section"
          aria-labelledby="projekt-titel"
          sx={{ py: { xs: 9, md: 14 }, display: "flex", flexWrap: "wrap", gap: { xs: 4, md: 6 }, alignItems: "center" }}
        >
          <Photo
            source={photo(project.photo)}
            alt={project.alt}
            ratio="4 / 3"
            tone="#d8d4c8"
            sizes="(min-width: 1280px) 680px, (min-width: 900px) 55vw, 100vw"
            sx={{ flex: "3 1 480px", minWidth: 0 }}
          />
          <Box sx={{ flex: "2 1 300px", display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography component="h2" id="projekt-titel" sx={{ fontSize: 14, fontWeight: 600 }}>
              {servicePage.projectTitle}
            </Typography>
            <Typography component="h3" sx={{ fontWeight: 300, fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.15 }}>
              {project.title}
            </Typography>
            <Typography sx={{ fontSize: 16, lineHeight: 1.6, color: "text.secondary" }}>{project.text}</Typography>
          </Box>
        </PageContainer>
      )}
      <PageContainer component="nav" aria-labelledby="weitere-titel" sx={{ pt: project ? 0 : { xs: 0, md: 2 }, pb: { xs: 9, md: 14 } }}>
        <Typography component="h2" id="weitere-titel" sx={heading}>
          {servicePage.moreTitle}
        </Typography>
        <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexWrap: "wrap", gap: 1.25 }}>
          {others.map((item) => (
            <li key={item.slug}>
              <Pill href={serviceHref(item.slug)}>{item.title}</Pill>
            </li>
          ))}
        </Box>
      </PageContainer>
      <Contact messagePlaceholder={service.placeholder} />
    </>
  );
};

export default ServicePage;
