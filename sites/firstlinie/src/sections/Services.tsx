import { Box, Typography } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import type { ComponentType } from "react";
import DormerDrawing from "../components/dormerDrawing/DormerDrawing";
import EavesDrawing from "../components/eavesDrawing/EavesDrawing";
import GutterDrawing from "../components/gutterDrawing/GutterDrawing";
import ParapetDrawing from "../components/parapetDrawing/ParapetDrawing";
import { services, type DrawingId } from "../content/services";
import { colors, fonts } from "../theme";

const drawingComponents: Record<DrawingId, ComponentType> = {
  eaves: EavesDrawing,
  parapet: ParapetDrawing,
  dormer: DormerDrawing,
  gutter: GutterDrawing,
};

const Services = () => (
  <PageContainer component="section" id="leistungen" aria-labelledby="leistungen-titel" sx={{ py: { xs: 8, md: 12 }, borderTop: `1px solid ${colors.line}` }}>
    <Typography component="h2" id="leistungen-titel" sx={{ mb: 5, fontFamily: fonts.mono, fontSize: 13 }}>
      {services.tag}
    </Typography>
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 4 }}>
      {services.items.map((service) => {
        const DrawingComponent = drawingComponents[service.drawing];
        return (
          <Box component="article" key={service.number} sx={{ display: "flex", flexDirection: "column", gap: 1.75, borderTop: `1px solid ${colors.text}`, pt: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", fontFamily: fonts.mono, fontSize: 12, color: colors.muted }}>
              <span>{service.number}</span>
              <span>fig. {service.figure}</span>
            </Box>
            <DrawingComponent />
            <Typography component="h3" sx={{ fontSize: 20, fontWeight: 400 }}>
              {service.title}
            </Typography>
            <Typography sx={{ fontSize: 15, lineHeight: 1.55, color: colors.muted }}>{service.text}</Typography>
          </Box>
        );
      })}
    </Box>
  </PageContainer>
);

export default Services;
