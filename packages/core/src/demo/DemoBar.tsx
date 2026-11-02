import { Box, Link } from "@mui/material";
import { brand } from "../config/brand";
import { demoContent } from "../content/demo";
import { useDemo } from "./useDemo";

const { ink, paper, yellow } = brand.colors;

const DemoBar = () => {
  const { info } = useDemo();
  const content = demoContent.bar;

  return (
    <Box component="aside" aria-label={content.label} sx={{ bgcolor: ink, color: paper, fontSize: 13, lineHeight: 1.4 }}>
      <Box
        sx={{
          maxWidth: 1280,
          mx: "auto",
          px: "clamp(20px, 4vw, 48px)",
          py: 1,
          minHeight: 40,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4px 24px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
          <Box aria-hidden="true" sx={{ width: 8, height: 8, bgcolor: yellow, flexShrink: 0 }} />
          <span>
            {content.text} · {content.size(info.size)}
          </span>
        </Box>
        <Link
          href={brand.pricing}
          underline="hover"
          sx={{ color: paper, fontWeight: 600, display: "inline-flex", alignItems: "center", minHeight: 32 }}
        >
          {content.link} →
        </Link>
      </Box>
    </Box>
  );
};

export default DemoBar;
