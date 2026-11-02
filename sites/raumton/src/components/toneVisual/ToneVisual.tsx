import { Box } from "@mui/material";
import { Photo } from "@pixelgeselle/core";
import { hero, type Tone } from "../../content/hero";
import { photo } from "../../photos";

interface ToneVisualProps {
  tone: Tone;
}

const ToneVisual = ({ tone }: ToneVisualProps) => (
  <Photo
    source={photo("room")}
    alt={hero.photoAlt(tone.name)}
    ratio="16 / 9"
    tone={tone.hex}
    priority
    sizes="(min-width: 1280px) 860px, (min-width: 900px) 70vw, 100vw"
    imageStyle={{ mixBlendMode: "multiply", filter: "grayscale(1) brightness(1.22) contrast(1.04)" }}
    sx={{ isolation: "isolate", transition: "background-color 0.45s ease" }}
  >
    <Box
      sx={{
        position: "absolute",
        insetInline: 0,
        bottom: 0,
        p: { xs: 2, sm: 3 },
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        fontSize: 13,
        fontWeight: 500,
        color: tone.text,
        transition: "color 0.45s ease",
      }}
    >
      <span>{hero.caption}</span>
      <span aria-live="polite">{tone.name}</span>
    </Box>
  </Photo>
);

export default ToneVisual;
