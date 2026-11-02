import { Box, Button, Dialog, Typography } from "@mui/material";
import { brand } from "../config/brand";
import { demoContent } from "../content/demo";
import type { DemoInfo } from "./demoInfo";

interface DemoDialogProps {
  info: DemoInfo;
  open: boolean;
  onClose: () => void;
}

const { ink, paper, yellow } = brand.colors;

const DemoDialog = ({ info, open, onClose }: DemoDialogProps) => {
  const content = demoContent.dialog;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="demo-dialog-title"
      aria-describedby="demo-dialog-text"
      slotProps={{
        paper: {
          sx: { bgcolor: paper, color: ink, borderRadius: 0, m: 2, maxWidth: 480, boxShadow: "none" },
        },
      }}
    >
      <Box sx={{ p: { xs: 3, sm: 4 }, display: "flex", flexDirection: "column", gap: 2 }}>
        <Box aria-hidden="true" sx={{ width: 12, height: 12, bgcolor: yellow }} />
        <Typography id="demo-dialog-title" component="h2" sx={{ fontSize: 24, fontWeight: 600, lineHeight: 1.2 }}>
          {content.title}
        </Typography>
        <Typography id="demo-dialog-text" sx={{ fontSize: 16, lineHeight: 1.6 }}>
          {content.text(info.business, info.size)}
        </Typography>
        <Typography sx={{ fontSize: 15, lineHeight: 1.6, color: "#5c5b57" }}>{content.hint}</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 1 }}>
          <Button
            href={brand.booking}
            sx={{
              bgcolor: yellow,
              color: ink,
              borderRadius: 0,
              px: 2.5,
              minHeight: 48,
              fontWeight: 600,
              "&:hover": { bgcolor: "#d9a404" },
            }}
          >
            {content.primary}
          </Button>
          <Button
            onClick={onClose}
            sx={{ color: ink, borderRadius: 0, px: 2.5, minHeight: 48, border: `1px solid ${ink}` }}
          >
            {content.secondary}
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default DemoDialog;
