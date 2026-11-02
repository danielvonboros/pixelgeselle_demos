import { Typography } from "@mui/material";
import { PageContainer } from "@pixelgeselle/core";
import ServiceCards from "../components/serviceCards/ServiceCards";
import { services } from "../content/services";

const Services = () => (
  <PageContainer component="section" id="leistungen" aria-labelledby="leistungen-titel" sx={{ py: { xs: 9, md: 14 } }}>
    <Typography component="h2" id="leistungen-titel" sx={{ mb: 5, fontWeight: 300, fontSize: "clamp(32px, 3.6vw, 48px)" }}>
      {services.title}
    </Typography>
    <ServiceCards />
  </PageContainer>
);

export default Services;
