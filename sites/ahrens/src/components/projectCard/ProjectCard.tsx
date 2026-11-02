import { Box } from "@mui/material";
import { Photo } from "@pixelgeselle/core";
import { photo } from "../../photos";
import { colors } from "../../theme";

interface ProjectCardProps {
  title: string;
  place: string;
  year: string;
  tag: string;
  image: string;
  ratio: string;
  alt: string;
}

const ProjectCard = ({ title, place, year, tag, image, ratio, alt }: ProjectCardProps) => (
  <Box component="article" sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
    <Photo
      source={photo(image)}
      alt={alt}
      ratio={ratio}
      tone={colors.surface}
      sizes="(min-width: 1280px) 380px, (min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
    />
    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1.5, fontSize: 14 }}>
      <Box component="h3" sx={{ m: 0, fontSize: "inherit", fontWeight: 500 }}>
        {title}
      </Box>
      <Box component="span" sx={{ color: colors.muted }}>
        {year}
      </Box>
    </Box>
    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1.5, fontSize: 13, color: colors.muted }}>
      <span>{place}</span>
      <span>{tag}</span>
    </Box>
  </Box>
);

export default ProjectCard;
