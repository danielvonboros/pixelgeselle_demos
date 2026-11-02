import { useId } from "react";

export const useSvgId = (name: string) => `${name}-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
