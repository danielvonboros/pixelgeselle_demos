import { useCallback, useMemo, useState, type ReactNode } from "react";
import { DemoContext } from "./demoContext";
import type { DemoInfo } from "./demoInfo";
import DemoDialog from "./DemoDialog";

interface DemoProviderProps {
  info: DemoInfo;
  children: ReactNode;
}

const DemoProvider = ({ info, children }: DemoProviderProps) => {
  const [open, setOpen] = useState(false);
  const openDialog = useCallback(() => setOpen(true), []);
  const value = useMemo(() => ({ info, openDialog }), [info, openDialog]);

  return (
    <DemoContext.Provider value={value}>
      {children}
      <DemoDialog info={info} open={open} onClose={() => setOpen(false)} />
    </DemoContext.Provider>
  );
};

export default DemoProvider;
