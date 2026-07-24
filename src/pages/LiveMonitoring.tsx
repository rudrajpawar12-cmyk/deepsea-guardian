import { motion } from "framer-motion";

import FloatingAssistant from "../components/dashboard/FloatingAssistant";

import CommandHeader from "../components/command/CommandHeader";
import GlobalStatusBar from "../components/command/GlobalStatusBar";
import NationalGISPanel from "../components/command/NationalGISPanel";
import RegionSelector from "../components/command/RegionSelector";
import CommandAlerts from "../components/command/CommandAlerts";

export default function LiveMonitoring() {
  return (
    <>
      <div className="space-y-8">

        <CommandHeader />

        <GlobalStatusBar />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 2xl:grid-cols-12 gap-6"
        >

          {/* GIS */}

          <div className="2xl:col-span-9">

            <NationalGISPanel />

          </div>

          {/* Right */}

          <div className="2xl:col-span-3 space-y-6">

            <RegionSelector />

            <CommandAlerts />

          </div>

        </motion.div>

      </div>

      <FloatingAssistant />
    </>
  );
}