import { drawings } from "../../content/services";
import { colors } from "../../theme";
import Drawing from "../drawing/Drawing";
import DrawingText from "../drawing/DrawingText";

const content = drawings.gutter;

const GutterDrawing = () => (
  <Drawing title={content.title} caption={content.caption}>
    <rect x="40" y="18" width="24" height="174" fill={colors.surface} />
    <line x1="48" y1="18" x2="48" y2="192" stroke={colors.line} />
    <line x1="56" y1="18" x2="56" y2="192" stroke={colors.line} />
    <path d="M100 66 L100 104 A60 60 0 0 0 220 104 L220 96" />
    <circle cx="220" cy="91" r="5" />
    <line x1="108" y1="134" x2="212" y2="134" stroke={colors.muted} strokeDasharray="3 3" />
    <line x1="100" y1="104" x2="220" y2="104" stroke={colors.accent} strokeDasharray="5 3" />
    <path d="M64 62 L96 62 L96 104 A64 64 0 0 0 224 104 L224 90 Q224 81 232 81" stroke={colors.accent} strokeWidth="2.4" />
    <DrawingText x={160} y={98} anchor="middle">
      {content.size}
    </DrawingText>
    <line x1="230" y1="146" x2="212" y2="146" stroke={colors.muted} />
    <DrawingText x={234} y={149}>
      {content.bracket}
    </DrawingText>
    <DrawingText x={238} y={96}>
      {content.bead}
    </DrawingText>
    <DrawingText x={0} y={0} transform="translate(34 150) rotate(-90)">
      {content.board}
    </DrawingText>
  </Drawing>
);

export default GutterDrawing;
