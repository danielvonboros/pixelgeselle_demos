import { Box, ButtonBase } from "@mui/material";
import type { Wood } from "../../content/woods";
import { photo } from "../../photos";
import { colors } from "../../theme";

interface WoodPickerProps {
  woods: Wood[];
  selected: string;
  label: string;
  onSelect: (id: string) => void;
}

const WoodPicker = ({ woods, selected, label, onSelect }: WoodPickerProps) => (
  <Box role="group" aria-label={label} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
    {woods.map((wood) => {
      const active = wood.id === selected;
      const source = photo(wood.photo);
      return (
        <ButtonBase
          key={wood.id}
          onClick={() => onSelect(wood.id)}
          aria-pressed={active}
          sx={{
            minHeight: 44,
            pl: 1,
            pr: 2,
            gap: 1.25,
            fontFamily: "inherit",
            fontSize: 13,
            color: colors.text,
            borderRadius: "999px",
            border: `1px solid ${active ? colors.text : colors.line}`,
            transition: "border-color 0.2s ease",
            "&:hover": { borderColor: colors.text },
          }}
        >
          <Box
            component="span"
            aria-hidden="true"
            sx={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              bgcolor: wood.hex,
              backgroundImage: source ? `url(${source.small})` : undefined,
              backgroundSize: "cover",
              border: `1px solid ${colors.line}`,
            }}
          />
          {wood.name}
        </ButtonBase>
      );
    })}
  </Box>
);

export default WoodPicker;
