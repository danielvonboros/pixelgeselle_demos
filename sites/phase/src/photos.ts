import { createPhotoLibrary } from "@pixelgeselle/core";

export const photo = createPhotoLibrary(
  import.meta.glob<string>("./assets/photos/*.jpg", { eager: true, import: "default" }),
);
