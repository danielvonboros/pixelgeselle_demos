import { Box, Typography } from "@mui/material";
import { ApplicationForm, Breadcrumbs, PageContainer } from "@pixelgeselle/core";
import SpecTable from "../components/specTable/SpecTable";
import { careers } from "../content/careers";
import { site } from "../content/site";
import { colors, fonts } from "../theme";

const tag = { mb: 3, fontFamily: fonts.mono, fontSize: 13 };

const List = ({ title, items }: { title: string; items: string[] }) => (
  <Box>
    <Typography component="h2" sx={tag}>
      {title}
    </Typography>
    <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
      {items.map((item) => (
        <Box component="li" key={item} sx={{ py: 2, borderTop: `1px solid ${colors.text}`, fontSize: 17, lineHeight: 1.45 }}>
          {item}
        </Box>
      ))}
    </Box>
  </Box>
);

const CareersPage = () => (
  <>
    <PageContainer component="section" id="top" aria-labelledby="karriere-titel" sx={{ pt: "clamp(24px, 4vw, 48px)", pb: { xs: 8, md: 12 } }}>
      <Breadcrumbs
        items={[{ label: site.breadcrumbs.home, href: site.homeHref }, { label: careers.crumb }]}
        sx={{ mb: { xs: 5, md: 8 }, fontFamily: fonts.mono, fontSize: 12, color: colors.muted }}
      />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "flex-end" }}>
        <Box sx={{ flex: "3 1 480px", minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
          <Box sx={{ fontFamily: fonts.mono, fontSize: 13 }}>{careers.tag}</Box>
          <Typography component="h1" id="karriere-titel" sx={{ fontWeight: 300, fontSize: "clamp(38px, 5.4vw, 72px)", lineHeight: 1.04, letterSpacing: "-0.03em" }}>
            {careers.title}
          </Typography>
          <Typography sx={{ maxWidth: 560, fontSize: 18, lineHeight: 1.55, color: colors.muted }}>{careers.lead}</Typography>
        </Box>
        <Box sx={{ flex: "2 1 320px", minWidth: 0 }}>
          <Typography component="h2" sx={tag}>
            {careers.factsTitle}
          </Typography>
          <SpecTable rows={careers.facts} />
        </Box>
      </Box>
    </PageContainer>
    <PageContainer
      component="section"
      aria-label={careers.crumb}
      sx={{ py: { xs: 8, md: 12 }, borderTop: `1px solid ${colors.line}`, display: "grid", gap: 6, gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}
    >
      <List title={careers.bringTitle} items={careers.bring} />
      <List title={careers.offerTitle} items={careers.offer} />
    </PageContainer>
    <PageContainer
      component="section"
      id="bewerbung"
      aria-labelledby="bewerbung-titel"
      sx={{ py: { xs: 8, md: 12 }, borderTop: `1px solid ${colors.line}`, display: "flex", flexWrap: "wrap", gap: 6 }}
    >
      <Box sx={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: 2.5 }}>
        <Box sx={{ fontFamily: fonts.mono, fontSize: 13 }}>{careers.applyTag}</Box>
        <Typography component="h2" id="bewerbung-titel" sx={{ fontWeight: 300, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.08 }}>
          {careers.applyTitle}
        </Typography>
        <Typography sx={{ maxWidth: 420, fontSize: 16, lineHeight: 1.55, color: colors.muted }}>{careers.applyText}</Typography>
      </Box>
      <ApplicationForm submitLabel={careers.submit} sx={{ flex: "2 1 480px", minWidth: 0 }} />
    </PageContainer>
  </>
);

export default CareersPage;
