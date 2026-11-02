import { Box, type SxProps, type Theme } from "@mui/material";
import type { Spec } from "../../content/services";
import { colors, fonts } from "../../theme";

interface SpecTableProps {
  rows: Spec[];
  sx?: SxProps<Theme>;
}

const SpecTable = ({ rows, sx }: SpecTableProps) => (
  <Box component="dl" sx={[{ m: 0, border: `1px solid ${colors.text}`, fontFamily: fonts.mono, fontSize: 13 }, ...(Array.isArray(sx) ? sx : [sx])]}>
    {rows.map((row) => (
      <Box
        key={row.label}
        sx={{ display: "grid", gridTemplateColumns: "minmax(110px, 2fr) 3fr", borderBottom: `1px solid ${colors.line}`, "&:last-of-type": { borderBottom: 0 } }}
      >
        <Box component="dt" sx={{ p: 1.5, color: colors.muted, borderRight: `1px solid ${colors.line}` }}>
          {row.label}
        </Box>
        <Box component="dd" sx={{ m: 0, p: 1.5 }}>
          {row.value}
        </Box>
      </Box>
    ))}
  </Box>
);

export default SpecTable;
