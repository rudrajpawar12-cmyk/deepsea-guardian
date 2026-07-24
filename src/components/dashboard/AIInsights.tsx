import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const insights = [
  {
    title: "Pollution Forecast",
    description:
      "AI predicts a 14% increase in floating debris in the Arabian Sea within the next 48 hours.",
    color: "cyan",
  },
  {
    title: "Marine Health",
    description:
      "Protected marine regions continue to maintain healthy biodiversity with stable water quality.",
    color: "green",
  },
  {
    title: "Recommended Action",
    description:
      "Deploy autonomous cleanup drones to high-risk zones before pollution spreads further.",
    color: "yellow",
  },
];

export default function AIInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-3xl p-6 h-full flex flex-col hover-lift"
    >
      {/* Header */}

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center animate-glow">
            <BrainCircuit
              className="text-cyan-400"
              size={28}
            />
          </div>

          <div>

            <h2 className="text-2xl font-bold">
              AI Copilot
            </h2>

            <p className="text-slate-400 text-sm">
              Ocean Intelligence Engine
            </p>

          </div>

        </div>

        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
          ● ONLINE
        </span>
      </div>

      {/* Confidence */}

      <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-5 mb-6">

        <div className="flex justify-between items-center">

          <span className="text-slate-400">
            AI Confidence
          </span>

          <span className="text-cyan-400 font-bold text-lg">
            97.2%
          </span>

        </div>

        <div className="w-full bg-slate-800 rounded-full h-2 mt-4">

          <div
            className="bg-cyan-400 h-2 rounded-full"
            style={{ width: "97%" }}
          />

        </div>

      </div>

      {/* Insights */}

      <div className="space-y-5 flex-1">

        {insights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
            }}
            className="rounded-2xl bg-slate-800/70 border border-white/5 p-5"
          >

            <div className="flex items-start gap-3">

              <Sparkles
                className="text-cyan-400 mt-1"
                size={18}
              />

              <div>

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm mt-2 leading-6">
                  {item.description}
                </p>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* Footer */}

      <div className="mt-6 pt-6 border-t border-white/10">

        <div className="flex justify-between text-sm mb-5">

          <div className="flex items-center gap-2">
            <TrendingUp
              className="text-green-400"
              size={16}
            />

            <span>Risk Level</span>
          </div>

          <span className="text-yellow-400">
            Moderate
          </span>

        </div>

        <div className="flex justify-between text-sm">

          <div className="flex items-center gap-2">

            <ShieldCheck
              className="text-cyan-400"
              size={16}
            />

            <span>Last Analysis</span>

          </div>

          <span className="text-slate-400">
            12 sec ago
          </span>

        </div>

        <button className="mt-6 w-full bg-cyan-500 hover:bg-cyan-400 transition rounded-xl py-3 font-semibold text-black flex justify-center items-center gap-2">

          Generate Full Report

          <ArrowRight size={18} />

        </button>

      </div>

    </motion.div>
  );
}