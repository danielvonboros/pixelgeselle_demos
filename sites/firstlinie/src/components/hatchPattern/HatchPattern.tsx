import { colors } from "../../theme";

interface HatchPatternProps {
  id: string;
}

const HatchPattern = ({ id }: HatchPatternProps) => (
  <pattern id={id} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
    <line x1="0" y1="0" x2="0" y2="6" stroke={colors.line} strokeWidth="1.2" />
  </pattern>
);

export default HatchPattern;
