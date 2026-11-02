import { Box, Typography } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import PageIntro from "../components/pageIntro/PageIntro";
import ProjectGrid from "../components/projectGrid/ProjectGrid";
import { projects } from "../content/projects";
import { servicePage, services, type Service } from "../content/services";
import { site } from "../content/site";
import Contact from "../sections/Contact";
import Process from "../sections/Process";
import { colors } from "../theme";

interface ServicePageProps {
  service: Service;
}

const sectionTitle = { fontWeight: 300, fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.1 };

const ServicePage = ({ service }: ServicePageProps) => {
  const related = projects.items.filter((project) => project.tag === service.tag);

  return (
    <>
      <PageIntro
        crumbs={[{ label: site.crumbHome, href: site.homeHref }, { label: services.crumb, href: services.crumbHref }, { label: service.title }]}
        kicker={servicePage.kicker}
        title={servicePage.title(service.title)}
        lead={service.lead}
        image={service.photo}
        alt={service.alt}
      />
      <PageContainer component="section" aria-labelledby="umfang-titel" sx={{ py: { xs: 6, md: 10 }, display: "flex", flexWrap: "wrap", gap: 6 }}>
        <Typography component="h2" id="umfang-titel" sx={{ ...sectionTitle, flex: "1 1 260px" }}>
          {servicePage.scopeTitle}
        </Typography>
        <Box component="ul" sx={{ flex: "2 1 480px", listStyle: "none", m: 0, p: 0 }}>
          {service.scope.map((item) => (
            <Box component="li" key={item} sx={{ py: 2, borderTop: `1px solid ${colors.line}`, fontSize: 17, lineHeight: 1.5 }}>
              {item}
            </Box>
          ))}
        </Box>
      </PageContainer>
      {related.length > 0 && (
        <PageContainer component="section" aria-labelledby="projekte-titel" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography component="h2" id="projekte-titel" sx={{ ...sectionTitle, mb: 5 }}>
            {servicePage.projectsTitle}
          </Typography>
          <ProjectGrid items={related} />
        </PageContainer>
      )}
      <Process />
      <Contact messagePlaceholder={service.placeholder} />
    </>
  );
};

export default ServicePage;
