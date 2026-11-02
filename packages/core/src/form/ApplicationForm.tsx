import { Box, Button, type SxProps, type Theme } from "@mui/material";
import { useId, useState, type FormEvent } from "react";
import { demoContent } from "../content/demo";
import { useDemo } from "../demo/useDemo";
import FormField from "./FormField";
import { visuallyHidden } from "./visuallyHidden";

interface ApplicationFormProps {
  submitLabel?: string;
  sx?: SxProps<Theme>;
}

const lineColor = "rgba(0, 0, 0, 0.28)";

const ApplicationForm = ({ submitLabel, sx }: ApplicationFormProps) => {
  const { openDialog } = useDemo();
  const [stage, setStage] = useState("");
  const [fileName, setFileName] = useState("");
  const id = useId();
  const content = demoContent.application;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    openDialog();
  };

  const choice = (active: boolean) => ({
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    minHeight: 44,
    px: 2,
    fontSize: 14,
    border: `1px solid ${active ? "currentColor" : lineColor}`,
    borderRadius: 1,
    cursor: "pointer",
    bgcolor: active ? "text.primary" : "transparent",
    color: active ? "background.default" : "inherit",
    transition: "background-color 0.2s ease, color 0.2s ease",
    "&:focus-within": { outline: "2px solid currentColor", outlineOffset: 2 },
  });

  return (
    <Box component="form" noValidate onSubmit={submit} sx={[{ display: "grid", gap: 3 }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Box sx={{ display: "grid", gap: 2.5, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
        <FormField id={`${id}-name`} label={content.name} lineColor={lineColor} autoComplete="name" />
        <FormField id={`${id}-phone`} label={content.phone} lineColor={lineColor} autoComplete="tel" type="tel" />
      </Box>
      <Box component="fieldset" sx={{ m: 0, p: 0, border: 0, minWidth: 0 }}>
        <Box component="legend" sx={{ p: 0, mb: 1.25, fontSize: 13, fontWeight: 500 }}>
          {content.stage}
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {content.stages.map((option) => (
            <Box component="label" key={option} sx={choice(stage === option)}>
              <Box
                component="input"
                type="radio"
                name={`${id}-stage`}
                value={option}
                checked={stage === option}
                onChange={() => setStage(option)}
                sx={visuallyHidden}
              />
              {option}
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, alignItems: "center" }}>
        <Button type="submit" variant="contained">
          {submitLabel ?? content.submit}
        </Button>
        <Box component="label" htmlFor={`${id}-file`} sx={{ ...choice(false), borderStyle: "dashed" }}>
          {fileName ? content.fileSelected(fileName) : content.file}
          <Box
            component="input"
            id={`${id}-file`}
            type="file"
            accept=".pdf,image/*"
            onChange={(event) => setFileName(event.currentTarget.files?.[0]?.name ?? "")}
            sx={visuallyHidden}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ApplicationForm;
