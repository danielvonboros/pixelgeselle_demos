import { Box, Link, Typography } from "@mui/material";
import { Photo } from "@pixelgeselle/core";
import { serviceHref, services } from "../../content/services";
import { photo } from "../../photos";
import { colors } from "../../theme";

const ServiceCards = () => (
  <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "40px 24px" }}>
    {services.items.map((service) => (
      <Box component="li" key={service.slug} sx={{ position: "relative", display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Photo
          source={photo(service.photo)}
          alt={service.alt}
          ratio="4 / 3"
          tone={colors.surface}
          sizes="(min-width: 1280px) 380px, (min-width: 900px) 33vw, 100vw"
        />
        <Typography component="h3" sx={{ fontSize: 18, fontWeight: 500 }}>
          <Link
            href={serviceHref(service.slug)}
            underline="hover"
            sx={{ color: colors.text, "&::after": { content: '""', position: "absolute", inset: 0 } }}
          >
            {service.title} <span aria-hidden="true">→</span>
          </Link>
        </Typography>
        <Typography sx={{ fontSize: 15, lineHeight: 1.6, color: colors.muted }}>{service.short}</Typography>
      </Box>
    ))}
  </Box>
);

export default ServiceCards;
