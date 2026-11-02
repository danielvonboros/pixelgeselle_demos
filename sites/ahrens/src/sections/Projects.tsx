import { Box, Typography } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import { useState } from "react";
import FilterButton from "../components/filterButton/FilterButton";
import ProjectCard from "../components/projectCard/ProjectCard";
import { projects } from "../content/projects";

const [allFilter] = projects.filters;

const Projects = () => {
  const [filter, setFilter] = useState(allFilter);
  const visible = projects.items.filter((project) => filter === allFilter || project.tag === filter);

  return (
    <PageContainer component="section" id="projekte" aria-labelledby="projekte-titel" sx={{ py: { xs: 9, md: 14 } }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: 2, mb: 5 }}>
        <Typography component="h2" id="projekte-titel" sx={{ fontWeight: 300, fontSize: "clamp(32px, 3.6vw, 48px)" }}>
          {projects.title}
        </Typography>
        <Box role="group" aria-label={projects.filterLabel} sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {projects.filters.map((item) => (
            <FilterButton key={item} label={item} active={item === filter} onClick={() => setFilter(item)} />
          ))}
        </Box>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "48px 24px" }}>
        {visible.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            place={project.place}
            year={project.year}
            tag={project.tag}
            image={project.photo}
            ratio={project.ratio}
            alt={project.alt}
          />
        ))}
      </Box>
    </PageContainer>
  );
};

export default Projects;
