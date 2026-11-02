import { createContext, type ReactNode } from "react";

export interface Route {
  path: string;
  title: string;
  element: ReactNode;
}

export interface RouteLocation {
  path: string;
  hash: string;
  type: "initial" | "push" | "pop";
}

export const RouterContext = createContext<RouteLocation | null>(null);
