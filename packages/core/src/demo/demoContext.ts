import { createContext } from "react";
import type { DemoInfo } from "./demoInfo";

export interface DemoContextValue {
  info: DemoInfo;
  openDialog: () => void;
}

export const DemoContext = createContext<DemoContextValue | null>(null);
