import { ButtonBase, type SxProps, type Theme } from "@mui/material";
import type { ReactNode } from "react";
import { colors } from "../../theme";

interface PillProps {
  href?: string;
  onClick?: () => void;
  pressed?: boolean;
  dark?: boolean;
  children: ReactNode;
}

const Pill = ({ href, onClick, pressed, dark = false, children }: PillProps) => {
  const foreground = dark ? colors.background : colors.text;
  const background = dark ? colors.dark : colors.background;
  const sx: SxProps<Theme> = {
    minHeight: 44,
    px: 2.25,
    gap: 1,
    borderRadius: "999px",
    fontFamily: "inherit",
    fontSize: 14,
    border: `1px solid ${dark ? colors.darkLine : colors.text}`,
    color: pressed ? background : foreground,
    bgcolor: pressed ? foreground : "transparent",
    transition: "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
    "&:hover": { borderColor: foreground },
  };

  return href ? (
    <ButtonBase href={href} sx={sx}>
      {children}
    </ButtonBase>
  ) : (
    <ButtonBase onClick={onClick} aria-pressed={pressed} sx={sx}>
      {children}
    </ButtonBase>
  );
};

export default Pill;
