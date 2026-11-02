import { Box, type SxProps, type Theme } from "@mui/material";
import { Photo } from "@pixelgeselle/core";
import { light } from "../../content/light";
import { lightColor, mixHex } from "../../lib/light";
import { photo } from "../../photos";
import { colors } from "../../theme";

interface LightPreviewProps {
  kelvin: number;
  brightness: number;
  sceneName: string;
  sx?: SxProps<Theme>;
}

const transition = "all 0.45s ease";

const LightPreview = ({ kelvin, brightness, sceneName, sx }: LightPreviewProps) => {
  const level = brightness / 100;
  const glow = lightColor(kelvin);

  return (
    <Photo
      source={photo("living-room")}
      alt={light.photoAlt}
      ratio="4 / 3"
      tone={mixHex("#18191e", glow, level * 0.85)}
      sizes="(min-width: 1280px) 700px, (min-width: 900px) 55vw, 100vw"
      imageStyle={{ filter: `brightness(${0.28 + level * 0.82}) saturate(${0.7 + level * 0.4})`, transition }}
      sx={[{ isolation: "isolate", transition }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <Box
        aria-hidden="true"
        sx={{ position: "absolute", inset: 0, bgcolor: glow, mixBlendMode: "multiply", opacity: 0.5 - level * 0.15, transition }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(70% 55% at 50% 0%, ${glow} 0%, transparent 72%)`,
          mixBlendMode: "soft-light",
          opacity: 0.35 + level * 0.55,
          transition,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          p: { xs: 2, sm: 3 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: colors.background,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.38), transparent 28%, transparent 58%, rgba(0,0,0,0.5))",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, fontSize: 12 }}>
          <span>{light.room}</span>
          <span aria-live="polite">{sceneName}</span>
        </Box>
        <Box sx={{ display: "flex", alignItems: "baseline", gap: 2, fontVariantNumeric: "tabular-nums" }}>
          <Box component="span" sx={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300, lineHeight: 1 }}>
            {kelvin} K
          </Box>
          <Box component="span" sx={{ fontSize: 15 }}>
            {brightness} %
          </Box>
        </Box>
      </Box>
    </Photo>
  );
};

export default LightPreview;
