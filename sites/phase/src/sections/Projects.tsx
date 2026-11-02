import { Box, Typography } from "@mui/material";
import { PageContainer, Photo } from "@pixelgeselle/core";
import { projects } from "../content/projects";
import { photo } from "../photos";

const Projects = () => (
  <PageContainer component="section" id="projekte" aria-labelledby="projekte-titel" sx={{ pb: { xs: 9, md: 14 } }}>
    <Typography component="h2" id="projekte-titel" sx={{ mb: 5, fontWeight: 300, fontSize: "clamp(32px, 3.6vw, 48px)" }}>
      {projects.title}
    </Typography>
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 3 }}>
      {projects.items.map((project) => (
        <Box component="article" key={project.title} sx={{ display: "flex", flexDirection: "column", gap: 1.75 }}>
          <Photo
            source={photo(project.photo)}
            alt={project.alt}
            ratio="4 / 3"
            tone="#d8d4c8"
            sizes="(min-width: 1280px) 400px, (min-width: 900px) 33vw, 100vw"
          />
          <Typography component="h3" sx={{ fontSize: 18, fontWeight: 500 }}>
            {project.title}
          </Typography>
          <Typography sx={{ fontSize: 14, lineHeight: 1.6, color: "text.secondary" }}>{project.text}</Typography>
        </Box>
      ))}
    </Box>
  </PageContainer>
);

export default Projects;
