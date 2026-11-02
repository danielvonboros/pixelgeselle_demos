import { Box, Link, type SxProps, type Theme } from "@mui/material";
import { demoContent } from "../content/demo";

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  sx?: SxProps<Theme>;
}

const Breadcrumbs = ({ items, sx }: BreadcrumbsProps) => (
  <Box component="nav" aria-label={demoContent.router.breadcrumbs} sx={[{ fontSize: 13 }, ...(Array.isArray(sx) ? sx : [sx])]}>
    <Box component="ol" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexWrap: "wrap", gap: "4px 8px" }}>
      {items.map((item, index) => {
        const current = index === items.length - 1;
        return (
          <Box component="li" key={item.label} sx={{ display: "inline-flex", gap: 1 }}>
            {index > 0 && (
              <Box component="span" aria-hidden="true" sx={{ opacity: 0.5 }}>
                /
              </Box>
            )}
            {item.href && !current ? (
              <Link href={item.href} color="inherit" underline="hover">
                {item.label}
              </Link>
            ) : (
              <span aria-current={current ? "page" : undefined}>{item.label}</span>
            )}
          </Box>
        );
      })}
    </Box>
  </Box>
);

export default Breadcrumbs;
