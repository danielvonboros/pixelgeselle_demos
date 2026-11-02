import { Box, Typography } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import { useState, type MouseEvent } from "react";
import LayerList from "../components/layerList/LayerList";
import RoofSection from "../components/roofSection/RoofSection";
import { hero } from "../content/site";
import { layerNumber } from "../lib/layerNumber";
import { colors, fonts } from "../theme";

const Hero = () => {
  const [layer, setLayer] = useState(hero.initialLayer);
  const [cursor, setCursor] = useState({ x: 0.5, y: 0.5 });

  const track = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setCursor({ x: (event.clientX - bounds.left) / bounds.width, y: (event.clientY - bounds.top) / bounds.height });
  };

  return (
    <PageContainer
      component="section"
      id="top"
      aria-labelledby="hero-titel"
      sx={{ pt: "clamp(40px, 7vw, 96px)", pb: 8, display: "flex", flexWrap: "wrap", gap: 6 }}
    >
      <Box onMouseMove={track} sx={{ display: "contents" }}>
        <Box sx={{ flex: "2 1 360px", minWidth: 0, display: "flex", flexDirection: "column", gap: 3.5 }}>
          <Typography
            component="h1"
            id="hero-titel"
            sx={{ fontWeight: 300, fontSize: "clamp(56px, 8vw, 112px)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
          >
            {hero.title}
          </Typography>
          <Typography sx={{ fontSize: 17, lineHeight: 1.55, maxWidth: 420 }}>{hero.text}</Typography>
          <Box sx={{ mt: 1.5, display: "flex", flexDirection: "column", gap: 0.75, fontFamily: fonts.mono, fontSize: 12, color: colors.muted }}>
            <span>{hero.layersTag}</span>
            <span>{hero.layersHint}</span>
          </Box>
          <LayerList layers={hero.layers} selected={layer} label={hero.layersLabel} onSelect={setLayer} />
        </Box>
        <Box component="figure" sx={{ flex: "3 1 520px", minWidth: 0, m: 0, display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Box sx={{ bgcolor: colors.surface, border: `1px solid ${colors.line}`, p: 3 }}>
            <RoofSection
              selected={layer}
              title={hero.figureLabel}
              pitch={hero.pitch}
              label={`${layerNumber(layer)} ${hero.layers[layer].name}`}
            />
          </Box>
          <Box
            component="figcaption"
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 1, fontFamily: fonts.mono, fontSize: 12, color: colors.muted }}
          >
            <span>{hero.caption}</span>
            <span aria-hidden="true">
              X {cursor.x.toFixed(3)} · Y {cursor.y.toFixed(3)} · {hero.scale}
            </span>
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Hero;
