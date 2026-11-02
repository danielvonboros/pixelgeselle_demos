import { drawings } from "../../content/services";
import { useSvgId } from "@pixelgeselle/core";
import { colors } from "../../theme";
import Drawing from "../drawing/Drawing";
import DrawingText from "../drawing/DrawingText";
import HatchPattern from "../hatchPattern/HatchPattern";

const battens = [20, 56, 92, 128, 164, 200];
const content = drawings.eaves;

const EavesDrawing = () => {
  const hatch = useSvgId("hatch");

  return (
    <Drawing title={content.title} caption={content.caption}>
      <defs>
        <HatchPattern id={hatch} />
      </defs>
      <rect x="150" y="150" width="36" height="60" fill={`url(#${hatch})`} />
      <rect x="150" y="138" width="36" height="12" fill={colors.surface} />
      <g transform="translate(24 48) rotate(25)">
        <rect x="0" y="0" width="236" height="30" fill={colors.surface} />
        <line x1="0" y1="10" x2="236" y2="10" stroke={colors.line} />
        <line x1="0" y1="20" x2="236" y2="20" stroke={colors.line} />
        <line x1="0" y1="-2" x2="240" y2="-2" stroke={colors.muted} strokeDasharray="3 3" />
        <rect x="0" y="-8" width="240" height="5" />
        {battens.map((x) => (
          <rect key={x} x={x} y="-15" width="7" height="7" />
        ))}
        {battens.map((x) => (
          <line key={x} x1={x} y1="-16" x2={x + 44} y2="-21" stroke={colors.accent} strokeWidth="2.4" />
        ))}
        <DrawingText x={60} y={-30}>
          {content.tiles}
        </DrawingText>
        <DrawingText x={60} y={19}>
          {content.rafter}
        </DrawingText>
      </g>
      <rect x="238" y="140" width="6" height="36" fill={colors.surface} />
      <path d="M244 146 L247 146 L247 150 A11 11 0 0 0 269 150 L269 145" stroke={colors.accent} strokeWidth="1.6" />
      <DrawingText x={250} y={180}>
        {content.gutter}
      </DrawingText>
      <DrawingText x={142} y={200} anchor="end">
        {content.wall}
      </DrawingText>
    </Drawing>
  );
};

export default EavesDrawing;
