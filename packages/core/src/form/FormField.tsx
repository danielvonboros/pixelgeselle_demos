import { Box, InputBase } from "@mui/material";

interface FormFieldProps {
  id: string;
  label: string;
  lineColor: string;
  multiline?: boolean;
  placeholder?: string;
  autoComplete?: string;
  type?: string;
}

const FormField = ({ id, label, lineColor, multiline, placeholder, autoComplete, type = "text" }: FormFieldProps) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
    <Box component="label" htmlFor={id} sx={{ fontSize: 13, fontWeight: 500 }}>
      {label}
    </Box>
    <InputBase
      id={id}
      name={id}
      type={type}
      multiline={multiline}
      minRows={multiline ? 4 : undefined}
      placeholder={placeholder}
      autoComplete={autoComplete}
      sx={{
        color: "inherit",
        fontSize: 16,
        border: `1px solid ${lineColor}`,
        borderRadius: 1,
        px: 1.75,
        py: 1.25,
        minHeight: 48,
        alignItems: multiline ? "flex-start" : "center",
        "&.Mui-focused": { borderColor: "currentColor" },
        "& textarea, & input": { p: 0 },
        "& ::placeholder": { color: "inherit", opacity: 0.55 },
      }}
    />
  </Box>
);

export default FormField;
