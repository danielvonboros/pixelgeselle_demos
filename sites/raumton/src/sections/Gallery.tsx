import { Box } from "@mui/material";
import { PageContainer, Photo } from "@pixelgeselle/core";
import { gallery } from "../content/gallery";
import { photo } from "../photos";
import { colors } from "../theme";

const Gallery = () => (
  <PageContainer component="section" aria-label="Arbeiten" sx={{ pb: { xs: 8, md: 12 } }}>
    <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
      {gallery.map((item) => (
        <Box component="figure" key={item.photo} sx={{ m: 0 }}>
          <Photo
            source={photo(item.photo)}
            alt={item.alt}
            ratio="4 / 5"
            tone="#d9d4c9"
            sizes="(min-width: 1280px) 400px, (min-width: 900px) 33vw, 100vw"
          >
            <Box
              component="figcaption"
              sx={{ position: "absolute", left: 16, bottom: 16, bgcolor: colors.background, px: 1.25, py: 0.75, fontSize: 12, fontWeight: 500 }}
            >
              {item.caption}
            </Box>
          </Photo>
        </Box>
      ))}
    </Box>
  </PageContainer>
);

export default Gallery;
