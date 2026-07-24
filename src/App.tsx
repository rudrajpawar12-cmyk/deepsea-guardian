import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import BootScreen from "./pages/BootScreen";
import Dashboard from "./pages/Dashboard";

import LiveMonitoring from "./pages/LiveMonitoring";
import IncidentManagement from "./pages/IncidentManagement";

// Next Phase
import MissionBriefing from "./pages/MissionBriefing";

function App() {
  return (
    <Routes>

      {/* ================= LANDING ================= */}

      <Route path="/" element={<Home />} />

      {/* ================= AUTH ================= */}

      <Route path="/login" element={<Login />} />

      <Route path="/boot" element={<BootScreen />} />

      <Route
        path="/mission-briefing"
        element={<MissionBriefing />}
      />

      {/* ================= COMMAND CENTER ================= */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/dashboard/live-monitoring"
        element={<LiveMonitoring />}
      />

      <Route
        path="/dashboard/incidents"
        element={<IncidentManagement />}
      />

      {/* ================= FUTURE MODULES ================= */}

      <Route
        path="/dashboard/ai"
        element={<Dashboard />}
      />

      <Route
        path="/dashboard/reports"
        element={<Dashboard />}
      />

      <Route
        path="/dashboard/operations"
        element={<Dashboard />}
      />

      <Route
        path="/dashboard/analytics"
        element={<Dashboard />}
      />

      <Route
        path="/dashboard/settings"
        element={<Dashboard />}
      />

      {/* ================= 404 ================= */}

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}

export default App;