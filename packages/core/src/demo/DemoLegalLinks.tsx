import { Box, Link, type SxProps, type Theme } from "@mui/material";
import { brand } from "../config/brand";
import { demoContent } from "../content/demo";

interface DemoLegalLinksProps {
  sx?: SxProps<Theme>;
}

const DemoLegalLinks = ({ sx }: DemoLegalLinksProps) => (
  <Box component="span" sx={[{ display: "inline-flex", gap: 1.5 }, ...(Array.isArray(sx) ? sx : [sx])]}>
    <Link href={brand.imprint} color="inherit" underline="hover">
      {demoContent.legal.imprint}
    </Link>
    <span aria-hidden="true">·</span>
    <Link href={brand.privacy} color="inherit" underline="hover">
      {demoContent.legal.privacy}
    </Link>
  </Box>
);

export default DemoLegalLinks;
