import { Box } from "@mui/material";
import type { Project } from "../../content/projects";
import ProjectCard from "../projectCard/ProjectCard";

interface ProjectGridProps {
  items: Project[];
}

const ProjectGrid = ({ items }: ProjectGridProps) => (
  <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "48px 24px" }}>
    {items.map((project) => (
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
);

export default ProjectGrid;
