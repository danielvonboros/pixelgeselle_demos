import { Box } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import Monogram from "../components/monogram/Monogram";
import WoodPicker from "../components/woodPicker/WoodPicker";
import { hero, woods, type Wood } from "../content/woods";

interface HeroProps {
  wood: Wood;
  onWoodChange: (id: string) => void;
}

const sideLabel = { fontSize: 10, fontWeight: 500, letterSpacing: "0.28em", flex: "1 1 140px" };

const Hero = ({ wood, onWoodChange }: HeroProps) => (
  <PageContainer
    component="section"
    id="top"
    aria-label={hero.sectionLabel}
    sx={{ pt: "clamp(32px, 8vw, 112px)", pb: 5, display: "flex", flexDirection: "column", alignItems: "center", gap: 3.5 }}
  >
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "clamp(16px, 4vw, 56px)" }}>
      <Box component="span" sx={{ ...sideLabel, textAlign: { xs: "center", sm: "right" }, order: { xs: 2, sm: 0 } }}>
        {hero.left}
      </Box>
      <Monogram woods={woods} selected={wood.id} letters={hero.monogram} label={hero.monogramLabel(wood.name)} />
      <Box component="span" sx={{ ...sideLabel, textAlign: { xs: "center", sm: "left" }, order: { xs: 3, sm: 0 } }}>
        {hero.right}
      </Box>
    </Box>
    <WoodPicker woods={woods} selected={wood.id} label={hero.pickerLabel} onSelect={onWoodChange} />
  </PageContainer>
);

export default Hero;
