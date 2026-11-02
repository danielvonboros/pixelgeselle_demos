import { Box, Button, Link, Typography } from "@mui/material";
import { Breadcrumbs, PageContainer, Photo } from "@pixelgeselle/core";
import type { ComponentType } from "react";
import DormerDrawing from "../components/dormerDrawing/DormerDrawing";
import EavesDrawing from "../components/eavesDrawing/EavesDrawing";
import GutterDrawing from "../components/gutterDrawing/GutterDrawing";
import ParapetDrawing from "../components/parapetDrawing/ParapetDrawing";
import SpecTable from "../components/specTable/SpecTable";
import { projects } from "../content/projects";
import { serviceHref, servicePage, services, type DrawingId, type Service } from "../content/services";
import { site } from "../content/site";
import { layerNumber } from "../lib/layerNumber";
import { photo } from "../photos";
import Inquiry from "../sections/Inquiry";
import { colors, fonts } from "../theme";

const drawingComponents: Record<DrawingId, ComponentType> = {
  eaves: EavesDrawing,
  parapet: ParapetDrawing,
  dormer: DormerDrawing,
  gutter: GutterDrawing,
};

interface ServicePageProps {
  service: Service;
}

const tag = { mb: 4, fontFamily: fonts.mono, fontSize: 13 };

const ServicePage = ({ service }: ServicePageProps) => {
  const DrawingComponent = drawingComponents[service.drawing];
  const project = projects.items.find((item) => item.service === service.slug);
  const others = services.items.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageContainer component="section" id="top" aria-labelledby="leistung-titel" sx={{ pt: "clamp(24px, 4vw, 48px)", pb: { xs: 8, md: 12 } }}>
        <Breadcrumbs
          items={[
            { label: site.breadcrumbs.home, href: site.homeHref },
            { label: site.breadcrumbs.services, href: site.breadcrumbs.servicesHref },
            { label: service.title },
          ]}
          sx={{ mb: { xs: 5, md: 8 }, fontFamily: fonts.mono, fontSize: 12, color: colors.muted }}
        />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "flex-start" }}>
          <Box sx={{ flex: "2 1 360px", minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 3 }}>
            <Box sx={{ fontFamily: fonts.mono, fontSize: 13 }}>{servicePage.tag(service.number)}</Box>
            <Typography
              component="h1"
              id="leistung-titel"
              sx={{ fontWeight: 300, fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.02, letterSpacing: "-0.03em", hyphens: "auto" }}
            >
              {service.title}
            </Typography>
            <Typography sx={{ maxWidth: 520, fontSize: 18, lineHeight: 1.55, color: colors.muted }}>{service.lead}</Typography>
            <Button href="#kontakt" variant="contained" sx={{ minHeight: 48 }}>
              {servicePage.cta}
            </Button>
          </Box>
          <Box sx={{ flex: "3 1 480px", minWidth: 0 }}>
            <DrawingComponent />
          </Box>
        </Box>
      </PageContainer>
      <PageContainer
        component="section"
        aria-labelledby="umfang-titel"
        sx={{ py: { xs: 8, md: 12 }, borderTop: `1px solid ${colors.line}`, display: "grid", gap: 6, gridTemplateColumns: { xs: "1fr", md: "3fr 2fr" } }}
      >
        <Box>
          <Typography component="h2" id="umfang-titel" sx={tag}>
            {servicePage.scopeTitle}
          </Typography>
          <Box component="ol" sx={{ listStyle: "none", m: 0, p: 0 }}>
            {service.scope.map((item, index) => (
              <Box component="li" key={item} sx={{ display: "flex", gap: 3, py: 2, borderTop: `1px solid ${colors.text}`, fontSize: 18, lineHeight: 1.4 }}>
                <Box component="span" aria-hidden="true" sx={{ minWidth: 24, pt: 0.5, fontFamily: fonts.mono, fontSize: 12, color: colors.muted }}>
                  {layerNumber(index)}
                </Box>
                <span>{item}</span>
              </Box>
            ))}
          </Box>
        </Box>
        <Box>
          <Typography component="h2" sx={tag}>
            {servicePage.specsTitle}
          </Typography>
          <SpecTable rows={service.specs} />
        </Box>
      </PageContainer>
      {project && (
        <PageContainer component="section" aria-labelledby="referenz-titel" sx={{ pb: { xs: 8, md: 12 } }}>
          <Typography component="h2" id="referenz-titel" sx={tag}>
            {servicePage.projectTitle}
          </Typography>
          <Box component="figure" sx={{ m: 0, display: "flex", flexWrap: "wrap", gap: 3, alignItems: "flex-end" }}>
            <Photo
              source={photo(project.photo)}
              alt={project.alt}
              ratio="16 / 9"
              tone="#d9d6cf"
              sizes="(min-width: 1280px) 780px, (min-width: 900px) 62vw, 100vw"
              sx={{ flex: "3 1 480px", minWidth: 0 }}
            />
            <Box component="figcaption" sx={{ flex: "1 1 220px", fontFamily: fonts.mono, fontSize: 12, display: "flex", flexDirection: "column", gap: 0.75 }}>
              <span>{project.title}</span>
              <Box component="span" sx={{ color: colors.muted }}>
                {project.detail} · {project.year}
              </Box>
            </Box>
          </Box>
        </PageContainer>
      )}
      <PageContainer component="nav" aria-labelledby="weitere-titel" sx={{ pb: { xs: 8, md: 12 } }}>
        <Typography component="h2" id="weitere-titel" sx={tag}>
          {servicePage.moreTitle}
        </Typography>
        <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2 }}>
          {others.map((item) => (
            <li key={item.slug}>
              <Link
                href={serviceHref(item.slug)}
                underline="none"
                sx={{ display: "flex", justifyContent: "space-between", gap: 2, py: 1.5, borderTop: `1px solid ${colors.text}`, color: colors.text, "&:hover": { color: colors.accent } }}
              >
                <span>
                  <Box component="span" sx={{ mr: 1.5, fontFamily: fonts.mono, fontSize: 12, color: colors.muted }}>
                    {item.number}
                  </Box>
                  {item.title}
                </span>
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </Box>
      </PageContainer>
      <Inquiry messagePlaceholder={service.placeholder} />
    </>
  );
};

export default ServicePage;
