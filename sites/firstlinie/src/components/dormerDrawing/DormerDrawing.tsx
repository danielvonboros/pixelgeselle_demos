import { drawings } from "../../content/services";
import { useSvgId } from "@pixelgeselle/core";
import { colors } from "../../theme";
import Drawing from "../drawing/Drawing";
import DrawingText from "../drawing/DrawingText";

const content = drawings.dormer;
const roof = "M20 182 L84 58 L236 58 L300 182 Z";
const courses = Array.from({ length: 13 }, (_, index) => 67 + index * 9.5);

const DormerDrawing = () => {
  const clip = useSvgId("roof");

  return (
    <Drawing title={content.title} caption={content.caption}>
      <defs>
        <clipPath id={clip}>
          <path d={roof} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`} stroke={colors.line}>
        {courses.map((y) => (
          <line key={y} x1="0" x2="320" y1={y} y2={y} />
        ))}
      </g>
      <path d={roof} />
      <path d="M118 82 L202 82 L210 104 L110 104 Z" fill={colors.surface} />
      <line x1="122" y1="93" x2="198" y2="93" stroke={colors.line} />
      <rect x="118" y="104" width="84" height="56" fill={colors.surface} />
      <rect x="132" y="115" width="56" height="36" />
      <line x1="160" y1="115" x2="160" y2="151" />
      <line x1="110" y1="104" x2="210" y2="104" stroke={colors.accent} strokeWidth="2.4" />
      <rect x="216" y="86" width="76" height="14" fill={colors.surface} stroke="none" />
      <DrawingText x={220} y={96}>
        {content.dormer}
      </DrawingText>
      <g stroke={colors.accent}>
        <line x1="118" y1="196" x2="202" y2="196" />
        <line x1="118" y1="190" x2="118" y2="202" />
        <line x1="202" y1="190" x2="202" y2="202" />
      </g>
      <DrawingText x={160} y={191} anchor="middle">
        {content.width}
      </DrawingText>
    </Drawing>
  );
};

export default DormerDrawing;
