import { Box, Typography } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import SectionLabel from "../components/sectionLabel/SectionLabel";
import TonePicker from "../components/tonePicker/TonePicker";
import ToneVisual from "../components/toneVisual/ToneVisual";
import { hero, tones, type Tone } from "../content/hero";

interface HeroProps {
  tone: Tone;
  onToneChange: (id: string) => void;
}

const Hero = ({ tone, onToneChange }: HeroProps) => (
  <>
    <PageContainer component="section" id="top" sx={{ pt: "clamp(40px, 9vw, 120px)", pb: 6 }}>
      <Typography
        component="h1"
        sx={{ fontWeight: 300, fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 1.02, letterSpacing: "-0.035em", maxWidth: 1100 }}
      >
        {hero.title}
      </Typography>
    </PageContainer>
    <PageContainer
      component="section"
      id="farbtoene"
      sx={{ pb: { xs: 8, md: 12 }, display: "flex", flexWrap: "wrap", gap: 4, alignItems: "flex-end" }}
    >
      <Box sx={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: 2, pb: 1 }}>
        <Typography sx={{ fontSize: 15, lineHeight: 1.55, color: "text.secondary", maxWidth: 320 }}>{hero.text}</Typography>
        <SectionLabel component="h2" sx={{ mt: 3 }}>
          {hero.pickerLabel}
        </SectionLabel>
        <TonePicker tones={tones} value={tone.id} label={hero.pickerGroup} onChange={onToneChange} />
      </Box>
      <Box sx={{ flex: "3 1 560px", minWidth: 0 }}>
        <ToneVisual tone={tone} />
      </Box>
    </PageContainer>
  </>
);

export default Hero;
