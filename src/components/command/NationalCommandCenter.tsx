import { motion } from "framer-motion";

import SituationOverview from "./SituationOverview";
import NationalGISPanel from "./NationalGISPanel";
import DecisionCenter from "./DecisionCenter";
import IncidentCenter from "./IncidentCenter";
import OperationsTimeline from "./OperationsTimeline";
import GovernmentReport from "./GovernmentReport";
import CommandAlerts from "./CommandAlerts";

export default function NationalCommandCenter() {
  return (
    <div className="max-w-[1900px] mx-auto px-6 lg:px-8 py-8">

      {/* ================= HEADER ================= */}

      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="uppercase tracking-[0.45em] text-cyan-400 text-sm font-semibold">
          Government of India
        </p>

        <h1 className="text-5xl lg:text-6xl font-black mt-3">
          National Marine Pollution Command Center
        </h1>

        <p className="text-slate-400 mt-5 max-w-4xl leading-8">
          Integrated AI-powered command platform for monitoring,
          assessing and responding to marine pollution incidents
          across India's coastal waters.
        </p>
      </motion.div>

      {/* ================= SITUATION OVERVIEW ================= */}

      <SituationOverview />

      {/* ================= GIS + AI ================= */}

      <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6 my-8">

        <div className="2xl:col-span-8">
          <NationalGISPanel />
        </div>

        <div className="2xl:col-span-4">
          <DecisionCenter />
        </div>

      </div>

      {/* ================= INCIDENT CENTER ================= */}

      <div className="mb-8">
        <IncidentCenter />
      </div>

      {/* ================= OPERATIONS ================= */}

      <div className="mb-8">
        <OperationsTimeline />
      </div>

      {/* ================= REPORTS ================= */}

      <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">

        <div className="2xl:col-span-8">
          <GovernmentReport />
        </div>

        <div className="2xl:col-span-4">
          <CommandAlerts />
        </div>

      </div>

    </div>
  );
}