import { Box } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import { useState } from "react";
import FilterButton from "../components/filterButton/FilterButton";
import PageIntro from "../components/pageIntro/PageIntro";
import ProjectGrid from "../components/projectGrid/ProjectGrid";
import { projects } from "../content/projects";
import { site } from "../content/site";
import Contact from "../sections/Contact";

const [allFilter] = projects.filters;

const ProjectsPage = () => {
  const [filter, setFilter] = useState(allFilter);
  const visible = projects.items.filter((project) => filter === allFilter || project.tag === filter);

  return (
    <>
      <PageIntro
        crumbs={[{ label: site.crumbHome, href: site.homeHref }, { label: projects.crumb }]}
        kicker={projects.kicker}
        title={projects.heading}
        lead={projects.lead}
      />
      <PageContainer component="section" aria-label={projects.crumb} sx={{ pb: { xs: 9, md: 14 } }}>
        <Box role="group" aria-label={projects.filterLabel} sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 5 }}>
          {projects.filters.map((item) => (
            <FilterButton key={item} label={item} active={item === filter} onClick={() => setFilter(item)} />
          ))}
        </Box>
        <ProjectGrid items={visible} />
      </PageContainer>
      <Contact />
    </>
  );
};

export default ProjectsPage;
