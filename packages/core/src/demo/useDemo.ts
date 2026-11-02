import { useContext } from "react";
import { DemoContext } from "./demoContext";

export const useDemo = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useDemo needs a DemoProvider");
  }
  return context;
};
