import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OceanBackground from "./components/background/OceanBackground";

export default function App() {
  return (
    <BrowserRouter>
      {/* Animated Background */}
      <OceanBackground />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}