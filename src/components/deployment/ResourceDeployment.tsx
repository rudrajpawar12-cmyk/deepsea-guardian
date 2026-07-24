import { motion } from "framer-motion";

import FleetStatus from "./FleetStatus";
import DeploymentMap from "./DeploymentMap";
import ActiveResources from "./ActiveResources";
import MissionQueue from "./MissionQueue";
import DeploymentTimeline from "./DeploymentTimeline";
import LogisticsPanel from "./LogisticsPanel";

export default function ResourceDeployment() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <p className="uppercase tracking-[0.35em] text-emerald-400 text-sm">

          National Operations

        </p>

        <h1 className="text-5xl font-black mt-4">

          Resource Deployment Center

        </h1>

        <p className="text-slate-400 mt-5 max-w-3xl leading-8">

          Deploy Coast Guard vessels, helicopters,
          marine scientists and emergency equipment
          across India's coastline.

        </p>

      </motion.div>

      {/* TOP */}

      <div className="grid xl:grid-cols-12 gap-8">

        <div className="xl:col-span-4">

          <FleetStatus />

        </div>

        <div className="xl:col-span-8">

          <DeploymentMap />

        </div>

      </div>

      {/* CENTER */}

      <div className="grid xl:grid-cols-12 gap-8">

        <div className="xl:col-span-7">

          <MissionQueue />

        </div>

        <div className="xl:col-span-5">

          <ActiveResources />

        </div>

      </div>

      {/* BOTTOM */}

      <div className="grid xl:grid-cols-12 gap-8">

        <div className="xl:col-span-8">

          <DeploymentTimeline />

        </div>

        <div className="xl:col-span-4">

          <LogisticsPanel />

        </div>

      </div>

    </div>
  );
}