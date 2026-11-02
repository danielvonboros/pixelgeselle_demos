import { Box, Typography } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import { useState } from "react";
import LightPreview from "../components/lightPreview/LightPreview";
import Pill from "../components/pill/Pill";
import RangeControl from "../components/rangeControl/RangeControl";
import { light, type Scene } from "../content/light";
import { colors } from "../theme";

const [initialScene] = light.scenes;

const Light = () => {
  const [kelvin, setKelvin] = useState(initialScene.kelvin);
  const [brightness, setBrightness] = useState(initialScene.brightness);
  const [sceneId, setSceneId] = useState<string | null>(initialScene.id);
  const activeScene = light.scenes.find((scene) => scene.id === sceneId);

  const pickScene = (scene: Scene) => {
    setSceneId(scene.id);
    setKelvin(scene.kelvin);
    setBrightness(scene.brightness);
  };

  return (
    <Box component="section" id="licht" aria-labelledby="licht-titel" sx={{ bgcolor: colors.surface }}>
      <PageContainer sx={{ py: { xs: 9, md: 14 }, display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
        <Box sx={{ flex: "2 1 320px", minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography component="h2" id="licht-titel" sx={{ fontWeight: 300, fontSize: "clamp(32px, 3.6vw, 48px)", lineHeight: 1.1 }}>
            {light.title}
          </Typography>
          <Typography sx={{ fontSize: 15, lineHeight: 1.6, color: "text.secondary" }}>{light.text}</Typography>
          <Box role="group" aria-label={light.scenesLabel} sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {light.scenes.map((scene) => (
              <Pill key={scene.id} pressed={scene.id === sceneId} onClick={() => pickScene(scene)}>
                {scene.name}
              </Pill>
            ))}
          </Box>
          <RangeControl
            id="licht-kelvin"
            label={light.kelvinLabel(kelvin)}
            value={kelvin}
            min={2700}
            max={6500}
            step={100}
            valueText={light.kelvinValue}
            rail="linear-gradient(90deg, #ffb35c, #fff1dc 34%, #d6e4ff)"
            onChange={(value) => {
              setKelvin(value);
              setSceneId(null);
            }}
          />
          <RangeControl
            id="licht-helligkeit"
            label={light.brightnessLabel(brightness)}
            value={brightness}
            min={10}
            max={100}
            step={5}
            valueText={light.brightnessValue}
            onChange={(value) => {
              setBrightness(value);
              setSceneId(null);
            }}
          />
        </Box>
        <LightPreview
          kelvin={kelvin}
          brightness={brightness}
          sceneName={activeScene?.name ?? light.custom}
          sx={{ flex: "3 1 480px", minWidth: 0 }}
        />
      </PageContainer>
    </Box>
  );
};

export default Light;
