import { motion } from "framer-motion";

import MissionHeader from "./MissionHeader";
import MissionStatusGrid from "./MissionStatusGrid";
import MissionCommandCard from "./MissionCommandCard";
import AIDailyBrief from "./AIDailyBrief";
import QuickActions from "./QuickActions";

export default function MissionOverview() {
  return (
    <div className="space-y-8">

      {/* ========================================== */}
      {/* Header */}
      {/* ========================================== */}

      <MissionHeader />

      {/* ========================================== */}
      {/* National Status */}
      {/* ========================================== */}

      <MissionStatusGrid />

      {/* ========================================== */}
      {/* Main Workspace */}
      {/* ========================================== */}

      <div className="grid xl:grid-cols-12 gap-8">

        {/* Left */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: .2,
          }}
          className="xl:col-span-8 space-y-8"
        >

          <MissionCommandCard />

          <QuickActions />

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: .25,
          }}
          className="xl:col-span-4"
        >

          <AIDailyBrief />

        </motion.div>

      </div>

      {/* ========================================== */}
      {/* Bottom Section */}
      {/* ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .3,
        }}
        className="
        glass
        rounded-3xl
        border
        border-cyan-500/10
        p-8
        "
      >

        <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">

          National Situation Summary

        </p>

        <h2 className="text-3xl font-black mt-4">

          Operational Readiness

        </h2>

        <div className="grid lg:grid-cols-3 gap-8 mt-8">

          <SituationCard
            title="West Coast"
            status="Stable"
            value="12 Monitoring Zones"
            color="text-green-400"
          />

          <SituationCard
            title="East Coast"
            status="Elevated"
            value="3 Active Alerts"
            color="text-orange-400"
          />

          <SituationCard
            title="Island Territories"
            status="Critical"
            value="1 Emergency Mission"
            color="text-red-400"
          />

        </div>

      </motion.div>

    </div>
  );
}

function SituationCard({
  title,
  status,
  value,
  color,
}: {
  title: string;
  status: string;
  value: string;
  color: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-900/60 border border-white/5 p-6">

      <div className="flex justify-between items-center">

        <h3 className="font-bold text-xl">

          {title}

        </h3>

        <span className={`${color} font-semibold`}>

          {status}

        </span>

      </div>

      <p className="text-slate-400 mt-5">

        {value}

      </p>

    </div>
  );
}