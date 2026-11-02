import { Box, Button, Typography } from "@mui/material";
import { PageContainer, Photo } from "@pixelgeselle/core";
import { projects } from "../content/projects";
import { photo } from "../photos";
import { colors, fonts } from "../theme";

const Projects = () => (
  <>
    <PageContainer component="section" aria-labelledby="cta-titel" sx={{ pb: { xs: 8, md: 12 } }}>
      <Box
        sx={{ border: `1px solid ${colors.text}`, p: "clamp(28px, 5vw, 56px)", display: "flex", flexWrap: "wrap", gap: 3, alignItems: "center", justifyContent: "space-between" }}
      >
        <Typography component="h2" id="cta-titel" sx={{ fontWeight: 300, fontSize: "clamp(28px, 3.4vw, 44px)" }}>
          {projects.cta.title}
        </Typography>
        <Button href={projects.cta.href} variant="contained" sx={{ minHeight: 48 }}>
          {projects.cta.label}
        </Button>
      </Box>
    </PageContainer>
    <PageContainer component="section" id="projekte" aria-labelledby="projekte-titel" sx={{ pb: { xs: 8, md: 12 } }}>
      <Typography component="h2" id="projekte-titel" sx={{ mb: 5, fontFamily: fonts.mono, fontSize: 13 }}>
        {projects.tag}
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 3, alignItems: "start" }}>
        {projects.items.map((project) => (
          <Box component="figure" key={project.title} sx={{ m: 0, pt: { xs: 0, md: `${project.offset}px` }, display: "flex", flexDirection: "column", gap: 1.25 }}>
            <Photo
              source={photo(project.photo)}
              alt={project.alt}
              ratio={project.ratio}
              tone="#d9d6cf"
              sizes="(min-width: 1280px) 290px, (min-width: 900px) 25vw, (min-width: 600px) 50vw, 100vw"
            />
            <Box component="figcaption" sx={{ fontFamily: fonts.mono, fontSize: 12, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}>
                <span>{project.title}</span>
                <Box component="span" sx={{ color: colors.muted }}>
                  {project.year}
                </Box>
              </Box>
              <Box component="span" sx={{ color: colors.muted }}>
                {project.detail}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </PageContainer>
  </>
);

export default Projects;
