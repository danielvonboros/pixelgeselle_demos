import { Box, ButtonBase } from "@mui/material";
import type { Tone } from "../../content/hero";
import { colors } from "../../theme";

interface TonePickerProps {
  tones: Tone[];
  value: string;
  label: string;
  onChange: (id: string) => void;
}

const TonePicker = ({ tones, value, label, onChange }: TonePickerProps) => (
  <Box role="group" aria-label={label} sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
    {tones.map((tone) => {
      const selected = tone.id === value;
      return (
        <ButtonBase
          key={tone.id}
          onClick={() => onChange(tone.id)}
          aria-pressed={selected}
          aria-label={tone.name}
          title={tone.name}
          sx={{
            width: 44,
            height: 44,
            bgcolor: tone.hex,
            border: selected ? `3px solid ${colors.text}` : `1px solid ${colors.subtle}`,
            transition: "transform 0.2s ease",
            "&:hover": { transform: "translateY(-2px)" },
          }}
        />
      );
    })}
  </Box>
);

export default TonePicker;
