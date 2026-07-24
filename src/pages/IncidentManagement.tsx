import { motion } from "framer-motion";

import FloatingAssistant from "../components/dashboard/FloatingAssistant";

import CommandHeader from "../components/command/CommandHeader";
import GlobalStatusBar from "../components/command/GlobalStatusBar";
import IncidentCenter from "../components/command/IncidentCenter";
import OperationsTimeline from "../components/command/OperationsTimeline";
import CommandAlerts from "../components/command/CommandAlerts";

export default function IncidentManagement() {
  return (
    <>
      <div className="space-y-8">

        <CommandHeader />

        <GlobalStatusBar />

        {/* PAGE TITLE */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
            Emergency Response
          </p>

          <h2 className="text-5xl font-black mt-3">
            Incident Management Center
          </h2>

          <p className="text-slate-400 mt-4 max-w-3xl leading-8">
            Monitor, assign, prioritize and respond to marine
            pollution incidents across India's coastal regions.
          </p>

        </motion.div>

        {/* CONTENT */}

        <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">

          {/* INCIDENTS */}

          <div className="2xl:col-span-8">

            <IncidentCenter />

          </div>

          {/* RIGHT */}

          <div className="2xl:col-span-4 space-y-6">

            <CommandAlerts />

            <OperationsTimeline />

          </div>

        </div>

      </div>

      <FloatingAssistant />

    </>
  );
}