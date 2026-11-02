import { useSvgId } from "@pixelgeselle/core";
import type { Wood } from "../../content/woods";
import { photo } from "../../photos";
import { colors, fonts } from "../../theme";

interface MonogramProps {
  woods: Wood[];
  selected: string;
  letters: string;
  label: string;
}

const letterProps = {
  x: 260,
  y: 212,
  textAnchor: "middle",
  fontFamily: fonts.display,
  fontWeight: 800,
  fontSize: 236,
  letterSpacing: -8,
  strokeLinejoin: "round",
} as const;

const Monogram = ({ woods, selected, letters, label }: MonogramProps) => {
  const base = useSvgId("wood");

  return (
    <svg viewBox="-95 30 725 205" role="img" aria-label={label} style={{ flex: "0 1 640px", width: "100%", maxWidth: 640, height: "auto" }}>
      <defs>
        {woods.map((wood) => {
          const source = photo(wood.photo);
          return source ? (
            <pattern key={wood.id} id={`${base}-${wood.id}`} patternUnits="userSpaceOnUse" x="-95" y="30" width="725" height="205">
              <image href={source.small} x="0" y="0" width="725" height="205" preserveAspectRatio="xMidYMid slice" />
            </pattern>
          ) : null;
        })}
      </defs>
      <text {...letterProps} fill="none" stroke={colors.line} strokeWidth="22">
        {letters}
      </text>
      {woods.map((wood) => (
        <text
          key={wood.id}
          {...letterProps}
          fill={photo(wood.photo) ? `url(#${base}-${wood.id})` : wood.hex}
          stroke={colors.highlight}
          strokeWidth="8"
          paintOrder="stroke"
          style={{ opacity: wood.id === selected ? 1 : 0, transition: "opacity 0.5s ease" }}
        >
          {letters}
        </text>
      ))}
    </svg>
  );
};

export default Monogram;
