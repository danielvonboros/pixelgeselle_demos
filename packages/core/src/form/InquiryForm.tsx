import { Box, Button, type SxProps, type Theme } from "@mui/material";
import { useId, useState, type FormEvent } from "react";
import { demoContent } from "../content/demo";
import { useDemo } from "../demo/useDemo";
import FormField from "./FormField";

interface InquiryFormProps {
  withPhotos?: boolean;
  inverted?: boolean;
  messagePlaceholder?: string;
  submitLabel?: string;
  sx?: SxProps<Theme>;
}

const hidden = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "1px",
  height: "1px",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
} as const;

const InquiryForm = ({ withPhotos = false, inverted = false, messagePlaceholder, submitLabel, sx }: InquiryFormProps) => {
  const { openDialog } = useDemo();
  const [photoCount, setPhotoCount] = useState(0);
  const id = useId();
  const content = demoContent.form;
  const lineColor = inverted ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.28)";

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    openDialog();
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={submit}
      sx={[{ display: "grid", gap: 2.5 }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <Box sx={{ display: "grid", gap: 2.5, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
        <FormField id={`${id}-name`} label={content.name} lineColor={lineColor} autoComplete="name" />
        <FormField id={`${id}-contact`} label={content.contact} lineColor={lineColor} autoComplete="email" />
      </Box>
      <FormField
        id={`${id}-message`}
        label={content.message}
        lineColor={lineColor}
        placeholder={messagePlaceholder}
        multiline
      />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, alignItems: "center" }}>
        <Button
          type="submit"
          variant="contained"
          sx={inverted ? { bgcolor: "background.default", color: "text.primary", "&:hover": { bgcolor: "background.paper" } } : undefined}
        >
          {submitLabel ?? content.submit}
        </Button>
        {withPhotos && (
          <Box
            component="label"
            htmlFor={`${id}-photos`}
            sx={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              minHeight: 44,
              px: 2,
              fontSize: 14,
              border: `1px dashed ${lineColor}`,
              borderRadius: 1,
              cursor: "pointer",
              "&:focus-within": { outline: "2px solid currentColor", outlineOffset: 2 },
            }}
          >
            {photoCount ? content.photosSelected(photoCount) : content.photos}
            <Box
              component="input"
              id={`${id}-photos`}
              type="file"
              accept="image/*"
              multiple
              onChange={(event) => setPhotoCount(event.currentTarget.files?.length ?? 0)}
              sx={hidden}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default InquiryForm;
