import { ButtonBase } from "@mui/material";
import { colors } from "../../theme";

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const FilterButton = ({ label, active, onClick }: FilterButtonProps) => (
  <ButtonBase
    onClick={onClick}
    aria-pressed={active}
    sx={{
      minHeight: 44,
      px: 0.5,
      fontFamily: "inherit",
      fontSize: 14,
      color: active ? colors.text : colors.muted,
      textDecoration: active ? "underline" : "none",
      textUnderlineOffset: "6px",
      "&:hover": { color: colors.text },
    }}
  >
    {label}
  </ButtonBase>
);

export default FilterButton;
