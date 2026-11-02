import { Box, Slider, Typography } from "@mui/material";
import { colors } from "../../theme";

interface RangeControlProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  valueText: (value: number) => string;
  rail?: string;
  onChange: (value: number) => void;
}

const RangeControl = ({ id, label, value, min, max, step, valueText, rail, onChange }: RangeControlProps) => (
  <Box>
    <Typography id={id} sx={{ fontSize: 13, fontWeight: 500 }}>
      {label}
    </Typography>
    <Slider
      aria-labelledby={id}
      value={value}
      min={min}
      max={max}
      step={step}
      getAriaValueText={valueText}
      onChange={(_, next) => onChange(next as number)}
      sx={{
        color: colors.text,
        height: 6,
        "& .MuiSlider-rail": { opacity: 1, background: rail ?? colors.line },
        "& .MuiSlider-track": rail ? { display: "none" } : { border: 0 },
        "& .MuiSlider-thumb": {
          width: 22,
          height: 22,
          bgcolor: colors.background,
          border: `2px solid ${colors.text}`,
          boxShadow: "none",
          "&:hover, &.Mui-focusVisible, &.Mui-active": { boxShadow: "0 0 0 8px rgba(29, 39, 64, 0.14)" },
        },
      }}
    />
  </Box>
);

export default RangeControl;
