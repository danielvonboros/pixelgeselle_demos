import { colors, fonts } from "../../theme";

interface RoofSectionProps {
  selected: number;
  label: string;
  title: string;
  pitch: string;
}

const layers = [
  "100,420 500,120 476,88 76,388",
  "76,388 476,88 454.4,59.2 54.4,359.2",
  "54.4,359.2 454.4,59.2 450.8,54.4 50.8,354.4",
  "50.8,354.4 450.8,54.4 443.6,44.8 43.6,344.8",
  "43.6,344.8 443.6,44.8 436.4,35.2 36.4,335.2",
  "36.4,335.2 436.4,35.2 423.2,17.6 23.2,317.6",
];

const RoofSection = ({ selected, label, title, pitch }: RoofSectionProps) => (
  <svg viewBox="0 0 560 460" role="img" aria-label={title} style={{ width: "100%", height: "auto", display: "block" }}>
    {layers.map((points, index) => (
      <polygon
        key={points}
        points={points}
        fill={index === selected ? colors.accent : "none"}
        stroke={colors.text}
        strokeWidth="1"
        style={{ transition: "fill 0.3s ease" }}
      />
    ))}
    <line x1="500" y1="120" x2="540" y2="120" stroke={colors.accent} strokeWidth="1" />
    <line x1="100" y1="420" x2="540" y2="420" stroke={colors.accent} strokeWidth="1" strokeDasharray="4 4" />
    <path d="M180 420 A 80 80 0 0 0 164 372" fill="none" stroke={colors.accent} strokeWidth="1" />
    <text x="190" y="404" fontFamily={fonts.mono} fontSize="12" fill={colors.text}>
      {pitch}
    </text>
    <text x="300" y="444" fontFamily={fonts.mono} fontSize="12" fill={colors.text}>
      {label}
    </text>
  </svg>
);

export default RoofSection;
