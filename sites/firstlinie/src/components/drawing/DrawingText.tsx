import type { ReactNode } from "react";
import { colors, fonts } from "../../theme";

interface DrawingTextProps {
  x: number;
  y: number;
  anchor?: "start" | "middle" | "end";
  transform?: string;
  children: ReactNode;
}

const DrawingText = ({ x, y, anchor = "start", transform, children }: DrawingTextProps) => (
  <text x={x} y={y} textAnchor={anchor} transform={transform} fontFamily={fonts.mono} fontSize="10" fill={colors.text} stroke="none">
    {children}
  </text>
);

export default DrawingText;
