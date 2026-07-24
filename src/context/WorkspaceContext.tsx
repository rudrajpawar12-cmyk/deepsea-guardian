import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type Workspace =
  | "overview"
  | "monitoring"
  | "incidents"
  | "ai"
  | "resources"
  | "reports"
  | "analytics"
  | "settings";

interface WorkspaceContextType {
  workspace: Workspace;
  setWorkspace: (workspace: Workspace) => void;
}

const WorkspaceContext = createContext<
  WorkspaceContextType | undefined
>(undefined);

export function WorkspaceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [workspace, setWorkspace] =
    useState<Workspace>("overview");

  return (
    <WorkspaceContext.Provider
      value={{
        workspace,
        setWorkspace,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);

  if (!context) {
    throw new Error(
      "useWorkspace must be used inside WorkspaceProvider"
    );
  }

  return context;
}