import { Box, ButtonBase } from "@mui/material";
import { DemoLegalLinks, DemoNotice, PageContainer, useDemo } from "@pixelgeselle/core";
import type { ReactNode } from "react";
import { contact } from "../content/contact";
import { colors, fonts } from "../theme";

const Cell = ({ label, children }: { label: string; children: ReactNode }) => (
  <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 0.75, borderRight: `1px solid ${colors.text}`, borderBottom: `1px solid ${colors.text}`, mr: "-1px", mb: "-1px" }}>
    <Box component="span" sx={{ color: colors.muted }}>
      {label}
    </Box>
    {children}
  </Box>
);

const Footer = () => {
  const { openDialog } = useDemo();
  const block = contact.titleBlock;
  const action = { p: 0, justifyContent: "flex-start", fontFamily: fonts.mono, fontSize: 12, textDecoration: "underline", "&:hover": { color: colors.accent } };

  return (
    <PageContainer component="footer" sx={{ pb: 6, fontFamily: fonts.mono, fontSize: 12 }}>
      <Box sx={{ border: `1px solid ${colors.text}`, overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
        <Cell label={block.project.label}>
          <span>{block.project.value}</span>
        </Cell>
        <Cell label={block.phone.label}>
          <ButtonBase onClick={openDialog} sx={action}>
            {block.phone.value}
          </ButtonBase>
        </Cell>
        <Cell label={block.mail.label}>
          <ButtonBase onClick={openDialog} sx={action}>
            {block.mail.value}
          </ButtonBase>
        </Cell>
        <Cell label={block.sheet.label}>
          <span>{block.sheet.value}</span>
        </Cell>
        <Cell label={block.legal.label}>
          <DemoLegalLinks />
        </Cell>
      </Box>
      <Box sx={{ mt: 2, fontSize: 11, color: colors.muted }}>
        <DemoNotice />
      </Box>
    </PageContainer>
  );
};

export default Footer;
