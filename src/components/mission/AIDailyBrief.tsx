import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  TrendingUp,
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function AIDailyBrief() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.35 }}
      className="glass rounded-3xl border border-violet-500/20 overflow-hidden"
    >
      {/* Header */}

      <div className="p-8 border-b border-white/10">

        <div className="flex justify-between items-center">

          <div>

            <p className="uppercase tracking-[0.35em] text-violet-400 text-sm">

              Gemini AI

            </p>

            <h2 className="text-3xl font-black mt-3">

              Daily Intelligence Brief

            </h2>

          </div>

          <div className="w-16 h-16 rounded-2xl bg-violet-500/10 flex items-center justify-center">

            <BrainCircuit
              className="text-violet-400"
              size={34}
            />

          </div>

        </div>

      </div>

      {/* Summary */}

      <div className="p-8">

        <div className="rounded-2xl bg-violet-500/10 border border-violet-500/20 p-6">

          <div className="flex gap-4">

            <Sparkles className="text-violet-400 mt-1" />

            <p className="leading-8 text-slate-300">

              AI analysis indicates an increased probability of
              pollution expansion within the Arabian Sea during
              the next 12 hours due to changing ocean currents.
              Immediate surveillance is recommended.

            </p>

          </div>

        </div>

        {/* AI Findings */}

        <div className="space-y-5 mt-8">

          <BriefItem
            icon={<TrendingUp className="text-cyan-400" />}
            title="Prediction Confidence"
            value="96%"
          />

          <BriefItem
            icon={<ShieldAlert className="text-red-400" />}
            title="Highest Risk Zone"
            value="Mumbai Coastline"
          />

          <BriefItem
            icon={<CheckCircle2 className="text-green-400" />}
            title="Recommended Action"
            value="Deploy Coastal Surveillance"
          />

        </div>

        {/* AI Confidence */}

        <div className="mt-10">

          <div className="flex justify-between mb-3">

            <span className="text-slate-400">

              AI Confidence

            </span>

            <span className="text-violet-400 font-bold">

              96%

            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-800 overflow-hidden">

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "96%",
              }}
              transition={{
                duration: 1.2,
              }}
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
            />

          </div>

        </div>

        {/* Footer */}

        <button
          className="
          mt-10
          w-full
          rounded-2xl
          border
          border-violet-500/20
          hover:border-violet-400
          transition-all
          p-4
          flex
          justify-center
          items-center
          gap-3
          "
        >

          View Full AI Analysis

          <ArrowRight size={18} />

        </button>

      </div>

    </motion.div>
  );
}

function BriefItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex justify-between items-center">

      <div className="flex items-center gap-4">

        {icon}

        <span>

          {title}

        </span>

      </div>

      <span className="font-semibold text-white">

        {value}

      </span>

    </div>
  );
}