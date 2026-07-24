import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldAlert,
  Target,
} from "lucide-react";

import { predictPollution } from "../../services/prediction";

export default function AIPrediction() {
  const result = predictPollution({
    marineHealth: 82,
    pollutionIndex: 68,
    plasticWaste: 74,
    activeAlerts: 6,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-3xl p-6"
    >
      <div className="flex items-center gap-3 mb-6">

        <BrainCircuit
          className="text-cyan-400"
          size={28}
        />

        <h2 className="text-2xl font-bold">
          AI Pollution Prediction
        </h2>

      </div>

      <div className="space-y-6">

        <div>

          <p className="text-slate-400">
            Risk Level
          </p>

          <h1
            className={`text-5xl font-black mt-2 ${result.color}`}
          >
            {result.risk}
          </h1>

        </div>

        <div>

          <div className="flex justify-between">

            <span className="text-slate-400">
              AI Confidence
            </span>

            <span className="text-cyan-400 font-bold">
              {result.confidence}%
            </span>

          </div>

          <div className="w-full bg-slate-800 rounded-full h-3 mt-3">

            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${result.confidence}%`,
              }}
              transition={{ duration: 1.5 }}
              className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-400"
            />

          </div>

        </div>

        <div className="rounded-2xl bg-slate-800 p-5">

          <div className="flex gap-3 mb-3">

            <ShieldAlert
              className="text-yellow-400"
              size={20}
            />

            <h3 className="font-semibold">
              Prediction
            </h3>

          </div>

          <p className="text-slate-300 leading-7">
            {result.prediction}
          </p>

        </div>

        <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-5">

          <div className="flex gap-3 mb-3">

            <Target
              className="text-cyan-400"
              size={20}
            />

            <h3 className="font-semibold">
              Recommended Action
            </h3>

          </div>

          <p className="text-slate-300 leading-7">
            {result.recommendation}
          </p>

        </div>

      </div>
    </motion.div>
  );
}