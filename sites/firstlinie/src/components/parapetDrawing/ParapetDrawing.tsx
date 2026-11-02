import { drawings } from "../../content/services";
import { useSvgId } from "@pixelgeselle/core";
import { colors } from "../../theme";
import Drawing from "../drawing/Drawing";
import DrawingText from "../drawing/DrawingText";
import HatchPattern from "../hatchPattern/HatchPattern";

const content = drawings.parapet;
const zigzag = `M122 133 ${Array.from({ length: 11 }, (_, index) => `L${126 + index * 8} ${index % 2 ? 133 : 123}`).join(" ")}`;

const ParapetDrawing = () => {
  const hatch = useSvgId("hatch");

  return (
    <Drawing title={content.title} caption={content.caption}>
      <defs>
        <HatchPattern id={hatch} />
      </defs>
      <rect x="20" y="150" width="232" height="26" fill={`url(#${hatch})`} />
      <rect x="220" y="62" width="32" height="88" fill={`url(#${hatch})`} />
      <rect x="20" y="118" width="196" height="32" fill={colors.surface} />
      <path d={zigzag} transform="translate(0 6)" stroke={colors.muted} />
      <path d="M20 116 L217 116 L217 64" stroke={colors.accent} strokeWidth="2.4" />
      <path d="M210 76 L210 55 L262 59 L262 71" stroke={colors.accent} strokeWidth="2" />
      <line x1="178" y1="46" x2="208" y2="56" stroke={colors.muted} />
      <DrawingText x={174} y={44} anchor="end">
        {content.coping}
      </DrawingText>
      <DrawingText x={24} y={110}>
        {content.sealing}
      </DrawingText>
      <DrawingText x={28} y={138}>
        {content.insulation}
      </DrawingText>
      <DrawingText x={20} y={192}>
        {content.slab}
      </DrawingText>
    </Drawing>
  );
};

export default ParapetDrawing;
