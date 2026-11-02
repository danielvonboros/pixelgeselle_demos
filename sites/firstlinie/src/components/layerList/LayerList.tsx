import { Box, ButtonBase } from "@mui/material";
import { layerNumber } from "../../lib/layerNumber";
import { colors, fonts } from "../../theme";

interface Layer {
  name: string;
  thickness: string;
}

interface LayerListProps {
  layers: Layer[];
  selected: number;
  label: string;
  onSelect: (index: number) => void;
}

const LayerList = ({ layers, selected, label, onSelect }: LayerListProps) => (
  <Box component="ol" aria-label={label} sx={{ listStyle: "none", m: 0, p: 0, borderTop: `1px solid ${colors.line}` }}>
    {layers.map((layer, index) => {
      const active = index === selected;
      return (
        <Box component="li" key={layer.name} sx={{ borderBottom: `1px solid ${colors.line}` }}>
          <ButtonBase
            onClick={() => onSelect(index)}
            aria-pressed={active}
            sx={{
              width: "100%",
              minHeight: 44,
              py: 1.25,
              display: "flex",
              gap: 2,
              alignItems: "baseline",
              justifyContent: "flex-start",
              textAlign: "left",
              fontFamily: fonts.mono,
              fontSize: 13,
              color: active ? colors.accent : colors.text,
              "&:hover": { color: colors.accent },
            }}
          >
            <Box component="span" sx={{ width: 28 }}>
              {layerNumber(index)}
            </Box>
            <Box component="span" sx={{ flex: 1, fontFamily: fonts.sans, fontSize: 15, fontWeight: active ? 500 : 400 }}>
              {layer.name}
            </Box>
            <span>{layer.thickness}</span>
          </ButtonBase>
        </Box>
      );
    })}
  </Box>
);

export default LayerList;
