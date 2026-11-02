import { Box, Typography } from "@mui/material";
import { ApplicationForm, PageContainer } from "@pixelgeselle/core";
import PageIntro from "../components/pageIntro/PageIntro";
import { careers } from "../content/process";
import { site } from "../content/site";
import { colors } from "../theme";

const List = ({ title, items }: { title: string; items: string[] }) => (
  <Box>
    <Typography component="h2" sx={{ mb: 3, fontWeight: 300, fontSize: "clamp(26px, 2.6vw, 34px)" }}>
      {title}
    </Typography>
    <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
      {items.map((item) => (
        <Box component="li" key={item} sx={{ py: 2, borderTop: `1px solid ${colors.line}`, fontSize: 16, lineHeight: 1.5 }}>
          {item}
        </Box>
      ))}
    </Box>
  </Box>
);

const CareersPage = () => (
  <>
    <PageIntro
      crumbs={[{ label: site.crumbHome, href: site.homeHref }, { label: careers.crumb }]}
      kicker={careers.kicker}
      title={careers.title}
      lead={careers.text}
      image="workshop"
      alt={careers.photoAlt}
    />
    <PageContainer
      component="section"
      aria-label={careers.crumb}
      sx={{ py: { xs: 6, md: 10 }, display: "grid", gap: 6, gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}
    >
      <List title={careers.offerTitle} items={careers.offer} />
      <List title={careers.bringTitle} items={careers.bring} />
    </PageContainer>
    <Box component="section" id="bewerbung" aria-labelledby="bewerbung-titel" sx={{ bgcolor: colors.surface }}>
      <PageContainer sx={{ py: { xs: 9, md: 12 }, display: "flex", flexWrap: "wrap", gap: 6 }}>
        <Box sx={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: 2.5 }}>
          <Typography sx={{ fontSize: 12, letterSpacing: "0.2em", color: colors.muted }}>{careers.applyKicker}</Typography>
          <Typography component="h2" id="bewerbung-titel" sx={{ fontWeight: 300, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.1 }}>
            {careers.applyTitle}
          </Typography>
          <Typography sx={{ maxWidth: 420, fontSize: 15, lineHeight: 1.6, color: colors.muted }}>{careers.applyText}</Typography>
        </Box>
        <ApplicationForm sx={{ flex: "2 1 480px", minWidth: 0 }} />
      </PageContainer>
    </Box>
  </>
);

export default CareersPage;
