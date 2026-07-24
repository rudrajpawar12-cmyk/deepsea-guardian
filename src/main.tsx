import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { CommandCenterProvider } from "./context/CommandCenterContext";
import { WorkspaceProvider } from "./context/WorkspaceContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CommandCenterProvider>
          <WorkspaceProvider>
            <App />
          </WorkspaceProvider>
        </CommandCenterProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);