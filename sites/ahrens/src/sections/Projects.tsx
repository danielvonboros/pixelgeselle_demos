import { Box, Link, Typography } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import ProjectGrid from "../components/projectGrid/ProjectGrid";
import { projects } from "../content/projects";
import { colors } from "../theme";

const Projects = () => (
  <PageContainer component="section" id="projekte" aria-labelledby="projekte-titel" sx={{ py: { xs: 9, md: 14 } }}>
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: 2, mb: 5 }}>
      <Typography component="h2" id="projekte-titel" sx={{ fontWeight: 300, fontSize: "clamp(32px, 3.6vw, 48px)" }}>
        {projects.title}
      </Typography>
      <Link href={projects.href} underline="hover" sx={{ color: colors.text, fontWeight: 500, py: 1 }}>
        {projects.all} <span aria-hidden="true">→</span>
      </Link>
    </Box>
    <ProjectGrid items={projects.items.slice(0, projects.teaserCount)} />
  </PageContainer>
);

export default Projects;
