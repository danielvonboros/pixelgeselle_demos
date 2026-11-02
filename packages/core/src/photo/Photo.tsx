import { Box, type SxProps, type Theme } from "@mui/material";
import type { CSSProperties, ReactNode } from "react";
import { demoContent } from "../content/demo";
import type { PhotoSource } from "./createPhotoLibrary";

interface PhotoProps {
  source?: PhotoSource;
  alt: string;
  ratio?: string;
  position?: string;
  sizes?: string;
  tone?: string;
  priority?: boolean;
  imageStyle?: CSSProperties;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

const Photo = ({
  source,
  alt,
  ratio,
  position = "50% 50%",
  sizes = "100vw",
  tone = "rgba(0, 0, 0, 0.08)",
  priority = false,
  imageStyle,
  sx,
  children,
}: PhotoProps) => (
  <Box
    sx={[
      { position: "relative", overflow: "hidden", bgcolor: tone, aspectRatio: ratio },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    {source ? (
      <img
        src={source.src}
        srcSet={source.srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: position,
          ...imageStyle,
        }}
      />
    ) : (
      <Box
        role="img"
        aria-label={alt}
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "flex-start",
          p: 1.5,
          fontSize: 12,
          lineHeight: 1.4,
          opacity: 0.7,
        }}
      >
        {demoContent.photo.missing}: {alt}
      </Box>
    )}
    {children}
  </Box>
);

export default Photo;
