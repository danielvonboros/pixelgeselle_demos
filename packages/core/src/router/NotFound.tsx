import { Button, Typography } from "@mui/material";
import { demoContent } from "../content/demo";
import PageContainer from "../layout/PageContainer";
import { href } from "./href";

const content = demoContent.router.notFound;

const NotFound = () => (
  <PageContainer
    component="section"
    aria-labelledby="nicht-gefunden-titel"
    sx={{ py: { xs: 10, md: 16 }, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2.5 }}
  >
    <Typography sx={{ fontSize: 13, color: "text.secondary" }}>{content.code}</Typography>
    <Typography component="h1" id="nicht-gefunden-titel" sx={{ fontWeight: 300, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.08 }}>
      {content.title}
    </Typography>
    <Typography sx={{ maxWidth: 520, fontSize: 16, lineHeight: 1.6, color: "text.secondary" }}>{content.text}</Typography>
    <Button variant="contained" href={href("/")} sx={{ mt: 1 }}>
      {content.link}
    </Button>
  </PageContainer>
);

export default NotFound;
