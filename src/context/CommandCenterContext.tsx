import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export interface Incident {

  id: number;

  title: string;

  location: string;

  severity: "Low" | "Medium" | "High" | "Critical";

  latitude: number;

  longitude: number;

  status: string;

  description: string;
}

interface CommandCenterContextType {

  selectedIncident: Incident | null;

  setSelectedIncident: (incident: Incident) => void;
}

const CommandCenterContext =
  createContext<CommandCenterContextType | undefined>(
    undefined
  );

export function CommandCenterProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [selectedIncident, setSelectedIncident] =
    useState<Incident | null>(null);

  return (
    <CommandCenterContext.Provider
      value={{
        selectedIncident,
        setSelectedIncident,
      }}
    >
      {children}
    </CommandCenterContext.Provider>
  );
}

export function useCommandCenter() {

  const context = useContext(CommandCenterContext);

  if (!context) {

    throw new Error(
      "useCommandCenter must be used inside CommandCenterProvider"
    );
  }

  return context;
}